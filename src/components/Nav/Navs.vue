<template>
  <header>
     <div class="back">
         <a href="" @click.prevent="goback()"></a>
         <span>{{headtitle}}</span>
    </div>
    <div class="tools" v-show="toolshows">
        <router-link to="/"></router-link>
        <router-link to="/mine"></router-link>
        <router-link to="/search"></router-link>
    </div>
    <slot></slot>
  </header>
</template>
<script>
export default {
  props: ['headtitle', 'toolshows'],
  methods: {
    goback () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
header{
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 4.2rem;
  border-bottom: solid 1px #b3b3b3;
  background-color: #fff;
  padding: 0.8rem 1rem 0 1rem;
  width: 100%;
  position: relative;
}
.back{
    float: left;
    width: 10rem;
    a{
        position: absolute;
        width: 1.4rem;
        height: 1.8rem;
        background-image: url('./images/header_back.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        padding: 0.5rem;
        top: 1.2rem;
    }
    span{
        float: left;
        margin-left: 4rem;
        line-height: 2.5rem;
        font-size: 1.8rem;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }
}
.tools{
    float: right;
    a{
        float: right;
        margin-left: 2.5rem;
        width: 2rem;
        height: 2rem;
    }
}
.tools>a:nth-child(1){
    background-image: url('./images/home.gif');
    background-size: 100% 100%;
}
.tools>a:nth-child(2){
    background-image: url('./images/man.gif');
    background-size: 100% 100%;
}
.tools>a:nth-child(3){
    background-image: url('./images/search.gif');
    background-size: 100% 100%;
}
</style>