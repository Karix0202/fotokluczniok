<template>
  <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
    <div class="container py-2 py-md-5">
      <div class="row align-items-start">
        <div class="col-md-2">
          <ul class="custom-menu">
            <li><router-link :to="{ name: 'index' }">Home</router-link></li>
            <li v-for="gallery in galleries" :key="gallery.id"><a href="/">{{ gallery.name }}</a></li>
          </ul>
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
    color: rgba(255, 255, 255, 0.6);
  }

  a {
    color: rgba(255, 255, 255, 0.7);

    &:hover {
      color: #fff;
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

        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}
</style>
