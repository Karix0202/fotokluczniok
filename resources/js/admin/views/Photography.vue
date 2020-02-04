<template>
  <div>
    <Spinner v-if="displaySpinner" />
    <AdminNav />
    <b-container v-if="!displaySpinner">
      <b-row>
        <b-col lg="8" md="12" class="content-holder">
          <h2>{{ photography.name }}</h2>
          <hr>
          <b-row>
            <b-col lg="6" md="12">
              <SectionTable :id="photography.id" :sections="photography.sections" />
            </b-col>
            <b-col lg="6" md="12">
              <AssignedGalleriesTable :galleries="photography.galleries" :toAssign="galleriesToAssign"/>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <div v-if="photography !== null">
      <AssignGalleryModal :toAssign="galleriesToAssign" :galleries="photography.galleries" :id="photography.id"/>
    </div>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';
import Spinner from '../../components/Spinner.vue';
import AssignedGalleriesTable from '../components/AssignedGalleriesTable.vue';
import AssignGalleryModal from '../components/AssignGalleryModal.vue';
import SectionTable from '../components/SectionTable.vue';

export default {
  name: 'Photography',
  components: {
    AdminNav,
    Spinner,
    AssignedGalleriesTable,
    AssignGalleryModal,
    SectionTable,
  },
  data() {
    return {
      photography: null,
    };
  },
  created() {
    this.$store.dispatch('getPhotography', { id: this.$route.params.id })
    .then((resp) => { this.photography = resp.data.data; })
    .catch((err) => { console.log(err); });
  },
  computed: {
    displaySpinner() {
      return this.photography === null;
    },
    galleriesToAssign() {
      return this.photography === null ? [] : this.photography.galleries_to_assign;
    },
    getId() {
      return this.photography.id;
    }
  },
};
</script>

<style lang="scss">
.assign-gallery-btn, .add-section-btn {
  margin-bottom: 8px;
  background-color: white;
  color: #000;
  border: 1px solid #000;
  border-radius: 0;

  &:hover {
    color: #fff;
    background-color: #000;
  }
}

.assign-gallery-btn {
  float: left;
  @media (min-width: 992px) {
    float: right;
  }
}
.content-holder {
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
