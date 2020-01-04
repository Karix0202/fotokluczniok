<template>
  <div>
    <button class="btn delete-selected-images" :disabled="selectedImages.length === 0" v-on:click="deleteImages($event)">Usuń zaznaczone</button>
    <div class="table-responsive">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageTable',
  props: {
    images: Array,
  },
  data() {
    return {
      selectedImages: [],
    };
  },
  methods: {
    handleChange(e) {
      const id = e.target.value;
      if (e.target.checked) {
        this.selectedImages.push(id);
      } else {
        for (let i = 0; i < this.selectedImages.length; i++) {
          if (this.selectedImages[i] === id) this.selectedImages.splice(i, 1);
        }
      }
    },
    deleteImages(e) {
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
  },
};
</script>
