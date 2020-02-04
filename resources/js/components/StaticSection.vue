<template>
  <div class="section static-section">
    <div class="static-image-holder">
      <img :src="section.images[0].path" class="img-fluid" >
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
  name: 'StaticSection',
  props: {
    section: Object,
    galleries: Array,
  },
};
</script>

<style lang="scss">
.static-image-holder {
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
