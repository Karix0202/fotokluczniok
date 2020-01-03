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
              <PhotographyGroupTable v-if="activeSectionId === 0" :items="photographyGroups" />
              <p v-if="activeSectionId === 1">Fotografie</p>
              <GalleryTable v-if="activeSectionId === 2" :items="galleries" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import AdminNav from '../../admin/components/AdminNav.vue';
import PhotographyGroupTable from '../../admin/components/PhotographyGroupTable.vue';
import GalleryTable from '../../admin/components/GalleryTable.vue';

export default {
  name: 'Home',
  components: {
    AdminNav,
    PhotographyGroupTable,
    GalleryTable,
  },
  data() {
    return {
      activeSectionId: 0,
      photographyGroups: [],
      galleries: [],
    };
  },
  created() {
    this.getPhotographyGroups();
  },
  methods: {
    changeSection(id) {
      if (id !== this.activeSectionId) {
        $(`div[section-id='${this.activeSectionId}']`).removeClass('active');
        $(`div[section-id=${id}]`).addClass('active');

        if (id === 0) this.getPhotographyGroups();
        if (id === 2) this.getGalleries();

        this.activeSectionId = id;
      }
    },
    deleteRow(arr, el) {
      for (let i = 0; i < arr.length; i += 1) {
        if (arr[i].id === el.id) {
          arr.splice(i, 1);
        }
      }
    },
    checkElements(oldArr, newArr) {
      oldArr.forEach((el) => {
        let count = 0;
        newArr.forEach((newEl) => {
          if (newEl.id === el.id) count += 1;
        });

        if (count === 0) this.deleteRow(oldArr, el);
      });
    },
    addNewElementsToArr(oldArr, newArr) {
      newArr.forEach((newEl) => {
        let count = 0;
        oldArr.forEach((el) => {
          if (el.id === newEl.id) count += 1
        });

        if (count === 0) oldArr.push(newEl);
      });
    },
    getPhotographyGroups() {
      this.$store.dispatch('getPhotographyGroups')
      .then((resp) => {
        this.addNewElementsToArr(this.photographyGroups, resp.data);
        this.checkElements(this.photographyGroups, resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    getGalleries() {
      this.$store.dispatch('getGalleries')
      .then((resp) => {
        this.addNewElementsToArr(this.galleries, resp.data);
        this.checkElements(this.galleries, resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
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

  &:hover {
    color: #FFC107;
  }
}

.single-gallery-link {
  color: #000;
  text-decoration: underline;

  &:hover {
    color: #000;
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
