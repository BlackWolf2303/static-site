<template>
  <div id="contact" class="container py-sm-12 py-8">
    <div class="row align-items-center p-5 dot-border">
      <div class="col-md">
        <h2 class="m-0 animated">Let's work together</h2>
      </div>
      <div class="col-auto">
        <a href="#" class="button style-7 mb-0 animated">Contact Us</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style lang="scss">
@import "~@theme/styles/bootstrap/bootstrap";
#contact {
  box-sizing: border-box;
  padding-top: 150px;
  padding-bottom: 150px;
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
    box-sizing: border-box;
    outline: 0 !important;
    transition: all 0.2s ease;
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0 2.2em;
    height: 44px;
    line-height: 41px;
    background-color: transparent;
    border: 2px solid #000;
    color: #000;
  }


  a:hover {
    color: #fff;
  }
  a::before {
  position: absolute;
  content: '';
  top:0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  transform: scaleX(0);
  transform-origin:right;
  transition: transform 0.25s;
  z-index:-1;
  
  }
  a:hover::before {
    transform: scaleX(1);
  transform-origin:left;

  }

  .dot-border {
    border: 1px dashed #ccc;
  }

  h2 {
    font-size: 5.0517rem;
  }
}
</style>

