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

    </div>
  </header>
</template>

<script>
import Vue from 'vue';

export default {
  name: "Header",
}
</script>


<style lang="scss" scoped>
#header {
}

</style>
