<template>
  <b-row id="photography-grid" class="no-gutter">
    <PhotographyItem v-for="photography in photographies" :key="photography.id" :photography="photography" :groupId="photography.photography_group_id"/>
  </b-row>
</template>

<script>
import PhotographyItem from '../components/PhotographyItem.vue';

export default {
  name: 'PhotographyGrid',
  components: {
    PhotographyItem,
  },
  props: {
    photographyGroups: Array,
  },
  computed: {
    photographies() {
      const list = [];
      this.photographyGroups.forEach((el) => {
        el.photographies.forEach((ph) => { list.push(ph); });
      });

      return list;
    }
  },
};
</script>
