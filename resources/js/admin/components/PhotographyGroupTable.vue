<template>
  <div>
    <b-row>
      <b-col cols="12">
        <b-row>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            Nagłówki
          </b-col>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            <router-link :to="{ name: 'photographyGroupCreate' }" class="section-add-btn">Dodaj</router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="12" md="12">
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
              <th>{{ item.name }}</th>
              <th>
                <button class="delete-row" v-on:click="deleteRow(item.id)">Usuń</button>
                <router-link :to="{ name: 'photographyGroupEdit', params: { id: item.id } }" class="edit-row">Edytuj</router-link>
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
  name: 'PhotographyGroupTable',
  props: {
    items: Array,
  },
  methods: {
    deleteRow(elId) {
      this.$store.dispatch('deletePhotographyGroup', {id: elId})
      .then((resp) => {
        this.$parent.deleteRow(this.$parent.photographyGroups, {id: elId});
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
};
</script>