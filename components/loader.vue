<style lang="scss">
  @import 'common/utils/colors.scss';

  .CubeLoader {
    width: 40px;
    height: 40px;
    margin: 100px auto;
  }

  .CubeLoader .Cube {
    width: 33%;
    height: 33%;
    background-color: $turquoise;
    float: left;
    -webkit-animation: CubeGridScaleDelay 1.3s infinite ease-in-out;
            animation: CubeGridScaleDelay 1.3s infinite ease-in-out;
  }
  .CubeLoader .Cube1 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .CubeLoader .Cube2 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .CubeLoader .Cube3 {
    -webkit-animation-delay: 0.4s;
            animation-delay: 0.4s; }
  .CubeLoader .Cube4 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .CubeLoader .Cube5 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }
  .CubeLoader .Cube6 {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .CubeLoader .Cube7 {
    -webkit-animation-delay: 0s;
            animation-delay: 0s; }
  .CubeLoader .Cube8 {
    -webkit-animation-delay: 0.1s;
            animation-delay: 0.1s; }
  .CubeLoader .Cube9 {
    -webkit-animation-delay: 0.2s;
            animation-delay: 0.2s; }

  @-webkit-keyframes CubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }

  @keyframes CubeGridScaleDelay {
    0%, 70%, 100% {
      -webkit-transform: scale3D(1, 1, 1);
              transform: scale3D(1, 1, 1);
    } 35% {
      -webkit-transform: scale3D(0, 0, 1);
              transform: scale3D(0, 0, 1);
    }
  }
</style>

<template>
  <div class="CubeLoader">
    <div class="Cube Cube1"></div>
    <div class="Cube Cube2"></div>
    <div class="Cube Cube3"></div>
    <div class="Cube Cube4"></div>
    <div class="Cube Cube5"></div>
    <div class="Cube Cube6"></div>
    <div class="Cube Cube7"></div>
    <div class="Cube Cube8"></div>
    <div class="Cube Cube9"></div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
