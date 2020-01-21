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
              <vueDropzone id="dropzone" ref="myVueDropzone" :options="dropzoneOptions"  @vdropzone-success="dropzoneSuccess"/>
            </b-col>
            <b-col lg="6" md="12" class="image-holder">
              <ImageTable :images="images" />
            </b-col>
            <b-col lg="6" md="12" class="image-holder">
              <FileTable :files="files" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
    <FileCreateModal :id="gallery.id" v-if="gallery !== null" :files="files"/>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';
import Spinner from '../../components/Spinner.vue';
import vueDropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';
import ImageTable from '../../admin/components/ImageTable.vue';
import FileTable from '../../admin/components/FileTable.vue';
import FileCreateModal from '../../admin/components/FileCreateModal.vue';

export default {
  name: 'Gallery',
  components: {
    AdminNav,
    Spinner,
    vueDropzone,
    FileCreateModal,
    ImageTable,
    FileTable,
  },
  data() {
    return {
      displaySpinner: true,
      gallery: null,
      dropzoneOptions: {
        url: '/',
        dictDefaultMessage: 'Upuść lub kliknij',
        maxFiles: 500,
        maxFilesize: 1000,
        autoProcessQueue: true,
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        method: 'POST',
        headers: {
          Authorization: `Bearer ${this.$store.getters.getApiToken}`,
        },
      },
      images: [],
      files: [],
    };
  },
  created() {
    this.$store.dispatch('getGallery', {id: this.$route.params.id})
    .then((resp) => {
      this.displaySpinner = false;
      this.gallery = resp.data;
      this.dropzoneOptions.url = `${this.$store.getters.getApiUrl}image/create/${this.gallery.id}`;

      resp.data.images.forEach((image) => {
        image['newName'] = image.name.replace(image.name.substr(6, 20), '...');
        this.images.push(image);
      });

      resp.data.files.forEach((file) => {
        this.files.push(file);
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

.add-file {
  float: left;
  margin-bottom: 8px;
  background-color: #fff;
  color: #000;
  border: 1px solid #000;
  border-radius: 0;
  margin-left: 4px;

  &:hover {
    color: #fff;
    background-color: #000;
  }

  @media (min-width: 992px) {
    float: right;
    margin-right: 4px;
  }
}

.delete-checkbox-label {
  width: 60px;
}
</style>
