<template>
  <div>
    <b-row>
      <b-col lg="12" md="12">
        <b-row>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            {{ header }}
          </b-col>
          <b-col lg="6" md="6" sm="6" cols="6" class="section-header">
            <a href="/" class="section-add-btn">Dodaj</a>
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
          <tbody>

          </tbody>
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
    addLink: String,
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
</style>
