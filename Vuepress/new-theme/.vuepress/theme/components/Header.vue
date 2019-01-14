<template>
  <header id="header" class="sticky-top">
    <div  class="header">
      <!-- Logo -->
      <a href="#" class="logo">
        <img src="/images/logo-light.png" class="logo-light" alt="logo">
        <img src="/images/logo-dark.png" class="logo-dark" alt="logo">
      </a>
      <input class="menu-btn" type="checkbox" id="menu-btn">
      <label class="menu-icon" for="menu-btn">
        <span class="navicon"></span>
      </label>
      <ul class="menu">
        <li class="link-hover" v-for="(value,index) in menu" :key="index">
          <a href="#">{{value}}</a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import Vue from 'vue';

export default {
  name: "Header",
  data() {
    return {
      menu: {
        Home: "home",
        About: "about",
        Portfolio: "portfolio",
        Blog: "blog",
        Contact: "contact"
      },
      sticky: true,
    };
  },
  methods: {
    handleScroll () {
      // var innerTheEndOfPageA = document.getElementById('footer').offsetTop - window.pageYOffset;
      // var innerTheEndOfPageB = document.getElementById('footer').offsetTop - window.scrollY;
      
      // if(window.scrollY > 100){
      //   document.getElementById('header').classList.remove("sticky-top");
      //   document.getElementById('footer').classList.remove("sticky-footer"); 
      // }else if(innerTheEndOfPageB-innerTheEndOfPageA ==0){
      //   document.getElementById('header').classList.add("sticky-top");
      //   document.getElementById('footer').classList.add("sticky-footer"); 
      // }
      // else{
      //   document.getElementById('header').classList.add("sticky-top");
      //   document.getElementById('footer').classList.add("sticky-footer");
      // }      
      if ($(window).scrollTop() < 50) {
          $('#header').addClass('sticky-top');
          $('#footer').addClass('sticky-footer');
      } else {
          $('#header').removeClass('sticky-top');
          $('#footer').removeClass('sticky-footer');
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  
};
</script>


<style lang="scss">
#header {
    display: inline-block;
    background-color: #000;
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    z-index: 3;
  a {
    color: #fff;
  }
  /* header */

  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #000;
  }

  .header li a {
    display: block;
    height: 64px;
    padding: 20px 20px;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.2rem;
    text-align: center;
    font-weight: 400;
    line-height: 40px;
    vertical-align: middle;
    @media (max-width: 1024px){
      line-height: 20px;
    }
  }

  /*link hover*/
  .link-hover {
    position: relative;
  }
  @media (min-width: 1025px){
    .link-hover::before {
      position: absolute;
      content: "";
      bottom: 20px;
      left: 0;
      width: 90%;
      height: 3%;
      background-color: #fff;
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.25s;
    }
    .link-hover:hover::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }

  @media (max-width: 1024px){
    .header li a:hover,
    .header .menu-btn:hover {
      background-color: #999;
    }
  }

  .header .logo {
    display: block;
    float: left;
    font-size: 2em;
    padding: 11px 20px;
    text-decoration: none;
  }

  /* menu */

  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  /* menu icon */

  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .header .menu-icon .navicon:before {
    top: 5px;
  }

  .header .menu-icon .navicon:after {
    top: -5px;
  }

  /* menu btn */

  .header .menu-btn {
    display: none;
  }

  .header .menu-btn:checked ~ .menu {
    max-height: 320px;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  /* 48em = 768px */

  @media (min-width: 1025px) {
    .header li {
 
      float: left;
      
    }
    .header li a {
      padding: 10px 12px;
      vertical-align: middle;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }

}
  .sticky-top {
  position: fixed !important;
  top: 0;
  animation:slide-down 0.5s;
  opacity:0.9; 
}
@keyframes slide-down {
    0% {
        opacity: 0;
        transform: translateY(-100%);
    } 
    100% {
        opacity: 0.9;
        transform: translateY(0);
    } 
}

</style>
