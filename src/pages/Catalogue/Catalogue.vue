<template>
  <div class="catalogue">
    <navs headtitle="目录" toolshows="true"></navs>
      <div class="main">
         <div class="catalogue-box">
        <span>正序<i></i></span>
          <ul>
            <router-link tag="li" v-for="(item, index) in readbooks.setcion" :key="index" to="/"  ><span></span><i></i>{{item.sets}}</router-link>
          </ul>
        </div> 
      </div>
  </div>
</template>
<script>
import Navs from 'components/Nav/Navs'
export default {
  components: {
    Navs
  },
  computed: {
    readbooks () {
      return this.$store.state.booksone
    }
  }
}
</script>
<style lang="less" scoped>
.catalogue-box{
  width: 100%;
  padding: 0.3rem 0.2rem 0;
  position: relative;
  overflow-x: none;
  background-color: #fff;
  >span{
    position: absolute;
    display: block;
    width: 3rem;
    height: 2rem;
    line-height: 2rem;
    color: #999;
    right: 1.5rem;
    top:1rem;
    font-size: .8rem;
    i{
      width: 1rem;
      height: 1.5rem;
      display: inline-block;
      position: absolute;
      top: .3rem;
      background-image: url('./images/2_12.gif');
      background-size: 100% 100%;
    }
  }
  >ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 3rem .5rem .5rem 0.2rem;
    >li{
      width:14rem;
      height: 3.5rem;
      border: solid 1px #999;
      border-radius: .5rem;
      line-height: 3.5rem;
      text-align: center;
      white-space: nowrap;
      text-overflow:ellipsis;
      overflow: hidden;
      padding: 0 2rem 0 4rem;
      margin: .5rem 0 .5rem 0rem;
      font-size: 1.6rem;
      color: #444;
      position: relative;
      span{
        display: block;
        width: 2.1rem;
        height: 1.3rem;
        position: absolute;
        left: 1rem;
        top: 1.1rem;
        background-image: url('./images/vipPic.png');
        background-size: 100% 100%;
      }
    }
    li:nth-child(1)>i{
        display: block;
        width: 2.1rem;
        height: 1.5rem;
        position: absolute;
        top: 0rem;
        right: 0;
        background-image: url('./images/new.png');
        background-size: 100% 100%;
      }
  }
}
</style>

