<template>
  <div>
    <Spinner v-if="displaySpinner"/>
    <AdminNav />

  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';
import Spinner from '../../components/Spinner.vue';

export default {
  name: 'Gallery',
  components: {
    AdminNav,
  },
  data() {
    return {
      displaySpinner: true,
    };
  },
};
</script>