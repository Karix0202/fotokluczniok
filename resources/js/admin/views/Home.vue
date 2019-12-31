<template>
  <div>
    <AdminNav />

    <b-container>
      <b-row>
        <b-col md="12" lg="8" class="content-holder">
          <b-row>
            <b-col lg="3" md="12" class="section-picker-holder">
              <b-list-group>
                <b-list-group-item class="active" v-on:click="changeSection(0)" section-id="0">Nagłówki</b-list-group-item>
                <b-list-group-item v-on:click="changeSection(1)" section-id="1">Fotogrfia</b-list-group-item>
                <b-list-group-item v-on:click="changeSection(2)" section-id="2">Galerie</b-list-group-item>
              </b-list-group>
            </b-col>

            <b-col lg="9" md="12">
              <p v-if="activeSectionId === 0">Nagłówki</p>
              <p v-if="activeSectionId === 1">Fotografie</p>
              <p v-if="activeSectionId === 2">Galerie</p>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';

export default {
  name: 'Home',
  components: {
    AdminNav,
  },
  data() {
    return {
      activeSectionId: 0,
    };
  },
  methods: {
    changeSection(id) {
      if (id !== this.activeSectionId) {
        $(`div[section-id='${this.activeSectionId}']`).removeClass('active');
        $(`div[section-id=${id}]`).addClass('active');

        this.activeSectionId = id;
      }
    }
  },
};
</script>

<style lang="scss">
.content-holder {
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}

.section-picker-holder {
  border-right: 1px solid #000;

  @media (max-width: 991px) {
    border-right: none;
    margin-bottom: 16px;
  }
}

.list-group-item {
  cursor: pointer;
  border: 1px solid #000;
  transition: all 0.1s ease-out;

  &:hover {
    background-color: #000 !important;
    color: #fff;
    border-color: #000 !important;
    box-shadow: none !important;
  }
}

.active {
  background-color: #000 !important;
  border-color: #000 !important;
  box-shadow: none !important;
}
</style>
