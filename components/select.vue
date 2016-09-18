<style lang="scss">
  @import 'common/utils/colors.scss';
  @import 'common/utils/media.scss';

  .CustomSelect {
    position: relative;
    display: inline-block;
    width: 200px;

    margin: 0 auto 20px;

    @include media(medium) {
      margin: 0 10px 20px 0;
    }
  }

  .CustomSelect-select {
    height: 100%;
    width: 100%;

    padding: 16px 0 0 15px;

    background-color: $white;

    border: 1px solid $turquoise;
    border-radius: 5px;

    font-size: 14px;
    color: $black;
    outline: 0;

    appearance: none;

    &::-ms-expand {
      display: none;
    }

    @include media(large) {
      font-size: 16px;
    }
  }

  .CustomSelect-label {
    position: absolute;
    left: 10px;
    top: 2px;

    font-size: 14px;
    color: $turquoise;
  }

  .CustomSelect-arrow {
    position: absolute;
    right: 10px;
    top: 50%;

    width: 14px;
    height: 14px;

    border: 1px solid $turquoise;
    border-radius: 2px;

    pointer-events: none;

    transform: translateY(-50%);

    span {
      position: absolute;
      top: 50%;
      left: 50%;

      width: 0;
      height: 0;

      border-left: 4px solid transparent;
      border-right: 4px solid transparent;
      border-top: 4px solid $black;
      border-bottom: none;

      transform: translate(-50%, -50%);
    }
  }

</style>

<template>
  <div class="CustomSelect" v-bind:class="{'CustomSelect--error': error}">
    <label class="CustomSelect-label" for="">{{placeholder}}</label>
    <select
    v-model="value"
    class="CustomSelect-select">
      <option value="" disabled :selected="!value || !value.length"></option>
      <option class="CustomSelect-option" v-for="opt in options">{{opt}}</option>
    </select>
    <div class="CustomSelect-arrow">
      <span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CustomSelect',
    data() {
      return {
      };
    },
    props: ['placeholder', 'options', 'value'],
  };
</script>
