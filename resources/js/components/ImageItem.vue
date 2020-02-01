<template>
  <div class="image-item">
    <a :href="path" data-lightbox="image">
      <img :src="path">
    </a>
  </div>
</template>

<script>
export default {
  name: 'ImageItem',
  props: {
    path: String
  },
};
</script>

<style lang="scss">
.image-item {
  overflow: hidden;
  margin-bottom: 30px;
  height: 320px;
  margin-bottom: 10px;

  img {
    max-width: 100%;
    width: 100%;
  }
}
</style>
