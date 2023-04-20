<template>
    <div class="bookmarks" v-if="isBookmark">
      <NewsCard
        v-for="(items, index) in getBookmarked"
        :key="index"
        :publishedAt="items.publishedAt"
        :imgUrl="items.urlToImage"
        :title="items.title"
        :description="items.description"
        :author="items.author"
        :source="items.source.name"
        @bookmark="bookmarkArticle(items.id)"
        :isBookmarked="items.bookmarked"
        :id="items.id" />
    </div>
    <h1 class="nobookmark" v-else>No Bookmarks</h1>
  </template>
  
  <script>
  import NewsCard from '../components/newsCard.vue';
  export default {
    components: {
      NewsCard,
    },
    methods: {
      bookmarkArticle(id) {
        this.$store.commit('updateBookmark', id);
      },
    },
    computed: {
      getBookmarked() {
        return this.$store.state.newsItems.filter((item) => item.bookmarked);
      },
      isBookmark() {
        return this.getBookmarked.length !== 0;
      },
    }
  };
  </script>
  
  <style scoped>
  .bookmarks {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 8%;
  margin-top: 25px;
  margin-bottom: 25px;
  grid-gap: 20px;
}
.nobookmark {
  font-weight: 600;
  font-size: 20px;
  margin: 25px 0 10px;
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
  .bookmarks {
    grid-template-columns: 1fr;
  }
}

@media only screen and (min-width: 615px) {
  .bookmarks {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media only screen and (min-width: 768px) {
  .bookmarks {
    grid-template-columns: repeat(2, 1fr);
  }
}


@media only screen and (max-width: 768px) {
  .bookmarks {
    grid-template-columns: repeat(1, 100%);
  }
}

@media only screen and (min-width: 992px) {
  .bookmarks {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media only screen and (min-width: 1200px) {
  .bookmarks {
    grid-template-columns: repeat(3, 1fr);
  }
}

  </style>
  