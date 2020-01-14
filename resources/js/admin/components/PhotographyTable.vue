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
        <table class="table table-striped custom-table">
          <thead>
          </thead>
          <transition-group tag="tbody" name="fade">
          </transition-group>
        </table>
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
    deleteRow(elId) {

    },
  },
};
</script>
