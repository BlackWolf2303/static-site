<template>
  <div>
    <h2>Main layout</h2>
    <Header />
    <Slider />
    <Content />
    <Footer />

  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Slider from '../components/Slider.vue';
import Footer from '../components/Footer.vue';
export default {
  components:{ Footer,Header,Slider },
}
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*, ::after, ::before {
    box-sizing: border-box;
}
h1, h2, h3, h4, h5, h6 {
    line-height: 1;
    margin: 0 0 .45em -.04em;
        color: inherit;
        font-family: GI,sans-serif;
}
html {
  font-family: 'Open Sans',sans-serif;
  font-size: 62.5%;
}
body {
      font-size: 1.4rem;
    font-weight: 400;
    letter-spacing: .05em;
    line-height: 1.5;
}

</style>