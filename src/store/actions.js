import axios from 'axios';
import { CONFIG } from "../constants/config";
import countries from '../json/countries.json'
function getCountryCode(name) {
  if (name) {
    let filteredCountry = countries.filter((country) => {
      if (country.name === name) {
        return country;
      }
    });
    return filteredCountry.length ? filteredCountry[0].value.toLowerCase() : '';
  }
  return '';
}

export const actions = {
  async fetchNews({state, commit}, fetchEverything = true) {
    const code = getCountryCode(state.countryCode)
    try {
      commit('setLoader');
      commit('isError', false);
      const apiUrl = (fetchEverything ? 
      `${CONFIG.BASE_URL}/everything?apiKey=${CONFIG.API_KEY}&q=${state.defaultQuery}&pageSize=9&page=${state.currentPage}` :
      `${CONFIG.BASE_URL}/top-headlines?apiKey=${CONFIG.API_KEY}&category=${state.categoryName}&country=${code}&q=${state.searchKeyword}&pageSize=9&page=${state.currentPage}`)
      const res = await axios.get(apiUrl)
        commit('updateNewsItems', {
          results: [...state.newsItems, ...res.data.articles],
          totalResults: res.data.totalResults,
        });
      const totalPages = Math.ceil(
        res.data.totalResults / state.resultsPerPage
      );
      commit('updateTotalPages', totalPages);
    } catch (e) {
      commit('isError', true);
      commit('setError', e.response.data.message);
      throw new Error(e);
    } finally {
      commit('removeLoader');
    }
  },
};
