<template>
</template>

<script>
export default {
  name: 'Logout',
  created() {
    this.$store.dispatch('destroyToken')
    .then((resp) => {
      this.$router.push({ name: 'index' });
    })
    .catch((err) => {
      this.$router.push({ name: 'index' });
    });
  }
}
</script>
