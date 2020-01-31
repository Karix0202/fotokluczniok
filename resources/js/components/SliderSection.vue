<template>
  <div class="section columns-section">
    <div class="carousel-holder">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0"></li>
          <li v-for="(image, i) in images" :key="i" data-target="#myCarousel" :data-slide-to="i+1"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" :src="firstImage.path" alt="First slide">
          </div>
          <div v-for="(image, i) in images" :key="i" class="carousel-item">
            <img class="d-block w-100" :src="image.path" alt="First slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div class="section-description" v-html="section.description">
      {{ section.description }}
    </div>
    <div class="assigned-galleries" v-if="section.galleries">
      <p>
        Zapraszam do galerii:
        <span>
          <router-link v-for="gallery in galleries" :key="gallery.id" :to="{ name: 'gallery', params: { id: gallery.id } }" class="assigned-gallery-link">{{ gallery.name }}</router-link>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SliderSection',
  props: {
    section: Object,
    galleries: Array,
  },
  computed: {
    firstImage() {
      return this.section.images[0];
    },
    images() {
      return this.section.images.splice(1, this.section.images.length);
    }
  },
};
</script>
