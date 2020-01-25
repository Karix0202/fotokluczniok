<template>
  <div>
    <router-link :to="{ name: 'sectionCreate', params: { id: id } }" class="btn add-section-btn">Dodaj sekcje</router-link>
    <div class="table-responsive">
      <table class="table table-striped custom-table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Typ</th>
            <th scope="col">Akcja</th>
          </tr>
        </thead>
        <transition-group name="fade" tag="tbody">
          <tr v-for="(section, i) in sections" :key="section.id">
            <th scope="row">{{ i+1 }}</th>
            <th v-if="section.type === 'static'">Zdjęcie statyczne</th>
            <th v-if="section.type === 'columns'">Kolumny</th>
            <th v-if="section.type === 'slider'">Slider</th>
            <th>
              <button class="delete-row" v-on:click="deleteSection(section.id)">Usuń</button>
            </th>
          </tr>
        </transition-group>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionTable',
  props: {
    sections: Array,
    id: String,
  },
  methods: {
    deleteSection(id) {
      this.$store.dispatch('deleteSection', { id: id })
      .then((resp) => {
        for (let i = 0; i < this.sections.length; i++) {
          if (this.sections[i].id === id) {
            this.sections.splice(i, 1);
          }
        }
      })
      .catch((err) => { console.log(err); });
    }
  },
};
</script>
