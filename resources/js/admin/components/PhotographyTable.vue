<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-row>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            Fotografie
          </b-col>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            <router-link :to="{ name: 'photographyCreate' }" class="section-add-btn">Dodaj</router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="12" md="12">
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
            <tr v-for="(item, i) in items" :key="item.id">
              <th scope="row">{{ i+1 }}</th>
              <th>
                <router-link :to="{ name: 'singlePhotography', params: { id: item.id } }" class="single-gallery-link">{{ item.name }}</router-link>
              </th>
              <th>
                <button class="delete-row" v-on:click="deletePhotography(item.id)">Usuń</button>
              </th>
            </tr>
          </transition-group>
        </table>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'PhotographyTable',
  props: {
    items: Array,
  },
  methods: {
    deletePhotography(elId) {
      this.$store.dispatch('deletePhotographies', {id: elId})
      .then((resp) => {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].id === elId) {
            this.items.splice(i, 1);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>
