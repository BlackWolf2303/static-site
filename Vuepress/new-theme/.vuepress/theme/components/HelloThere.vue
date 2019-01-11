<template>
  <section class="py-lg-13 py-8 hello-there">
    <div class="container d-flex justify-content-center text-lg-center">
      <div class="col-lg-8">
        <p class="small uppercase bold mb-4 animated">HELLO THERE.</p>
        <h2
          class="bold animated"
        >We're just two lost Souls swimming in a Fish Bowl &amp; Winning Design Awards</h2>
        <p
          class="small serif mt-5 animated description"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, et, praesentium?
          <br>Odit perferendis error natus cum, laudantium ea!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HelloThere"
};
</script>

<style lang="scss">
.hello-there {
  padding-top: 170px;
  padding-bottom: 170px;
  background: transparent;
  h2 {
    line-height: 1;
    margin: 0 0 0.45em -0.04em;
    font-family: sans-serif, sans-serif;
    font-size: 4.5rem;
    color: rgb(34, 34, 34);
    letter-spacing: 0.05em;
      @media (max-width: 1024px){
        font-size: 4rem;
      }
  }
  @media (max-width: 1024px){
    .text-lg-center {
      text-align: center;
    }
  }
  
}
.bold {
  font-weight: 700;
}
.hello-there .description {
  font-size: 1.19rem;
    color: #909090;

}
.serif {
    font-family: 'Playfair Display',serif;
}
</style>
