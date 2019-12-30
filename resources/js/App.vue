<template>
  <div id="app">
    <b-container>
      <router-view/>
    </b-container>
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
</style>
