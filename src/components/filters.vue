<template>
  <div class="wrapper">
    <Dropdown
      :options="getCountryList"
      defaultVal="Country"
      class="select"
      v-model="country"
      :showSearchBox="true" 
      />
    <Dropdown
      :options="categories"
      defaultVal="Category"
      class="select"
      v-model="category" />
    <input
      class="keyword-input"
      type="text"
      v-model="searchKeyword"
      placeholder="Keyword (optional)" />
    <div class="filter-btns">
      <Button @click="getNews">
        <img src="../assets/icons/search.svg" alt="search-btn" />
      </Button>
      <Button @click="resetFilter">
        <img src="../assets/icons/reset-icon.svg" alt="reset-btn" />
      </Button>
    </div>
  </div>
</template>
<script>
import Dropdown from './dropdown.vue';
import countries from '../json/countries.json';
import categories from '../json/categories.json';

export default {
  components: {
    Dropdown,
  },
  data() {
    return {
      categories: categories.categories,
      currentPage: this.$store.state.currentPage,
      searchKeyword: this.$store.state.searchKeyword,
      country: this.$store.state.countryCode,
      category: this.category ? this.category : this.$store.state.categoryName,
    };
  },
  computed: {
    getCountryList() {
      let countryNamelist = countries.map((country) => country.name);
      return countryNamelist;
    },
  },
  watch: {
    currentPage() {
      this.getNews();
    },
    searchKeyword() {
      this.$store.commit('setSearchKeyword', this.searchKeyword);
    },
    country() {
      this.$store.commit('setCountry', this.country);
    },
    category() {
      this.$store.commit('setCategory', this.category);
    },
  },
  methods: {
    getNews() {
      window.scrollTo(0, 0);
      this.$store.commit('resetCurrentPage');

      if (
        this.$store.state.searchKeyword ||
        this.$store.state.categoryName ||
        this.$store.state.countryCode
      ) {
        this.$store.dispatch('fetchNews', false);

      } else {
        this.$store.dispatch('fetchNews');
      }
    },
    resetFilter() {
      this.searchKeyword = '';
      this.country = '';
      this.category = '';
    },
  },
};
</script>
<style scoped>
.wrapper {
  position: sticky;
  top: 60px;
  background-color: #a8a8a8;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px 5%;
  z-index: 1;
}
.wrapper button {
  background: #353a40;
  border: 1px solid #353a40;
  border-radius: 5px;
  color: #fff;
  height: 36px;
  width: 45px;
}
.wrapper button:first-of-type {
  margin-left: 5px;
}

input {
  height: 36px;
  border-radius: 5px;
  border: 1px solid #a8a8a8;
  width: 250px;
  text-indent: 16px;
  display: flex;
  justify-content: center;
  outline: none;
  color: black;
  box-sizing: border-box;
  font-size: 16px;
  font-family: "Source Sans Pro";
}
input::placeholder {
  text-transform: capitalize;
  background-color: #fff;
  border-radius: 5px;
  color: #a8a8a8;
  text-align: start;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  margin: auto;
}
.filter-btns {
  display: flex;
  gap: 20px;
}
.keyword-input {
  color: black;
}

@media (max-width: 560px) {
  .wrapper {
    flex-direction: column;
  }
  input {
    font-size: 12px;
  }
  .custom-select {
    width: 100%;
    font-size: 12px;
  }
}

</style>
