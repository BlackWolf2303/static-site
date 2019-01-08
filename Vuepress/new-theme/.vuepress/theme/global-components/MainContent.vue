<template>
  <div class=" py-lg-13 py-8">
    <HelloThere />
    <ParallaxImage1 title="Infinite black skies" height="450px" width="800px" src="/images/1.jpg"/>
    <ParallaxImage1 title="we will stand tall" height="640px" width="570px" src="/images/2.jpg"/>
    <ParallaxImage1 title="feel the earth move"  height="640px" width="570px"src="/images/3.jpg"/>
    <ParallaxImage1 title="where worlds collide" height="450px" width="800px" src="/images/4.jpg"/>
  </div>
</template>

<script>
import HelloThere from '../components/HelloThere.vue'
import ParallaxImage1 from '../components/ParallaxImage1.vue'
export default {
  name:'MainContent',
  components: {
    HelloThere,
    ParallaxImage1
    }
}
</script>

<style lang="scss">

</style>
