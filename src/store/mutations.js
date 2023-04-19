export const mutations = {
    setLoader(state) {
      state.isLoading = true;
    },
    setCountry(state, country) {
      state.countryCode = country;
    },
    setCategory(state, category) {
      state.categoryName = category;
    },
    removeLoader(state) {
      state.isLoading = false;
    },
    isError(state, payload) {
      state.isError = payload;
    },
    setError(state, payload) {
      state.error = payload;
    },
    updateBookmark(state, payload) {
      state.newsItems = state.newsItems.map((article) => {
        return payload === article.id
          ? {
              ...article,
              bookmarked: !article.bookmarked,
            }
          : article;
      });
    },
    updateNewsItems(state, payload) {
      const modifyPayload = payload.results.map((newsItem, index) => {
        if('id' in newsItem) {
          return newsItem;
        } else {
          return {
            ...newsItem,
            bookmarked: false,
            id: index,
          };
        }
        
      });
      state.newsItems = modifyPayload;
      state.totalResults = payload.totalResults;
    },
    updateTotalPages(state, payload) {
      state.totalPages = payload;
    },
    setSearchKeyword(state, payload) {
      state.searchKeyword = payload;
    },
    updateCurrentPage(state) {
      if (state.totalPages >= state.currentPage) {
        state.currentPage += 1;
      }
    },
    resetCurrentPage(state) {
      state.currentPage = 1;
    },
  };
  