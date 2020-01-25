<template>
  <div>
    <b-modal ref="assign-gallery-modal" id="assign-gallery-modal" title="Przypisz galerie">
      <b-form class="custom-form" @submit="submit">
        <b-form-group id="galleries-select-group" label-for="galleries-select" label="Galerie">
          <b-form-select id="galleries-select" v-model="selected" :options="toAssign" multiple />
        </b-form-group>

        <b-alert variant="danger" v-if="showError" show>Coś poszło nie tak. Spróbuj ponownie później.</b-alert>

        <b-button type="submit" variant="outline-primary" :disabled="isProcessing">Dodaj</b-button>
      </b-form>
      <div slot="modal-footer">
        <b-button class="btn cancel" :disabled="isProcessing" v-on:click="hide">Anuluj</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'AssignGalleryModal',
  props: {
    galleries: Array,
    toAssign: Array,
    id: '',
  },
  data() {
    return {
      selected: [],
      isProcessing: false,
      showError: false,
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.isProcessing = true;
      this.showError = false;
      if (this.selected.length > 0) {
        this.$store.dispatch('assignGalleries', { id: this.id, galleries: this.selected })
        .then((resp) => {
          this.$refs['assign-gallery-modal'].hide();
          resp.data.galleries.forEach((gallery) => {
            this.galleries.push(gallery);
            for(let i = 0; i < this.toAssign.length; i++) {
              if (this.toAssign[i].value === gallery.id) {
                this.toAssign.splice(i, 1);
              }
            }
            this.isProcessing = false;
          });
        })
        .catch((err) => {
          console.log(err);
          this.isProcessing = true;
          this.showError = true;
        });
      }
    },
    hide(e) {
      e.preventDefault();
      this.$refs['assign-gallery-modal'].hide();
    },
  },
};
</script>

<style lang="scss">
.cancel {
  background-color: white;
  color: #000;
  border: 1px solid #E53935;
  border-radius: 0;

  &:hover {
    color: #fff;
    background-color: #E53935;
  }
}

.modal-content {
  border-radius: 0 !important;
}
</style>
