<style lang="scss">
  @import 'common/utils/colors.scss';
  @import 'common/utils/media.scss';

  .Settings {
    float: left;
    width: 100%;
    margin-bottom: 30px;
    background-color: $white;

    @include media(large) {
      width: 300px;
      margin-bottom: 0;
      margin-right: 40px;
    }
  }

  .Settings-title {
    margin: 0;
    padding: 5px 0;
    border-bottom: 1px solid $gallery;
    font-family: 'Roboto';
    font-size: 18px;
    color: $black;
  }

  .Settings-content {
    display: block;
    margin: 30px;
  }
</style>

<template>

  <div class="Settings">
    <h1 class="Settings-title">Settings</h1>

    <div class="Settings-content">
      <custom-input :value.sync="settings.hash" placeholder="Hash" @keyup.enter="change"></custom-input>
      <custom-select :value.sync="settings.location" :options='locations' placeholder="Location" @change="change"></custom-select>
      <custom-select :value.sync="settings.language" :options='languages' placeholder="Language" @change="change"></custom-select>
    </div>
  </div>

</template>

<script>
  import Input from 'components/input.vue';
  import Select from 'components/select.vue';

  export default {
    name: 'Settings',

    data() {
      return {
        settings: {
          hash: '',
          location: '',
          language: ''
        },
        locations: ['sanFrancisco'],
        languages: ['en', 'fr', 'ro'],
        latitudes: {
          sanFrancisco: ['-122.75', '36.8', '-121.75', '37.8']
        }
      };
    },

     components: {
       'custom-input': Input,
       'custom-select': Select
    },


    methods: {
      change() {
        if (this.settings.hash) {
          const objToSend = {
            hash: this.settings.hash,
            location: this.latitudes[this.settings.location],
            language: this.settings.language
          }

          this.$dispatch('changedSetting', this.settings);
        }
      }
    }
  };
</script>
