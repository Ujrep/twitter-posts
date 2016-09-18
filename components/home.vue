<style lang="scss">
  @import 'common/utils/normalize.scss';
  @import 'common/utils/colors.scss';
  @import 'common/utils/media.scss';

  .Home {
    background-color: $gallery;
    text-align: center;
  }

  .Home-container {
    min-height: 100vh;
    margin: 0 20px;
    padding: 100px 0 0;

    @include media(medium) {
      margin: 0 50px 0;
    }

    @include media(large) {
      max-width: 1070px;
      margin: 0 auto;
    }
  }

  .Home-cards {
    float: left;
    width: 100%;
    height: auto;

    @include media(large) {
      width: calc(100% - 340px);
    }
  }
</style>

<template>

  <div class="Home">
    <custom-header></custom-header>
    <div class="Home-container clearfix">
      <div class="Home-settings">

      </div>
      <settings></settings>
      <div class="Home-cards clearfix">
        <loader v-if="!loaded"></loader>
        <card v-for="tweet in allTweets" :data="tweet"></card>
      </div>
    </div>
  </div>

</template>

<script>
  import Header from 'components/header.vue';
  import Card from 'components/card.vue';
  import Settings from 'components/settings.vue';
  import Loader from 'components/loader.vue';

  export default {
    name: 'Home',

    ready() {
      this.socket = io.connect();

       this.socket.on('tweet', (data) => {
          this.loaded = true;
          this.allTweets.unshift(data);
       });
    },
    data() {
      return {
        socket: {},
        allTweets: [],
        loaded: true
      };
    },
    events: {
      changedSetting(settings) {
        this.allTweets = [];
        this.loaded = false;
        this.socket.emit('settingsChange', settings);
      }
    },
    components: {
      'custom-header': Header,
      'card': Card,
      'settings': Settings,
      'loader': Loader,
    }
  };
</script>
