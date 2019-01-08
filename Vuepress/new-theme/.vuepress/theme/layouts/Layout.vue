<template>
  <div>
    <Header/>
    <HeaderBanner
      :title="$page.frontmatter.title"
      :src="$page.frontmatter.banner"
      :alt="$page.frontmatter.banner_title"
    />
    <Content id="main-content"/>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import HeaderBanner from "../components/HeaderBanner.vue";
import Footer from "../components/Footer.vue";


export default {
  components: { Footer, Header, HeaderBanner },
  methods: {
    jQuery(function($))
  }
};

</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Gidugu|Playfair+Display');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*,
::after,
::before {
  box-sizing: border-box;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  line-height: 1;
  margin: 0 0 0.45em -0.04em;
  color: inherit;
  font-family: GI, sans-serif;
}
html {
  font-family: "Open Sans", sans-serif;
  font-size: 62.5%;
}
body {
  font-size: 1.4rem;
  font-weight: 400;
  letter-spacing: 0.05em;
  line-height: 1.5;
  color: #222;
  position: relative;
  overflow-x: hidden;
  min-height: 100vh;
  background-color: #f3f6f7;
  background-size: 57px auto;
  background-position: center center;
  background-image: linear-gradient(to right,transparent 29px,rgba(0,0,0,.08) 29px,transparent 30px);
}
</style>