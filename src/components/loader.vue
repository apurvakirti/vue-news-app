<template>
  <div class="loader-wrapper">
    <WatcheLoaderIcon />
  </div>
</template>

<script>
import WatcheLoaderIcon from '../assets/vue-icons/watche-loader.vue';
export default {
  components: {
    WatcheLoaderIcon,
  },
};
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Comfortaa:400,700,300);
*,
html {
  margin: 0;
  padding: 0;
}
svg {
  width: 100px;
  height: 100px;
  margin: 20px;
  display: inline-block;
}

.loader-wrapper {
  background: #0c0c0c6b;
  border: 1px solid;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

</style>
