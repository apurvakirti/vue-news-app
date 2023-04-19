<template>
  <div class="newscard-wrapper">
    <img
      :src="imgUrl || 'https://placehold.jp/3d4070/ffffff/330x200.png'"
      height="200px"
      width="100%"
      alt="news image" />
    <div>
      <div class="body">
        <div class="body-container">
          <h4 class="card-title">
            {{ title }}
          </h4>
          <h5 class="card-source">
            {{ source }}
          </h5>
          <p class="card-author">
            {{ author }}
          </p>
          <p class="card-description">
            {{ description }}
          </p>
          <div class="card-btn">
            <router-link
              :to="{
                path: '/news-details',
                query: {
                  id,
                },
              }">
              <Button> Go to Page </Button>
            </router-link>
            <span class="card-bookmard-icon" @click="addToFav">
              <BookmarkIcon :is-bookmarked="isBookmarked" />
            </span>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-container">
          <p>
            Published:
            {{ date }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from './button.vue';
import BookmarkIcon from '../assets/vue-icons/bookmark-icon.vue';
export default {
  components: {
    Button,
    BookmarkIcon,
  },
  props: [
    'title',
    'description',
    'imgUrl',
    'publishedAt',
    'author',
    'source',
    'isBookmarked',
    'id',
  ],
  computed: {
    date() {
      return this.publishedAt
    },
  },
  methods: {
    addToFav() {
      this.$emit('bookmark');
    },
    gotoPage() {
      this.$emit('gotoPage');
    },
  },
};
</script>

<style scoped>
.newscard-wrapper a {
  text-decoration: none;
  color: #ddd;
  display: contents;
}
.newscard-wrapper {
  background: #fff;
  border-radius: 2px;
  height: max-content;
}
.body {
  height: 100%;
  padding: 5px;
}
.footer {
  height: 100%;
}
h4 {
  text-align: start;
  margin-bottom: 5px;
}
h5 {
  text-align: start;
}
.card-author {
  font-size: 14px;
  text-align: start;
  margin-bottom: 5px;
  overflow: hidden;
  color: #8b8885;
}
.card-description {
  text-align: start;
  overflow: hidden;
  font-kerning: normal;
  font-weight: 300;
  margin-bottom: 15px;
}
.footer {
  border-top: 1px solid #ddd;
  padding: none;
}
.footer p {
  font-size: 14px;
  text-align: start;
  padding: 5px;
}
.card-title {
  text-overflow: ellipsis;
  white-space: pre-line;
  margin-bottom: 5px;
  color: #323347;
}
.card-source {
  height: 15px;
  color: #8b8885;
}

.card-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}
.card-bookmard-icon {
  text-align: center;
  cursor: pointer;
}
.footer-container,
.body-container {
  padding: 10px;
}
.footer-container {
  background: #f7f7f7;
  color: #858889;
}

button {
  width: 36%;
  font-weight: 600;
}
.card-bookmard-icon {
  font-size: 30px;
}

.card-bookmard-icon svg {
  width: 25px;
}

</style>
