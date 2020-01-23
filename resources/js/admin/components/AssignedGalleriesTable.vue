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
        <tr v-for="(gallery, i) in galleries" :key="i">
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
  },
  methods: {
    deassign(id) {
      console.log(id);
    },
    popUpModal(e) {
      $('.assign-gallery-modal').show();
    }
  },
};
</script>
