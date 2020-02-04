<template>
  <div class="loading-holder">
    <div class="loading-screen"></div>
    <div class="spinner-holder">
      <b-spinner label="Loading..."></b-spinner>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Spinner',
};
</script>

<style lang="scss">
.spinner-holder {
  $spinnerSize: 120px;
  z-index: 10000;
  top: 50%;
  left: 50%;
  position: fixed;
  width: 100%;
  height: 100%;
  margin-left: -$spinnerSize/2;
  margin-top: -$spinnerSize/2;

  .spinner-border {
    width: $spinnerSize;
    height: $spinnerSize;
  }
}

.loading-screen {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 9000;
  background-color: #f5f5f5;
  opacity: 0.6;
}
</style>
