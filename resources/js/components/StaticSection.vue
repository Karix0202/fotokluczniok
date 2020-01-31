<template>
  <div class="section static-section">
    <div class="image-holder">
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
.image-holder {
  width: 100%;

  img {
    width: 100%;
  }
}

.section-description {
  font-size: 18px;
  margin-top: 12px;
}

.section {
  margin-bottom: 32px;
}

.assigned-galleries {
  font-size: 16px;
}

.section-description {
  margin-top: 32px;
}

.assigned-gallery-link {
  color: #000;
  text-decoration: underline;
  margin-left: 8px;
  font-weight: 800;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    color: #000;
  }
}
</style>
