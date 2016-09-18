<style lang="scss">
  @import 'common/utils/colors.scss';
  @import 'common/utils/media.scss';

  .Card {
    position: relative;
    float: left;
    text-align: center;
    width: 100%;
    height: 375px;
    margin-bottom: 20px;

    background-color: $white;
    box-shadow: 0 0 10px -4px $shark;

    @include media(medium) {
      width: calc(25% - 20px);
      margin-right: 20px;

      &:nth-child(4n) {
        margin-right: 0;
      }
    }
  }

  .Card-date {
    position: absolute;
    top: 15px;
    right: 15px;

    width: 100px;
    height: 20px;

    border-radius: 5px;

    background-color: $turquoise;
    color: $white;
  }

  .Card-body {
    display: block;

    padding: 45px 0 20px;
    margin: 0 20px;
    font-size: 16px;
    color: $turquoise;
    overflow: hidden;
  }

  .Card-avatar {
    position: absolute;
    bottom: 20px;
    display: block;
    width: 100%;
  }

  .Card-avatar-background {
    display: block;
    width: 48px;
    height: 48px;
    margin: 0 auto 10px;
    border-radius: 50%;
    border: 2px solid $turquoise;
    background-size: cover;
    background-position: center;
  }

  .Card-avatar-author {
    position: relative;
    display: block;

    padding-bottom: 10px;
    margin-bottom: 10px;
    background-size: 18px;
    color: $tuna;
    text-transform: uppercase;

    &:after {
      position: absolute;
      bottom: 0;
      left: calc(50% - 20px);
      content: '';
      width: 40px;
      height: 2px;
      background-color: $turquoise;
    }
  }

  .Card-avatar-screename {
    display: block;
    background-size: 12px;
    color: $bombay;
    text-transform: lowercase;
  }


</style>

<template>

  <div class="Card">
    <div class="Card-date">
      {{ data.date | pretyfyDate}}
    </div>
    <div class="Card-body">
      {{ data.body }}
    </div>
    <div class="Card-avatar">
      <span class="Card-avatar-background"
           :style="{ 'background-image': 'url(' + data.avatar + ')' }">
      </span>
      <span class="Card-avatar-author">
        {{ data.author }}
      </span>
      <span class="Card-avatar-screename">
        {{ data.screenname }}
      </span>
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Card',

    ready() {
    },

    data() {
      return {
      };
    },

    props: ['data'],

    filters: {
      pretyfyDate(date) {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const dateObj = new Date(date);
        return dateObj.getDate() + ' ' + months[dateObj.getMonth()] + ' ' + dateObj.getFullYear();
      }
    }
  };
</script>
