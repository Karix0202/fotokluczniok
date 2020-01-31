<template>
  <div class="section columns-section">
    <div class="columns-image-holder">
      <!-- <img :src="section.images[0].path" class="img-fluid"> -->
      <img v-for="(img, i) in section.images" :key="i" :src="img.path" class="img-fluid">
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
  name: 'ColumnsSection',
  props: {
    section: Object,
    galleries: Array,
  },
};
</script>

<style lang="scss">
.columns-image-holder {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;

  img {
    justify-self: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
</style>
