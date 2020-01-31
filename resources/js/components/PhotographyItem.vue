<template>
  <div class="item col-sm-6 col-md-4 col-lg-4 mb-4" :class="photography.photography_group_id">
    <router-link :to="{ name: 'photography', params: { id: photography.id } }" class="item-wrap fancybox">
      <div class="photography-info">
        <h3>{{ photography.name }}</h3>
      </div>
      <img :src="photography.thumbnail_path" class="img-fluid">
    </router-link>
    <!-- <a href="/" >

    </a> -->
  </div>
</template>

<script>
export default {
  name: 'PhotographyItem',
  props: {
    photography: Object,
  },
};
</script>

<style lang="scss">
.item {
  border: none;
  margin-bottom: 30px !important;
  box-sizing: border-box;

  .item-wrap {
    display: block;
    position: relative;
    overflow: hidden;

    &:hover {
      text-decoration: none;

      img {
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
      }

      &:after {
        content: "";
        opacity: 1;
        visibility: visible;
      }

      .photography-info {
        margin-top: 0;
        opacity: 1;
        visibility: visible;
      }
    }

    &:after {
      content: "";
      z-index: 2;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      margin: 0;
      background: rgba(0, 0, 0, 0.4);
      visibility: hidden;
      opacity: 0;
      transition: .3s all ease-in-out;
      width: 100%;
      height: 100%;
    }

    img {
      transition: .3s transform ease;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    .photography-info {
      position: absolute;
      top: 50%;
      width: 100%;
      text-align: center;
      z-index: 3;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      color: #fff;
      opacity: 0;
      visibility: hidden;
      margin-top: 20px;
      transition: .3s all ease;
    }

    h3 {
      font-size: 20px;
      margin-bottom: 0;
    }
  }
}
</style>
