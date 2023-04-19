<template>
  <div class="navbar">
    <router-link to="/">
      <h3 class="title">News Search & Bookmark</h3>
    </router-link>
    <div class="nav-links">
      <router-link to="/">
        <span id="top-news"> Top News </span>
      </router-link>
      <router-link to="/bookmarks">
        <span id="bookmark"> Bookmarks </span>
      </router-link>
      <span class="nav-circle" v-if="getBookmarked.length"></span>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      getBookmarked() {
        return this.$store.state.newsItems.filter((item) => item.bookmarked);
      }
    },
  };
  </script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  height: 55px;
  padding: 0 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: #343a40;
  z-index: 1;
}
.nav-links {
  min-width: 180px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: calc(1vmax + 4px);
}
a {
  text-decoration: none;
  color: #8f908b;
  margin: 0 5px;
  padding: 0;
}
a.active {
  color: #8f908b;
}

h3 {
  font-weight: 500;
  font-size: calc(1.3vmax + 5px);
}
.title {
  color: #fff;
}
a:hover,
:focus {
  color: #fff;
}
.router-link-exact-active {
  color: #fff;
}
.nav-circle {
  margin-left: 5px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #fff;
}

@media screen and (max-device-width: 844px) {
  .title {
    font-size: calc(1.5vmax + 5px);
  }
  .nav-links {
    min-width: 80px;
    font-size: calc(1.5vmax + 3px);
  }
}

@media screen and (max-device-width: 470px) {
  .navbar {
    flex-direction: column;
    padding: 8px 8%;
  }
}

</style>
