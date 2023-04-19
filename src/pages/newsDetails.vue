<template>
    <div class="details-wrapper">
      <div class="details-container">
        <router-link to="/" class="display-link">
          <div class="title back-btn">
            <img src="../assets/icons/Back_Arrow.svg" alt="back-img" />
            <h1 v-if="!isValidId" class="error">
              Oops! Something went wrong. Go To Dashboard
            </h1>
          </div>
        </router-link>
        <div class="article" v-if="isValidId">
          <figure>
            <img
              class="news-image"
              loading="lazy"
              :src="imgUrl || 'https://placehold.jp/3d4070/ffffff/330x200.png'"
              alt="image" />
          </figure>
          <h1 class="title">
            {{ title }}
          </h1>
          <div class="author">
            <h5>
              {{ author }}
            </h5>
          </div>
          <p class="description">
            {{ description }}
          </p>
          
          <p class="content">
            {{ content }}
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        author: '',
        imgUrl: '',
        content: '',
        id: this.$route.query.id,
      };
    },
    mounted() {
      const filteredNews = this.$store.state.newsItems.filter(
        (newsItem) => newsItem.id == this.id
      );
      this.title = filteredNews[0].title;
      this.description = filteredNews[0].description;
      this.content = filteredNews[0].content;
      this.author = filteredNews[0].author;
      this.imgUrl = filteredNews[0].urlToImage;
    },
    computed: {
      isValidId() {
        return this.title || this.imgUrl;
      },
    },
  };
  </script>
  
  <style scoped>
  .details-wrapper {
  padding: 20px 10%;
  height: 110vh;
}
.details-container {
  background: #a8a8a8;
  width: 100%;
  border-radius: 5px;
  position: relative;
  padding: 20px 0;
  color: #fff;
}

.author {
  display: flex;
  justify-content: space-between;
  padding: 0 12.5%;
  color: black;
  font-size: 1.5vw;
}
.title {
  font-size: 2.5vw;
  width: 50%;
}
.description,
.content {
  font-size: 1.2vw;
  width: 50%;
}
.title,
.description,
.content {
  margin: auto;
  width: 75%;
  text-align: justify;
  margin-bottom: 10px;
  margin-top: 5px;
  color: black;
}
.news-image {
  height: 100%;
  width: 75%;
  text-align: justify;
}
.error {
  font-weight: 600;
  font-size: 20px;
  margin-left: 15px;
  display: inline;
  color: black;
}
.back-btn {
  align-self: center;
  margin: auto;
  text-align: start;
  margin-top: 10px;
  color: black;
}
.display-link {
  display: contents;
}
.back-btn img {
  width: 2vw;
}
@media (max-device-width: 560px) {
  .back-btn img {
    width: 12px;
  }
}
@media (max-width: 560px) {
  .title {
    font-size: 16px;
  }
  .description,
  .content {
    font-size: 12px;
  }
}

  </style>
  