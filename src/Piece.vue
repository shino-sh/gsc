<template>
  <div class="piece">
    <div class="piece-top"></div>
    <div class="piece-right"></div>
    <span>{{ name }}</span>
    <div class="piece-left"></div>
  </div>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<!-- scoped CSS -->
<style scoped>
  .piece{
    position: relative;
    display: inline-block;
    list-style-type: none;
    width: 54px;
    height: 36px;
    background: #FFF;
    padding: 8px 0 16px 0;
    margin-bottom: 1px;
    text-align:center;
    border: solid #504944;
    border-width: 0 0 2px 0;
  }
  .piece span{
    color: #504944;
  }
  .piece-top{
    position: absolute;
    top: -10px;
    width: 0;
    height: 0;
    right: 0;
    left: 0;
  }
  .piece-top:before{
    content: "";
    position: absolute;
    top: 0px;
    left: -3px;
    border-style: solid;
    border-color: transparent transparent #504944 transparent;
    border-width: 0 30px 10px 30px;
  }
  .piece-top:after{
    content: "";
    position: absolute;
    top: 2px;
    border-style: solid;
    border-color: transparent transparent #FFF transparent;
    border-width: 0 27px 9px 27px;
    z-index: 10;
  }
  .piece-left{
    position: absolute;
    top: 0;
    left: -10px;
    width: 35px;
    height: 62px;
    overflow: hidden;
  }
  .piece-left:before{
    content: "";
    position: absolute;
    width: 10px;
    top: -2px;
    left: 0px;
    border-style: solid;
    border-color: #504944 transparent #504944 transparent;
    border-width: 0 0 64px 8px;
  }
  .piece-left:after{
    content: "";
    position: absolute;
    width: 10px;
    top: -2px;
    left: 2px;
    border-style: solid;
    border-color: #504944 transparent #FFF transparent;
    border-width: 0 0 62px 8px;
  }
  .piece-right{
    position: absolute;
    top: 0;
    right: -10px;
    width: 35px;
    height: 62px;
    overflow: hidden;
  }
  .piece-right:before{
    content: "";
    position: absolute;
    width: 10px;
    top: -2px;
    right: 0px;
    border-style: solid;
    border-color: #504944 transparent #504944 transparent;
    border-width: 0 8px 64px 0;
  }
  .piece-right:after{
    content: "";
    position: absolute;
    width: 10px;
    top: -2px;
    right: 2px;
    border-style: solid;
    border-color: #504944 transparent #FFF transparent;
    border-width: 0 8px 62px 0;
  }
</style>