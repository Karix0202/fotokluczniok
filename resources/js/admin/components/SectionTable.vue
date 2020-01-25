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
          <tr v-for="(setion, i) in sections" :key="i">
            <th scope="row">{{ i+1 }}</th>
            <th>{{ section.type }}</th>
            <th>
              <button class="delete-row" v-on:click="deassign(gallery.id)">Usuń</button>
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
      console.log(id);
    }
  },
};
</script>
