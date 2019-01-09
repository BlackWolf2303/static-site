<template>
  <div class="rounded shadow-lg m-10 p-5 bg-yellow-darker">
    <header id="header">

      <!-- Logo -->
      <a href="#" class="logo">
        <img src="/images/logo-light.png" class="logo-light" alt="logo">
        <img src="/images/logo-dark.png" class="logo-dark" alt="logo">
      </a>

      <!-- Mobile Menu Icon -->
      <a href="#" class="mob-menu">
        <span></span>
        <span></span>
        <span></span>
      </a>

      <!-- Navigation -->
      <nav  class="navigation">

        <ul>
          <li class="has-mega-menu">
            <a href="#">Home</a>
            <div class="mega-menu">
              <div class="col">
                <ul></ul>
              </div>
              <div class="col">
                <ul></ul>
              </div>
              <div class="col">
                <ul></ul>
              </div>
              <div class="col">
                <ul></ul>
              </div>
            </div>
          </li>

          <li>
            <a href="#">About</a>
          </li>

          <li class="has-mega-menu">
            <a href="#">Portfolio</a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>

          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

      <!-- /Navigation -->
      </nav>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">

#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 65px;
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
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 1001;
  .logo {
    color: #fff;
    text-decoration: none;
    img {
      display: inline-block;
      max-height: 30px;
    }
  }

}
header {
  a,
  a:focus,
  a:hover {
    color: #000;
    outline: 0;
    text-decoration: none;
  }
  .mob-menu {
    display: none;
    width: 26px;
    position: relative;
    z-index: 99999;
  }
  .navigation {
    -ms-flex-item-align: stretch;
    align-self: stretch;
    height: 100%;
    @media (min-width: 1025px) {
      display: block !important;
    }
    li.has-mega-menu {
      position: inherit;
    }
    ul {
      list-style: none;
      margin-bottom: 0;
      li {
        display: block;
        float: left;
        a {
          display: block;
          box-sizing: border-box;
          color: #fff;
          position: relative;
          padding: 1rem 1.2rem;
          font-size: 1.2rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          font-weight: 100;
          line-height: 44px;
        }
      }
    }
    > ul > li > a {
    }
  @media (max-width: 1024px){
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #111;
    height: auto;
    max-height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }

  }
}
</style>
