<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

* {
  font-family: 'Inconsolata', monospace;
}

.custom-form {
  input {
    border: 1px solid #000000;
    color: #000000;
    border-radius: 0;
    outline: none;
  }

  .btn {
    border: 1px solid #000000;
    color: #000000;
    border-radius: 0;
    outline: none;

    &:hover {
      border: 1px solid #000000;
      background-color: #000000;
      color: #ffffff;
    }

    &:focus {
      outline: none !important;
      box-shadow: none;
    }
  }
}

.form-holder {
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
