import Vue from "vue";
import Vuex from "vuex";
import { actions } from "./actions";
import { mutations } from "./mutations";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isLoading: false,
    isError: false,
    newsItems: [],
    currentPage: 1,
    totalPages: 0,
    resultsPerPage: 10,
    searchKeyword: "",
    categoryName: "",
    countryCode: "",
    error: "",
    defaultQuery: "politics",
    totalResults: null,
    pageSize: 9
  },
  mutations,
  actions
});

export default store;

