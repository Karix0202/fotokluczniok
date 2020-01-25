<template>
  <div>
    <AdminNav />
    <b-container>
      <b-row>
        <b-col md="12" lg="6" class="form-holder">
          <b-form @submit="submit" class="custom-form" enctype="multipart/form-data">
            <b-form-group id="description-group" label="Opis" label-for="description">
              <ckeditor :editor="editor" v-model="form.description" :config="editorConfig" id="description"></ckeditor>
            </b-form-group>
            <b-form-group id="galleries-group">
              <b-form-checkbox id="galleries" v-model="form.galleries" :value="true" :unchecked-value="false">Załącz galerie</b-form-checkbox>
            </b-form-group>
            <b-form-group id="type-group" label="Typ" label-for="type">
              <b-form-select id="type" v-model="form.type" :options="types" @change="typeChange" required></b-form-select>
            </b-form-group>
            <b-form-group id="dropzone-group" label="Zdjęcia" label-for="dropzone" v-if="this.form.type !== ''">
               <SectionColumns :images="this.form.images" v-if="this.form.type === 'columns'" />
               <SectionStatic :images="this.form.images" v-if="this.form.type === 'static'" />
               <SectionSlider :images="this.form.images" v-if="this.form.type === 'slider'" />
            </b-form-group>

            <b-button type="submit" variant="outline-primary" :disabled="!validateImages || isProcessing">Dodaj</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import SectionColumns from '../components/SectionColumns.vue';
import SectionStatic from '../components/SectionStatic.vue';
import SectionSlider from '../components/SectionSlider.vue';

export default {
  name: 'SectionStore',
  components: {
    AdminNav,
    ClassicEditor,
    SectionColumns,
    SectionStatic,
    SectionSlider,
  },
  data() {
    return {
      form: {
        description: '',
        galleries: false,
        type: '',
        images: [],
      },
      types: [
        { text: 'Wybierz typ', value: null, disabled: true },
        { text: 'Kolumny', value: 'columns' },
        { text: 'Statyczne zdjęcie', value: 'static' },
        { text: 'Slider', value: 'slider' },
      ],
      id: this.$route.params.id,
      isProcessing: false,
      editor: ClassicEditor,
      editorConfig: {
        language: 'pl',
        toolbar: [ 'bold', 'italic', '|', 'link' ],
      },
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.isProcessing = true;
      this.$store.dispatch('sectionCreate', { images: this.form.images, id: this.id, description: this.form.description, galleries: this.form.galleries })
      .then((resp) => {
        this.$router.push({ name: 'singlePhotography', params: { id: this.id } });
      })
      .catch((err) => {
        this.isProcessing = false;
      });
    },
    typeChange(val) {
      this.form.images = [];
    },
    fileAdded(file) {
      this.form.images.push(file);
    },
  },
  computed: {
    validateImages() {
      if (this.form.type === 'static') return this.form.images.length === 1;
      else if (this.form.type === 'columns') return this.form.images.length === 3;

      return this.form.images.length >= 2 && this.form.images.length <= 6;
    }
  },
};
</script>

<style lang="scss">
.ck-content {
  p {
    margin: 4px 0 !important;
  }
}

.vue-dropzone {
  border-color: #000;
  color: #000;

  .dz-image {
    &:hover {
      background-color: #000;
    }
  }
}
</style>
