<template>
  <div>
    <Spinner v-if="displaySpinner" />
    <AdminNav />
    <b-container>
      <b-row>
        <b-col lg="8" md="12">

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';
import Spinner from '../../components/Spinner.vue';
import axios from 'axios';

export default {
  name: 'Photography',
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      photography: null,
    };
  },
  created() {

  },
  computed: {
    displaySpinner() {
      return this.photography === null;
    },
  },
};
</script>
