<template>
  <div>
    <Spinner v-if="displaySpinner" />
    <Header :displaySpinner="displaySpinner" />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Spinner from '../components/Spinner.vue';

export default {
  name: 'Index',
  components: {
    Header,
    Spinner,
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
