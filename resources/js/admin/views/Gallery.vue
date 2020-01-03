<template>
  <div>
    <Spinner v-if="displaySpinner" />
    <AdminNav />

    <b-container v-if="gallery !== null">
      <b-row>
        <b-col lg="8" md="12" class="content-holder">
          <h2>{{ gallery.name }}</h2>
          <hr>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';
import Spinner from '../../components/Spinner.vue';

export default {
  name: 'Gallery',
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      displaySpinner: true,
      gallery: null,
    };
  },
  created() {
    this.$store.dispatch('getGallery', {id: this.$route.params.id})
    .then((resp) => {
      this.displaySpinner = false;
      this.gallery = resp.data;
    })
    .catch((err) => {
        console.log(err);
    });
  },
};
</script>

<style lang="scss">
.content-holder {
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
