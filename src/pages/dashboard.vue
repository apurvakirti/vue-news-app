<template>
    <div id="topnews-container">
      <div class="topnews-wrapper" v-if="!isError">
        <template>
          <h1 class="noresult" v-if="getTotalResults">
            {{ getTotalResults }} News Result(s)
          </h1>
          <div
            :class="[
              {
                loading: isLoading,
              },
              'topnews',
            ]"
            v-if="isNews">
            <NewsCard
              v-for="(items, index) in getNews"
              :key="index"
              :publishedAt="items.publishedAt"
              :imgUrl="items.urlToImage"
              :title="items.title"
              :description="items.description"
              :author="items.author"
              :source="items.source.name"
              @bookmark="bookmarkNews(items.id)"
              :isBookmarked="items.bookmarked"
              :id="items.id" />
          </div>
          <h1 class="noresult" v-else-if="!isLoading">No data</h1>
        </template>
      </div>
      <h5 class="error" v-else>{{ error }}</h5>
    </div>
  </template>
  
  <script>
  import NewsCard from '../components/newsCard.vue';
  
  export default {
    components: {
      NewsCard,
    },
    computed: {
      getNews() {
        return this.$store.state.newsItems;
      },
      isLoading() {
        return this.$store.state.isLoading;
      },
      getTotalResults() {
        return this.$store.state.totalResults;
      },
      isNews() {
        return this.getNews.length !== 0;
      },
      isError() {
        return this.$store.state.isError;
      },
      error() {
        return this.$store.state.error;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      getNewsData(callApi = true) {
        if(callApi) {
          if (
              this.$store.state.countryCode ||
              this.$store.state.categoryName ||
              this.$store.state.searchKeyword
            ) {
              this.$store.dispatch('fetchNews', false);
              
            } else {
              this.$store.dispatch('fetchNews');
            }
        }
            
      },
      handleScroll() {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset;
        const clientHeight = document.documentElement.clientHeight;
        const bottomThreshold = 100;
        if (scrollHeight - scrollTop - clientHeight < bottomThreshold && !this.$store.state.isLoading) {
          this.$store.commit('updateCurrentPage');
          this.getNewsData();
        }
    },
      bookmarkNews(id) {
        this.$store.commit('updateBookmark', id);
      },
    },
  };
  </script>
  <style scoped>
  .noresult {
  font-weight: 600;
  font-size: 20px;
  margin: 25px 0 10px;
}
.topnews {
  display: grid;
  grid-template-columns: repeat(3, 32%);
  padding: 0 8%;
  margin-top: 25px;
  margin-bottom: 25px;
  grid-gap: 20px;
}
.topnews-wrapper {
  display: flex;
  flex-direction: column;
}
.loading {
  width: 100%;
  background: transparent;
}
h5.error {
  text-align: center;
  border: 1px solid red;
  display: inline-block;
  border-radius: 5px;
  margin: 20px 10%;
  background: red;
  color: #fff;
  padding: 6px;
}

@media (max-width: 560px) {
  .newscard-wrapper {
    font-size: 12px;
  }
  button {
    font-size: 11px;
  }
}

@media only screen and (max-width: 615px) {
  .topnews {
    grid-template-columns: 1fr;
  }
}

@media only screen and (max-width: 768px) {
  .topnews {
    grid-template-columns: repeat(1, 100%);
  }
}

@media only screen and (min-width: 992px) {
  .topnews {
    grid-template-columns: repeat(3, 32.1%);
  }
}

@media only screen and (min-width: 1200px) {
  .topnews {
    grid-template-columns: repeat(3, 32.1%);
  }
}

  </style>
  