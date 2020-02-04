<template>
  <div>
    <Spinner v-if="name === ''" />
    <Header :galleries="galleries" />
    <div class="main-container">
      <b-container>
        <div class="mb-4 align-items-center">
          <h2>{{ name }}</h2>
        </div>
        <div class="description" v-html="description">
          {{ description }}
        </div>
        <div class="sections">
          <div v-for="(section, i) in sections" :key="i" >
            <StaticSection v-if="section.type === 'static'" :section="section" :galleries="assignedGalleries"/>
            <ColumnsSection v-if="section.type === 'columns'" :section="section" :galleries="assignedGalleries"/>
            <SliderSection v-if="section.type === 'slider'" :section="section" :galleries="assignedGalleries"/>
          </div>
        </div>
      </b-container>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Spinner from '../components/Spinner.vue';
import axios from 'axios';
import StaticSection from '../components/StaticSection.vue';
import ColumnsSection from '../components/ColumnsSection.vue';
import SliderSection from '../components/SliderSection.vue';

export default {
  name: 'Photography',
  components: {
    Header,
    Spinner,
    StaticSection,
    ColumnsSection,
    SliderSection,
  },
  data() {
    return {
      name: '',
      sections: [],
      description: '',
      galleries: [],
      assignedGalleries: [],
    };
  },
  async created() {
    await axios.post(`${this.$store.getters.getApiUrl}photography/public/${this.$route.params.id}`)
    .then((resp) => {
      this.galleries = [...resp.data.galleries];
      this.assignedGalleries = [...resp.data.photography.galleries];
      this.sections = [...resp.data.photography.sections];
      this.description = resp.data.photography.description;
      this.name = resp.data.photography.name;
    })
    .catch((err) => { console.log(err) })
  },
};
</script>

<style lang="scss">
.main-container {
  padding: 4rem 0;
}

.description {
  font-size: 18px;
  margin-bottom: 38px;
}

.section-description {
  font-size: 18px;
  margin-top: 12px;
}

.section {
  margin-bottom: 32px;
}

.assigned-galleries {
  font-size: 16px;
}

.section-description {
  margin-top: 32px;
}

.assigned-gallery-link {
  color: #000;
  text-decoration: underline;
  margin-left: 8px;
  font-weight: 800;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    color: #000;
  }
}
</style>
