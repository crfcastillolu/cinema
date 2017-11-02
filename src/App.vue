<template>
  <div id="app" class="grid-container">
    <router-view/>
    <img src="./assets/logo.png">
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="scss">
  @import './assets/stylesheets/application.scss';
</style>
