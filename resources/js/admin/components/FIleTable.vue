<template>
  <div>
    <button class="btn delete-selected-files" :disabled="selectedFiles.length === 0" v-on:click="deleteFiles($event)">Usuń zaznaczone</button>
    <button class="btn add-file" v-b-modal.file-creation-modal>Dodaj</button>
    <div class="table-responsive">
<table class="table table-striped custom-table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nazwa</th>
          <th scope="col">Link</th>
          <th scope="col">Akcja</th>
        </tr>
      </thead>
      <transition-group tag="tbody" name="fade">
        <tr v-for="(item, i) in files" :key="item.id">
          <th>{{ i+1 }}</th>
          <th>{{ item.name }}</th>
          <th>{{ item.link }}</th>
          <th>
            <label class="delete-checkbox-label">
              <input type="checkbox" :value="item.id" @change="handleChange($event)" class="delete-checkbox">
              Usuń
            </label>
          </th>
        </tr>
      </transition-group>
    </table>
    </div>
  </div>
</template>

<script>

export default {
  name: 'FileTable',
  props: {
    files: Array,
  },
  data() {
    return {
      selectedFiles: [],
    };
  },
  methods: {
    handleChange(e) {
      const id = e.target.value;
      if (e.target.checked) {
        this.selectedFiles.push(id);
      } else {
        for (let i = 0; i < this.selectedFiles.length; i++) {
          if (this.selectedFiles[i] === id) this.selectedFiles.splice(i, 1);
        }
      }
    },
    deleteFiles(e) {
      this.$store.dispatch('deleteFiles', { files: this.selectedFiles })
      .then((resp) => {
        console.log(resp);
        resp.data.forEach((deletedEl) => {
          for (let i = 0; i < this.files.length; i++) {
            if (this.files[i].id === deletedEl) this.files.splice(i, 1);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
    },
    handleChange(e) {
      const id = e.target.value;
      if (e.target.checked) {
        this.selectedFiles.push(id);
      } else {
        for (let i = 0; i < this.selectedFiles.length; i++) {
          if (this.selectedFiles[i] === id) this.selectedFiles.splice(i, 1);
        }
      }
    },
  },
};
</script>
