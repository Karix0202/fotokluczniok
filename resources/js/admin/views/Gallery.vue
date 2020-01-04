<template>
  <div>
    <Spinner v-if="displaySpinner" />
    <AdminNav />

    <b-container v-if="gallery !== null">
      <b-row>
        <b-col lg="8" md="12" class="content-holder">
          <h2>{{ gallery.name }}</h2>
          <hr>
          <b-row>
            <b-col cols="12">
              <vue2Dropzone id="dropzone" ref="myVueDropzone" :options="dropzoneOptions" @vdropzone-success="dropzoneSuccess"></vue2Dropzone>
            </b-col>
            <b-col lg="6" md="12" class="image-holder">
              <ImageTable :images="images" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';
import Spinner from '../../components/Spinner.vue';
import vue2Dropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import ImageTable from '../../admin/components/ImageTable.vue';

export default {
  name: 'Gallery',
  components: {
    AdminNav,
    Spinner,
    vue2Dropzone,
    ImageTable,
  },
  data() {
    return {
      displaySpinner: true,
      gallery: null,
      dropzoneOptions: {
        url: '/',
        dictDefaultMessage: 'Upuść lub kliknij',
        maxFiles: 500,
        autoProcessQueue: true,
        thumbnailWidth: 100,
        thumbnailHeight: 100,
      },
      images: [],
    };
  },
  created() {
    this.$store.dispatch('getGallery', {id: this.$route.params.id})
    .then((resp) => {
      this.displaySpinner = false;
      this.gallery = resp.data;
      this.dropzoneOptions.url = this.$store.getters.getApiUrl + `image/create/${this.gallery.id}`;
      resp.data.images.forEach((image) => {
        image['newName'] = image.name.replace(image.name.substr(6, 20), '...');
        this.images.push(image);
      });
    })
    .catch((err) => {
        console.log(err);
    });
  },
  methods: {
    dropzoneSuccess(file, resp) {
      resp['newName'] = resp.name.replace(resp.name.substr(6, 20), '...');
      this.images.push(resp);
    },
  },
};
</script>

<style lang="scss">
.content-holder {
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
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

.image-holder {
  margin-top: 26px;
}

.delete-selected-images, .delete-selected-files {
  margin-bottom: 8px;
  background-color: white;
  color: #000;
  border: 1px solid #E53935;
  border-radius: 0;

  &:hover {
    color: #fff;
    background-color: #E53935;
  }
}

.delete-selected-files {
  float: left;
  @media (min-width: 992px) {
    float: right;
  }
}
</style>
