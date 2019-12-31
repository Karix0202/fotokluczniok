<template>
  <div>
    <Spinner v-if="displaySpinner"/>
    <AdminNav />
    <b-container>
      <b-row>
        <b-col md="12" lg="4" class="form-holder">
          <b-form @submit="submit" class="custom-form">
            <b-form-group id="name-group" label="Nazwa:" label-for="name">
              <b-form-input id="name" v-model="form.name" type="text" required placeholder="Nazwa"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="outline-primary">Stwórz</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';
import Spinner from '../../components/Spinner.vue';

export default {
  name: 'PhotographyGroupCreateOrUpdate',
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      photographyGroup: null,
      form: {
        name: '',
      },
      nwm: '',
      displaySpinner: false,
    };
  },
  created() {
    if (typeof this.$route.query.id === 'undefined') {
      this.displaySpinner = false;
    } else {
      this.displaySpinner = true;
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log(this.form);
    }
  },
};
</script>