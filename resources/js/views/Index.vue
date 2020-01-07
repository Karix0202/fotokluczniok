<template>
  <div>
    <Spinner v-if="displaySpinner" />
    <Header :displaySpinner="displaySpinner" />
    <Main />
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
    };
  },
  methods: {
    changeDisplaySpinner() {
      this.displaySpinner = false;
    }
  },
};
</script>
