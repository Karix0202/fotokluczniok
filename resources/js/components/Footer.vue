<template>
  <footer class="footer">
    <b-container>
      <b-row>
        <b-col sm="6">
          <p class="mb-1">&copy; Copyright fotokluczniok.pl. All Rights Reserved</p>
        </b-col>
        <b-col sm="6" class="social text-md-right">
          <a href="#"><span class="icofont-facebook"></span></a>
          <a href="#"><span class="icofont-instagram"></span></a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style lang="scss">
.footer {
  padding: 0 0 3rem 0;
}

.footer a {
  color: #000;
}

.social a {
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #eee;
  position: relative;
  text-align: center;
  color: #0d1e2d;
}

.social a span {
  display: inline-block;
  left: 50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.social a:hover {
  color: #000;
}
</style>
