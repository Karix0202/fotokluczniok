<template>
  <div id="app">
    <Header />
    <b-container>
      <router-view/>
    </b-container>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Inconsolata&display=swap');

* {
  font-family: 'Inconsolata', monospace;
}
</style>
