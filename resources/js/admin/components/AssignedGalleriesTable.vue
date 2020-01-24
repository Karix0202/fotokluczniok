<template>
  <div>
    <button class="btn assign-gallery-btn" v-b-modal.assign-gallery-modal>Przypisz galerie</button>
    <table class="table table-striped custom-table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Galeria</th>
          <th scope="col">Rozłącz</th>
        </tr>
      </thead>
      <transition-group tag="tbody" name="fade">
        <tr v-for="(gallery, i) in galleries" :key="gallery.id">
          <th scope="row">{{ i+1 }}</th>
          <th>{{ gallery.name }}</th>
          <th>
            <button class="delete-row" v-on:click="deassign(gallery.id)">Usuń</button>
          </th>
        </tr>
      </transition-group>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AssignedGalleriesTable',
  props: {
    galleries: Array,
    toAssign: Array,
  },
  methods: {
    deassign(id) {
      this.$store.dispatch('deassignGallery', { id: id })
      .then((resp) => {
        for (let i = 0; i < this.galleries.length; i++) {
          if (this.galleries[i].id === resp.data.id) this.galleries.splice(i, 1);
        }
        this.toAssign.push(resp.data.to_assign);
      })
      .catch((err) => {
        console.log(err);
      })
    },
    popUpModal(e) {
      $('.assign-gallery-modal').show();
    }
  },
};
</script>

<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: all 1.5s;
}
.fade-enter, .fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
