<template>
  <div>
    <Spinner v-if="displaySpinner" />
    <Header :galleries="galleries" />
    <div class="main-container">
      <b-container>
        <div class="mb-5 align-items-center">
          <h2>{{ name }}</h2>
        </div>
        <div class="img-holder">
          <ImageItem v-for="(image, i) in images" :key="i" :path="image.path" />
        </div>
        <b-spinner class="custom-spinner" label="Loading..." v-if="isLoading"></b-spinner>
      </b-container>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Spinner from '../components/Spinner.vue';
import ImageItem from '../components/ImageItem.vue';
import axios from 'axios';

export default {
  name: 'Gallery',
  components: {
    Header,
    Spinner,
    ImageItem,
  },
  data() {
    return {
      galleries: [],
      images: [],
      url: `${this.$store.getters.getApiUrl}images`,
      loadMore: true,
      loadedCount: 0,
      name: '',
      isLoading: false,
      isotopeOptions: {
        itemSelector: '.image-item',
        fitWidth: true,
      },
      layout: 'fitColumns'
    };
  },
  created() {
    const id = this.$route.params.id;
    this.url = `${this.url}/${id}`;

    axios.post(`${this.$store.getters.getApiUrl}gallery/${id}`)
    .then((resp) => {
      this.name = resp.data.gallery.name;
      resp.data.galleries.forEach((gallery) => {
        this.galleries.push(gallery);
      });
    })
    .catch((err) => {
      console.log(err);
    });
    this.loadImages();
  },
  methods: {
    loadImages() {
      this.isLoading = true;
      this.loadedCount = this.loadedCount + 1;
      axios.post(`${this.url}/?page=${this.loadedCount}`)
      .then((resp) => {
        this.loadMore = resp.data.links.next !== null ? true : false;
        resp.data.data.forEach((image) => {
          this.images.push(image);
        });
        this.isLoading = false;
      })
      .catch((err) => {
        console.log(err);
      });
    },
    scroll() {
      window.onscroll = function() {
        let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
        if (bottomOfWindow && !this.isLoading) {
          this.loadImages();
        }
      };
    },
  },
  computed: {
    displaySpinner() {
      return this.name === '' || this.galleries.length === 0 || this.images.length === 0;
    }
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;
      if (bottomOfWindow && !this.isLoading && this.loadMore) {
        this.loadImages();
      }
    });
  },
};
</script>

<style lang="scss">
.main-container {
  padding: 4rem 0;
}

.img-holder {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.custom-spinner {
  margin: 16px 0;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 50%;
}

</style>
