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
  name: 'PhotographyGroupStore',
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
      displaySpinner: false,
      errorVisible: false,
      isProcessing: false,
      action: 0,
      id: '',
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
      this.$store.dispatch('getPhotographyGroup', {id: this.$route.params.id})
      .then((resp) => {
        this.form.name = resp.data.name;
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
      this.isProcessing = true;

      const url = (this.action === 0) ? 'createPhotographyGroup' : 'updatePhotographyGroup';

      this.$store.dispatch(url, {
        name: this.form.name,
        id: this.id,
      })
      .then((resp) => {
        this.$router.push({ name: 'home' });        
      })
      .catch((err) => {
        this.errorVisible = true;
        this.isProcessing = false;
      });
    },
  },
};
</script>
