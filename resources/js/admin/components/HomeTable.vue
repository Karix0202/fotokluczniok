<template>
  <div>
    <b-row>
      <b-col lg="12" md="12">
        <b-row>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            {{ header }}
          </b-col>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            <router-link :to="{ name: create }" class="section-add-btn">Dodaj</router-link>
          </b-col>
        </b-row>
      </b-col>
      <b-col lg="12" md="12">
        <table class="table table-striped custom-table">
          <thead>
            <tr>
              <th v-for="(header, i) in headers" :key="i" scope="col">{{ header }}</th>
            </tr>
          </thead>
          <transition-group tag="tbody" name="fade">
            <tr v-for="(item, i) in items" :key="item.id">
              <th scope="row">{{ i+1 }}</th>
              <th>{{ item.name }}</th>
              <th>
                <button class="delete-row" v-on:click="deleteRow(item.id)">Usuń</button>
                <router-link :to="{ name: edit, params: {id: item.id} }" class="edit-row">Edytuj</router-link>
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
  name: 'HomeTable',
  props: {
    items: Array,
    headers: Array,
    header: String,
    create: String,
    edit: String,
    id: Number
  },
  methods: {
    deleteRow(elId) {
      if (this.id === 0) {
        this.$store.dispatch('deletePhotographyGroup', {id: elId})
        .then((resp) => {
          this.$parent.deleteRow(this.$parent.photographyGroups, {id: elId});
        })
        .catch((err) => {
          console.log(err);
        });
      }
    }
  },
};
</script>

<style lang="scss">
.custom-table {
  border-top: none !important;
}

.section-header {
  $padding: 12px;
  padding-top: $padding;
  padding-bottom: $padding;
  &:last-child {
    text-align: right;
  }
}

.section-add-btn {
  text-decoration: none;
  color: #000;
  border: 1px solid #000;
  padding: 8px;
  transition: all 0.1s ease-out;

  &:hover {
    text-decoration: none !important;
    color: #fff;
    background: #000;
  }
}

.delete-row {
  color: red;
  text-decoration: underline;
  border: none;
  background: none;

  &:hover {
    color: red;
  }
}

.edit-row {
  color: #FFC107;
  text-decoration: underline;
  border: none;
  background: none;

  &:hover {
    color: #FFC107;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: all 1.5s;
}
.fade-enter, .fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
