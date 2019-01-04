<template>
<div class="outline">
  <div class="card">this is card
  <img src="/images/logo.png" alt="logo" >
  <h5>description:</h5>
  <p>number: <span v-for="n in 5">{{n}}</span></p>
  </div>
</div>
</template>

<script>
export default {
  data(){
    return {
      message: 'Hello World!!!'
    }
  }
}
</script>

<style>
.card {
  display: inline-block;
  border: 1px solid grey;
  width: 250px;
  height: 300px;
  text-align: center;
}
.outline{
  display: inline;
}
</style>
