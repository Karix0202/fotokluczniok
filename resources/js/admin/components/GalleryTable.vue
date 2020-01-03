<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-row>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            Galerie
          </b-col>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            <router-link :to="{ name: 'galleryCreate' }" class="section-add-btn">Dodaj</router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="12" md="12">
        <table class="table table-striped custom-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nazwa</th>
              <th scope="col">Prywatna</th>
              <th scope="col">Akcja</th>
            </tr>
          </thead>
          <transition-group tag="tbody" name="fade">
            <tr v-for="(item, i) in items" :key="item.id">
              <th scope="row">{{ i+1 }}</th>
              <th>
                <router-link :to="{ name: 'singleGallery', params: { id: item.id } }" class="single-gallery-link">{{ item.name }}</router-link>
              </th>
              <th>{{ item.private ? 'tak' : 'nie' }}</th>
              <th>
                <button class="delete-row" v-on:click="deleteRow(item.id)">Usuń</button>
                <router-link :to="{ name: 'editGallery', params: { id: item.id } }" class="edit-row">Edytuj</router-link>
              </th>
            </tr>
          </transition-group>
        </table>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'GalleryTable',
  props: {
    items: Array,
  },
  methods: {
    deleteRow(elId) {
      this.$store.dispatch('deleteGallery', {id: elId})
      .then((resp) => {
        this.$parent.deleteRow(this.$parent.deleteGallery, {id: elId});
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>