<template>
  <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
    <div class="container py-2 py-md-5">
      <div class="row align-items-start">
        <div class="col-md-2">
          <ul class="custom-menu">
            <li><router-link :to="{ name: 'index' }" class="li">Home</router-link></li>
            <li v-for="gallery in galleries" :key="gallery.id">
              <a :href="`/gallery/${gallery.id}`">{{ gallery.name }}</a>
            </li>
          </ul>
        </div>
        <div class="col-md-10">
          <div class="float-right contact-info">
            <ul class="custom-menu contact-menu">
              <li><p>Piotr Kluczniok</p></li>
              <li><p @click.prevent>662 252 062</p></li>
              <li><p @click.prevent>Knurów ul. Dworcowa 38a</p></li>
              <li><a href="mailto:info@fotokluczniok.pl" class="mail-link">info@fotokluczniok.pl</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    galleries: Array,
  },
};
</script>

<style lang="scss">
.custom-navmenu {
  background: #000; //0d1e2d

  h3 {
    font-size: 20px;
    color: #fff;
  }

  p {
    color: #fff;
    margin: 0;
    // padding: 10px 0;
  }

  a {
    color: rgba(255, 255, 255, 0.7);

    &:hover {
      color: #fff;
    }
  }

  .contact-info {
    padding-right: 40px;
    text-align: right;

    @media (max-width: 767px) {
      float: left !important;
      padding-right: 0;
      text-align: left;
    }
  }

  .custom-menu {
    li {
      padding: 0;
      margin: 0;
      list-style: none;
      margin-bottom: 0;
      font-size: 20px;

      a {
        color: #fff;
        padding: 10px 0 !important;
        text-decoration: underline;

        &:hover {
          text-decoration: none;
        }
      }
    }
  }

  .mail-link {
    text-decoration: underline !important;
  }
}
</style>
