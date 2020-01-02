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

            <b-form-group id="private-group">
              <b-form-checkbox v-model="form.private">Prywatna</b-form-checkbox>
            </b-form-group>

            <b-alert variant="danger" v-if="errorVisible" show>Coś poszło nie tak. Spróbuj ponownie teraz lub później.</b-alert>

            <b-button type="submit" variant="outline-primary" :disabled="isProcessing" v-if="action === 0">Stwórz</b-button>
            <b-button type="submit" variant="outline-primary" :disabled="isProcessing" v-if="action === 1">Edytuj</b-button>
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
  name: 'GalleryStore',
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      form: {
        name: '',
        private: false,
      },
      action: 0,
      displaySpinner: false,
      errorVisible: false,
      isProcessing: false,
      gallery: null,
      id: null,
    };
  },
  created() {
    if (typeof this.$route.params.id === 'undefined') {
      this.displaySpinner = false;
      this.action = 0;
    } else {
      this.displaySpinner = true;
      this.id = this.$route.params.id;
      this.action = 1;
      this.$store.dispatch('getGalleryForEdit', {id: this.$route.params.id})
      .then((resp) => {
        this.form.name = resp.data.name;
        this.form.private = resp.data.private === 0 ? false : true;
        this.displaySpinner = false;
      })
      .catch((err) => {
        console.log(err);
      });
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.errorVisible = false;
      this.isProcessing = true;
      if (this.action === 0) {
        this.$store.dispatch('createGallery', { name: this.form.name, private: this.form.private })
        .then((resp) => {
          console.log(resp.data);
          // redirect to gallery single page
        })
        .catch((err) => {
          this.errorVisible = true;
          this.isProcessing = false;
        });
      }
    }
  },
};
</script>
