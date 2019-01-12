<template>
  <div id="head-banner">
    <div  class="head-banner" v-if="src" style="position:relative">
      <div class="head-banner-text">
        <div class="caption-inner">
          <h3>
            <a href="#">New Sol, New Hope</a>
          </h3>
          <p class="text-links small serif">
            <a href="#">Design</a>
            <a href="#">Art</a>
          </p>
        </div>
      </div>
      <img v-parallax="0.2" :src="src" :alt="alt" class="img-fluid">
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueParallaxJs from "vue-parallax-js";

Vue.use(VueParallaxJs);

export default {
  name: "HeaderBanner",
  props: ["title", "src", "alt"],
  mounted: function() {
    setTimeout(function() {
      window.scrollTo(0, 5);
      window.scrollTo(0, 0);
    }, 100);
  }
};
</script>

<style lang="scss" >

#head-banner {
  .head-banner {
    max-height: 100vh;
    overflow: hidden;
    img {
      position: relative;
      z-index: 1;

    }
    .head-banner-text {
      position: absolute;
      height: 100%;
      width: 80%;
      left: 10%;
      display: flex;
      z-index: 2;
      h1 {
        width: 1140px;
        margin: auto;
        color: white;
      }
    }
  }
  .caption-inner {
    position: absolute;
    display: block;
    top: 80%;
    left: 38%;
    transform: translateX(-50%);
    transform: translateY(-30%);
    @media (max-width: 1024px){
    top: 70%;
    left: 30%;
    transform: translateX(-50%);
    transform: translateY(-30%);
    }
    @media (max-width: 768px){
      top: 70%;
    left: 25%;
    transform: translateX(-50%);
    transform: translateY(-30%);
    }
    @media (max-width: 425px){
    top:60%;
    left: 25%;
    transform: translateX(-50%);
    transform: translateY(-30%);
    }
    a {
      color: white;
      font-weight: 500;
      &:hover {
                text-decoration: none;
        color: grey;
      }
    }  
    p {
      text-align: center;
    }
  }
  .head-banner-text.caption-inner.a :hover {
    text-decoration: none;
  }
  h3 {
    font-size: 3.7897rem;
        @media (max-width: 1024px){
      font-size: 3.5rem;     
    }
  }
  .small {
    font-size: 1.19rem;
    color: #909090;
    font-weight: 400;
  }
  .serif {
    font-family: "Playfair Display", serif;
  }

}
</style>