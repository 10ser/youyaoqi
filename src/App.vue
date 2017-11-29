<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created () {
    this.$store.dispatch('setClassify')
    this.$store.dispatch('setBanner')
  }
}
</script>

<style>
#app{
  background: #f2f2f2;
}
</style>
