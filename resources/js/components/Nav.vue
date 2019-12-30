<template>
  <div class="collapse navbar-collapse custom-navmenu" id="main-navbar">
    <div class="container py-2 py-md-5">
      <div class="row align-items-start">
        <div class="col-md-2">
          <ul class="custom-menu">
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="about.html">About Me</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="works.html">Works</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Nav',
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
