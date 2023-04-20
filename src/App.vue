<template>
    <div id="app">
      <div>
        <div class="navwrapper">
          <Navbar />
          <Filters v-if="isHomePage" />
        </div>
        <router-view></router-view>
        <div>
          <Loader v-if="isLoading" />
        </div>
      </div>
    </div>
  </template>

<script>
 import Vue from 'vue';
  import Navbar from './components/navbar.vue';
  import Filters from './components/filters.vue';
  import Loader from './components/loader.vue';
  
  export default Vue.extend({
    name: 'App',
    components: {
      Navbar,
      Filters,
      Loader,
    },
    mounted() {
      this.$store.dispatch('fetchNews', {
        fetchEverything: true, onScroll: false
        });
    },
    computed: {
      isHomePage() {
        return this.$route.path === '/' ? true : false;
      },
      isLoading() {
        return this.$store.state.isLoading;
      },
    },
  });
</script>

<style>
 @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
  #app {
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  .navwrapper {
    position: sticky;
    top: 0;
    z-index: 1;
    width: 100%;
  }
</style>
