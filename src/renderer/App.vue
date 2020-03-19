<template>
  <div id="app">
    <BarLeft id="left-bar" />
    <router-view></router-view>
  </div>
</template>

<script>
import BarLeft from '@/components/BarLeft.vue'
  export default {
    name: 'huffman-transmission-electron',
    components: {
      BarLeft
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');

body {
  font-family: 'Source Sans Pro', sans-serif;
}

* {
  user-select: none;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#left-bar {
  width: 40px;
  min-width: 40px;
  padding: 4px;
  border-right: solid 1px gray;
}

#app {
  display: flex;
  flex-flow: row;
}
</style>
