<template>
  <div>
    <b-modal ref="assign-gallery-modal" id="assign-gallery-modal" title="Przypisz galerie" @show="true" class="assign-gallery-modal">
      <b-form class="custom-form">
        <b-form-group id="galleries-select-group" label-for="galleries-select" label="Galerie">
          <b-form-select id="galleries-select" v-model="selected" :options="galleries" multiple />
        </b-form-group>
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
  },
  data() {
    return {
      selected: [],
      isProcessing: false,
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      console.log(selected);
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
