<style lang="scss">
  @import 'common/utils/colors.scss';
  @import 'common/utils/media.scss';

  .Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: $white;

    text-align: center;
  }

  .Header-title {
    margin: 0;
    padding: 20px 0;
    border-bottom: 1px solid $gallery;
    font-family: 'Roboto';
    font-size: 30px;
    color: $black;
  }
</style>

<template>

  <div class="Header">
    <h1 class="Header-title">Netop Twitter Feed</h1>
  </div>

</template>

<script>
  // import Header from 'components/partials/header.vue';
  // import req from 'lib/request';

  export default {
    name: 'Header',
    ready() {
    },
    data() {
      return {
      };
    },
    components: {
      // 'custom-header': Heacer
    }
  };
</script>
