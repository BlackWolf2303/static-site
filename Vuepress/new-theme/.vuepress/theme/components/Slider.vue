<template>
  <div class="slider">
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
</template>

<script>
export default {};
</script>

<style lang="scss">
.slider {
  position: relative;
  height: 525px;
  background-image: url("/images/107.jpg");
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 44px;
}
.caption-inner {
  position: absolute;
  display: block;
  top: 70%;
  left: 40%;
  a {
    color: white;
    font-weight: 500;
  }
  p {
    text-align: center;
  }
}

h3 {
  font-size: 3.7897rem;
}
.small {
  font-size: 1.19rem;
  color: #909090;
  font-weight: 400;
}
.serif {
  font-family: "Playfair Display", serif;
}
</style>
