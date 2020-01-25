<template>
  <vueDropzone id="dropzone" ref="myVueDropzone" :options="dropzoneOptions" @vdropzone-file-added="fileAdded"/>
</template>

<script>
import vueDropzone from 'vue2-dropzone';
import 'vue2-dropzone/dist/vue2Dropzone.min.css';

export default {
  name: 'SectionColumns',
  props: {
    images: Array,
  },
  components: {
    vueDropzone,
  },
  data() {
    return {
      dropzoneOptions: {
        url: '/',
        dictDefaultMessage: 'Minimalnie i maksymalnie 3 zdjęcia',
        maxFiles: 3,
        minFiles: 3,
        autoProcessQueue: false,
        thumbnailWidth: 100,
        thumbnailHeight: 100,
        method: 'POST',
        maxFilesize: 1000,
        headers: {
          Authorization: `Bearer ${this.$store.getters.getApiToken}`,
        },
      },
    };
  },
  methods: {
    fileAdded(file) {
      if (this.images.length < 3) this.images.push(file);
    },
  },
};
</script>
