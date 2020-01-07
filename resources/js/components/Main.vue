<template>
  <main id="main">
    <div class="site-section">
      <b-container>
        <b-row class="mb-5 align-items-center">
          <b-col md="12" lg="6" class="mb-4 mb-lg-0">
            <h2>Fotografie</h2>
          </b-col>
          <b-col md="12" lg="6" class="text-left text-lg-right">
            <div id="filters" class="filters">
              <a href="/">Rodzinna</a>
              <a href="/">Rodzinna</a>
              <a href="/">Rodzinna</a>
              <a href="/">Rodzinna</a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Main',
};
</script>

<style lang="scss">
.site-section {
  padding: 7rem 0;
}

.filters {
  a {
    color: #000;
    display: inline-block;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 16px;
    position: relative;
  }
}
</style>
