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
              <button class="btn delete-selected-images" :disabled="selectedImages.length === 0" v-on:click="deleteImages($event)">Usuń zaznaczone</button>
              <table class="table table-striped custom-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nazwa</th>
                    <th scope="col">Akcja</th>
                  </tr>
                </thead>
                <transition-group tag="tbody" name="fade">
                  <tr v-for="(item, i) in images" :key="item.id">
                    <th scope="row">{{ i+1 }}</th>
                    <th>
                      <a :href="item.full_path" data-lightbox="image" :data-title="item.name" class="single-gallery-link">{{ item.newName }}</a>
                    </th>
                    <th>
                      <label class="delete-checkbox-label">
                        <input type="checkbox" :value="item.id" @change="handleChange($event)" class="delete-checkbox">
                        Usuń
                      </label>
                    </th>
                  </tr>
                </transition-group>
              </table>
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

export default {
  name: 'Gallery',
  components: {
    AdminNav,
    Spinner,
    vue2Dropzone,
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
      selectedImages: []
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
    deleteImages(e) {
      e.preventDefault();

      this.$store.dispatch('deleteImages', { images: this.selectedImages })
      .then((resp) => {
        console.log(resp);
        resp.data.forEach((deletedEl) => {
          for (let i = 0; i < this.images.length; i++) {
            if (this.images[i].id === deletedEl) this.images.splice(i, 1);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
    },
    dropzoneSuccess(file, resp) {
      resp['newName'] = resp.name.replace(resp.name.substr(6, 20), '...');
      this.images.push(resp);
    },
    handleChange: function(e) {
      const id = e.target.value;
      if (e.target.checked) {
        this.selectedImages.push(id);
      } else {
        for (let i = 0; i < this.selectedImages.length; i++) {
          if (this.selectedImages[i] === id) this.selectedImages.splice(i, 1);
        }
      }
    }
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

.delete-selected-images {
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
</style>
