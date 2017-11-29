<template>
  <header>
     <div class="logo">
         <router-link to="/" tag="a"></router-link>
    </div>
    <div class="tools">
        <router-link to="/"></router-link>
        <router-link to="/mine"></router-link>
        <router-link to="/search"></router-link>
    </div>
  </header>
</template>
<script>
export default {

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
}
.logo{
    float: left;
    width: 6rem;
    height: 2.6rem;
    background-image: url('./images/logo.png');
    background-size: 100% 100%;
    a{
        width: 100%;
        height: 100%;
        display: block;
        outline: none;
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