<template>
  <div id="app" class="grid-container">
    <router-view/>
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
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
