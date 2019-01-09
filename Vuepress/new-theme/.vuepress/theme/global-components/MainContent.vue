<template>
  <div class=" py-lg-13 py-8">
    <HelloThere />
    <ParallaxImage title="Infinite black skies" aosValue='fade-left' src="/images/1.jpg"/>
    <ParallaxImageHeight title="we will stand tall" aosValue='fade-right' left="114px" right="320px" src="/images/2.jpg"/>
    <ParallaxImageHeight title="feel the earth move" aosValue='fade-left' left="570px" right="114px" src="/images/3.jpg"/>
    <ParallaxImage title="where worlds collide" aosValue='fade-right' left="0" right="342px" src="/images/4.jpg"/>
    <Contact />
  </div>
</template>

<script>
import HelloThere from '../components/HelloThere.vue'
import ParallaxImage from '../components/ParallaxImage.vue'
import ParallaxImageHeight  from '../components/ParallaxImageHeight.vue'
import Contact from '../components/Contact.vue'
export default {
  name:'MainContent',
  components: {
    HelloThere,
    ParallaxImage,
    ParallaxImageHeight,
    Contact
    }
}
</script>

<style lang="scss" scoped>
@import "~@theme/styles/bootstrap/bootstrap";
</style>
