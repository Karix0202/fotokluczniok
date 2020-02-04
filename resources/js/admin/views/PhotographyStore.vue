<template>
  <div>
    <Spinner v-if="displaySpinner"/>
    <AdminNav />
    <b-container>
      <b-row>
        <b-col md="12" lg="6" class="form-holder">
          <b-form @submit="submit" class="custom-form" enctype="multipart/form-data">
            <b-form-group id="name-group" label="Nazwa:" label-for="name">
              <b-form-input id="name" v-model="form.name" type="text" required placeholder="Nazwa"></b-form-input>
            </b-form-group>

            <b-form-group id="description-group" label="Opis:" label-for="description">
              <ckeditor :editor="editor" v-model="form.description" :config="editorConfig" id="description"></ckeditor>
            </b-form-group>

            <b-form-group id="thumbnail-group" label="Miniaturka:" label-for="thumbnail">
              <b-form-file v-model="form.thumbnail" id="thumbnail" placeholder="Wybierz miniaturkę" drop-placeholder="Upuść miniaturkę tutaj" accept="image/jpg, image/png, image/jpeg" @change="thumbnailOnChange"></b-form-file>
            </b-form-group>

            <b-form-group id="photography-group-group" label="Nagłówek:" label-for="photography-group">
              <b-form-select id="photography-group" v-model="form.photographyGroup" :options="photographyGroups" required></b-form-select>
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
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name: 'PhotographyStore',
  components: {
    AdminNav,
    Spinner,
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        thumbnail: null,
        photographyGroup: null,
      },
      photographyGroups: [{text: 'Zaznacz nagłówek', value: null}],
      action: 0,
      errorVisible: false,
      isProcessing: false,
      photography: null,
      id: null,
      editor: ClassicEditor,
      editorConfig: {
        language: 'pl',
        toolbar: [ 'bold', 'italic', '|', 'link' ],
      },
    };
  },
  created() {
    this.$store.dispatch('getPhotographyGroups')
    .then((resp) => {
      resp.data.forEach((el) => {
        this.photographyGroups.push({text: el.name, value: el.id});
      });
    })
    .catch((err) => {
      console.log(err);
    });

    if (typeof this.$route.params.id === 'undefined') {
      this.action = 0;
    } else {
      this.id = this.$route.params.id;
      this.action = 1;
    }
  },
  methods: {
    thumbnailOnChange(e) {
      this.form.thumbnail = e.target.files[0];
    },
    submit(e) {
      e.preventDefault();
      this.isProcessing = true;

      this.$store.dispatch('createPhotography', this.form)
      .then((resp) => {
        this.$router.push({ name: 'home' });
      })
      .catch((err) => {
        this.isProcessing = false;
      });
    },
  },
  computed: {
    displaySpinner() {
      if (this.action === 0) return this.photographyGroups.length - 1 === 0;
      return this.photographyGroups.length - 1 === 0 && this.photography !== null;
    },
  },
};
</script>

<style lang="scss">
.ck-content {
  p {
    margin: 4px 0 !important;
  }
}
</style>
