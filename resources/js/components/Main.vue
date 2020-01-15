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
              <a href="/" v-for="(photographyGroup, i) in photographyGroups" :key="i">{{ photographyGroup.name }}</a>
            </div>
          </b-col>
        </b-row>
        <PhotographyGrid :photographyGroups="photographyGroups" />
      </b-container>
    </div>
  </main>
</template>

<script>
import PhotographyGrid from '../components/PhotographyGrid.vue';

export default {
  name: 'Main',
  components: {
    PhotographyGrid,
  },
  props: {
    photographyGroups: Array,
  },
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
