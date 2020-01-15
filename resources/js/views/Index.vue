<template>
  <div>
    <Spinner v-if="displaySpinner" />
    <Header :displaySpinner="displaySpinner" :galleries="galleries"/>
    <Main :photographyGroups="photographyGroups"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Spinner from '../components/Spinner.vue';
import Main from '../components/Main.vue';

export default {
  name: 'Index',
  components: {
    Header,
    Spinner,
    Main,
  },
  data() {
    return {
      displaySpinner: true,
      galleries: [],
      photographyGroups: [],
    };
  },
  methods: {
    getData() {
      this.$store.dispatch('loadIndexData')
      .then((resp) => {
        this.displaySpinner = false;
        resp.data.galleries.forEach((el) => {
          this.galleries.push(el);
        });
        resp.data.photography_groups.forEach((el) => {
          this.photographyGroups.push(el);
        });
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
  created() {
    this.getData();
  },
};
</script>
