<template>
  <div id="parallax-image" class="container px-0 ">
    <!-- Portfolio Item -->
    <figure class="parallax-folio-item">
      <div class="item-media" :style="changeImagePosition">
        <img v-parallax="-0.1" :src="src" :alt="alt">
      </div>
      <figcaption  id="figcaption" class="visible" :data-aos="AosValue" :style="changeFigcaptionPosition">
        <div class="item-caption-inner">
          <p class="text-links">
            <a href="#">Design</a>
            <a href="#">Art</a>
          </p>
          <h3 class="bold uppercase">{{title}}</h3>
          <a href="#" class="button style-3 border-2">View Project</a>
        </div>
      </figcaption>
    </figure>
    <!-- /Portfolio Item -->
  </div>
</template>

<script>
import Vue from "vue";
import VueParallaxJs from "vue-parallax-js";
import AOS from 'aos';
import "aos/dist/aos.css";

Vue.use(VueParallaxJs);
Vue.use(AOS);

export default {
  name: "ParallaxImage",
  props: ["title", "src", "alt", "left", "right","aosValue"],

  created(){
    AOS.init();
  },
  data () {
  return {
    AosValue: this.aosValue,
  }
  },
// },
// methods: {
//   handleScroll () {
//     this.scrolled = window.scrollY > 0;
//     if(window.pageXOffset)
    
//   }
// },
// created () {
//   window.addEventListener('scroll', this.handleScroll);
// },
// destroyed () {
//   window.removeEventListener('scroll', this.handleScroll);
// },

  computed: {
    changeFigcaptionPosition() {
      return "left:" + this.left;
      
      
    },
    changeImagePosition() {
      return "margin-left:" + this.right;
    },
  
    
  },
  mounted: 

    function() { 
    setTimeout(function() {
      window.scrollTo(0, 5);
      window.scrollTo(0, 0);
    }, 100);
  },
  
};

</script>

<style lang="scss">

#parallax-image {
  .parallax-folio-item {
    // height: 450px;
    max-width: 1140px;
    margin: 0 auto;
    margin-bottom: 150px;
    position: relative;
    overflow: hidden;
    width: 100%;
    font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    line-height: 1.5;
    color: #222;
      .item-media {
      position: relative;
      width: 70%;
      @media (max-width: 768px) {
      margin: auto;
      }
    }
  }
  figure {
    margin: 0;
    display: block;
  }
  .item-media {
    width: 800px;
    height: 450px;
    overflow: hidden;
    img {
      width: 800px;
    }
  }
  .parallax-folio-item figcaption {
    width: 40%;
    position: absolute;
    top: 15%;
    left: 60%;
    display: block;
    background-color: #fff;
    @media (max-width: 1024px){

    }
  }
  .visible {
    visibility: visible !important;
  }
  .parallax-folio-item figcaption.visible .item-caption-inner {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  .parallax-folio-item .item-caption-inner {
    position: relative;
    padding: 30px 40px 20px;
    opacity: 0;
    -webkit-transform: translate3d(70px, 0, 0);
    transform: translate3d(70px, 0, 0);
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
    -webkit-transition-delay: 0.3s;
    transition-delay: 0.3s;
    font-family: sans-serif;
    font-weight: 700;
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.1),
      0 6px 10px 0 rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 3.7897rem;
      line-height: 1;
      margin: 0 0 0.45em -0.04em;
      text-transform: uppercase;
    }
  }
  .parallax-folio-item figcaption .text-links {
    font-size: 13px;
    font-style: italic;
    font-family: "Playfair Display", serif;
    p {
      margin: 0 0 0.6em;
      color: #757575;
    }
  }
  .parallax-folio-item figcaption .text-links a {
    color: #757575;
  }
  .text-links a {
    position: relative;
    text-decoration: none;
    color: inherit;
    background-color: transparent;
  }

  .text-links a:not(:first-child):before {
    content: "/";
    position: absolute;
    width: 1.3em;
    right: 100%;
    text-align: right;
    color: rgba(0, 0, 0, 0.6);
  }
  .text-links:after {
    content: "";
    height: 1px;
    width: 100%;
    background-color: currentColor;
    position: absolute;
    bottom: 0;
    left: 0;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: right;
    transform-origin: right;
    -webkit-transition: -webkit-transform 0.3s ease;
    transition: -webkit-transform 0.3s ease;
    transition: transform 0.3s ease;
    transition: transform 0.3s ease, -webkit-transform 0.3s ease;
  }
  .button.border-2 {
    border-width: 4px;
    line-height: 37px;
  }
  .button.style-3 {
    background-color: transparent;
    border-color: #dedede;
    color: #000;
  }
  .button {
    display: inline-block;
    position: relative;
    font-family: inherit;
    text-decoration: none !important;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border-radius: 0;
    letter-spacing: 0.04em;
    cursor: pointer;
    z-index: 1;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    outline: 0 !important;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0 2.2em;
    height: 44px;
    line-height: 41px;
    margin-bottom: 20px;
    background-color: #333;
    color: #fff;
    border: 2px solid transparent;
  }
  .button.style-3:hover {
    border-color: #000;
  }

}
</style>