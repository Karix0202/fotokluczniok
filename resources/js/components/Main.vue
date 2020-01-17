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
              <a href="#" data-filter="*" class="active" @click="filterClick">Wszystkie</a>
              <a href="#" v-for="photographyGroup in photographyGroups" :key="photographyGroup.id" :data-filter="photographyGroup.id" @click="filterClick">{{ photographyGroup.name }}</a>
            </div>
          </b-col>
        </b-row>

        <b-row class="no-gutter">
          <PhotographyItem v-for="photography in filtered" :key="photography.id" :photography="photography"/>
        </b-row>
      </b-container>
    </div>
  </main>
</template>

<script>
import PhotographyItem from '../components/PhotographyItem.vue';

export default {
  name: 'Main',
  components: {
    PhotographyItem,
  },
  props: {
    photographyGroups: Array,
    photographies: Array,
  },
  data() {
    return {
      filter: '*',
    };
  },
  methods: {
    filterClick(e) {
      e.preventDefault();

      this.filter = $(e.target).attr('data-filter');

      $('#filters a').removeClass('active');
      $(e.target).addClass('active');
    }
  },
  computed: {
    filtered() {
      if (this.filter === '*') return this.photographies;

      const els = [];
      this.photographies.forEach((photography) => {
        if (photography.photography_group_id === this.filter) els.push(photography);
      });

      return els;
    },
  },
};
</script>

<style lang="scss">
.site-section {
  padding: 4rem 0;
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

  .active {
    text-decoration: underline;
  }
}
</style>
