<template>
  <footer id="footer" class="sticky-footer" >
    <!-- Copyright -->
    <small>© Copyright. AchtungThemes 2018</small>

    <!-- Social/Contact Links -->
    <div class="small text-links">
      <a href="#" class="link-hover" >Facebook /</a>
      <a href="#" class="link-hover" >Behance /</a>
      <a href="#" class="link-hover" >Instagram </a>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">

#footer {
  height: 45px;
  padding: 0 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #000;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  color: #717171;
  z-index: 999;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);

  .small,
  .text-small,
  small {
    font-size: 1.19rem;
    color: #909090;
  }
  .small,
  small {
    font-size: 80%;
    font-weight: 400;
  }

  #footer .text-links {
    color: #909090;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .text-links a {
    position: relative;
    text-decoration: none;
    text-decoration-line: none;
    text-decoration-style: initial;
    text-decoration-color: initial;
    color: inherit;
  }
    .link-hover::before {
    position: absolute;
    content: "";
    bottom: -4px;
    left: 0;
    width: 90%;
    height: 12%;
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
  .sticky-footer {
  position: fixed;
  bottom:0;
  width: 100%;
  }
</style>
