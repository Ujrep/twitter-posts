<style lang="scss">
  @import 'common/utils/colors.scss';
  @import 'common/utils/media.scss';

  .CustomInput {
    position: relative;
    width: 200px;

    margin: 0 auto 20px auto;
  }

  .CustomInput-input {
    height: 100%;
    width: 100%;

    padding: 20px 0 0 15px;

    background-color: $white;

    border: 1px solid $turquoise;
    border-radius: 5px;

    font-size: 14px;
    color: $black;

    @include media(medium) {
      font-size: 16px;
    }

  }

  .CustomInput-label {
    position: absolute;
    left: 15px;
    top: 50%;

    font-size: 18px;

    transform: translateY(-50%);
    transition: all .15s ease-out;

    pointer-events: none;

    &--selected {
      top: 8px;

      font-size: 14px;
      color: $turquoise;

      transform: translateY(0);
    }
  }

</style>

<template>
  <div class="CustomInput">
    <label v-bind:class="{'CustomInput-label--selected': showLabel || value || value === 0}"
     class="CustomInput-label" for="">{{placeholder}}</label>
    <input v-model="value" class="CustomInput-input" type="{{type}}" maxlength="60" readonly="{{readonly}}"
        @focus="onFocus"
        @blur="showLabel = false">
  </div>
</template>

<script>
  export default {
    name: 'CustomInput',
    data() {
      return {
        showLabel: false,
      };
    },
    props: ['placeholder', 'value'],
    methods: {
      onFocus() {
        this.showLabel = true;
      }
    }
  };
</script>
