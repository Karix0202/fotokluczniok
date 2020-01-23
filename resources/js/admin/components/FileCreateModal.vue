<template>
  <div>
    <b-modal ref="file-creation-modal" id="file-creation-modal" title="Dodaj plik">
      <b-form class="custom-form" @submit="submit">
        <b-form-group id="name-group" label-for="name" label="Nazwa pliku">
          <b-form-input id="name" v-model="form.name" type="text" required placeholder="Nazwa pliku"/>
        </b-form-group>

        <b-form-group id="link-group" label-for="link" label="Link do pliku">
          <b-form-input id="link" v-model="form.link" type="text" required placeholder="Link do pliku"/>
        </b-form-group>

        <b-alert variant="danger" v-if="errors.link" show>Link musi zaczynać się od "https://" lub "http://".</b-alert>

        <b-button type="submit" variant="outline-primary" :disabled="isProcessing">Dodaj</b-button>
      </b-form>
      <div slot="modal-footer">
        <b-button class="btn cancel-file" :disabled="isProcessing" v-on:click="hide">Anuluj</b-button>
      </div>
  </b-modal>
  </div>
</template>

<script>
export default {
  name: 'FileCreateModal',
  props: {
    id: String,
    files: Array,
  },
  data() {
    return {
      form: {
        name: '',
        link: ''
      },
      errors: {
        link: false,
      },
      isProcessing: false,
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      this.isProcessing = true;
      this.errors.link = true;
      this.$store.dispatch('createFile', { id: this.id, name: this.form.name, link: this.form.link })
      .then((resp) => {
        this.$refs['file-creation-modal'].hide();
        this.files.push(resp.data);
        this.isProcessing = false;
      })
      .catch((err) => {
        this.isProcessing = false;
        if (typeof err.response.link !== "undefined") this.errors.link = true;
      });
    },
    hide(e) {
      this.$refs['file-creation-modal'].hide();
    }
  },
};
</script>

<style lang="scss">
.cancel-file {
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
