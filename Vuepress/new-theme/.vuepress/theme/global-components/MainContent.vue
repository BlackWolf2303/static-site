<template>
  <div class=" py-lg-13 py-8">
    <HelloThere />
    <ParallaxImage title="Infinite black skies" height="450px" width="800px" src="/images/1.jpg"/>
    <ParallaxImage title="we will stand tall" height="450px" width="800px" src="/images/2.jpg"/>
    <ParallaxImage title="feel the earth move"  height="450px" width="800px"src="/images/3.jpg"/>
    <ParallaxImage title="where worlds collide" height="450px" width="800px" src="/images/4.jpg"/>
  </div>
</template>

<script>
import HelloThere from '../components/HelloThere.vue'
import ParallaxImage from '../components/ParallaxImage.vue'
export default {
  name:'MainContent',
  components: {
    HelloThere,
    ParallaxImage
    }
}
</script>

<style lang="scss">

</style>
