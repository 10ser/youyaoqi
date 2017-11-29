<template>
  <div class="rank">
      <navs headtitle="排行" toolshows="true"></navs>
      <div class="main">
          <div class="lists">
              <ul>
                  <li v-for="(item, index) in classify.classifys[9].classlists" :key="index"><a href="#">
                      <div class="img"><img v-lazy="item.imgs" alt=""></div>
                      <div class="cont">
                          <p>{{item.title}}</p>
                          <span><i></i>{{item.author}}</span>
                          <span><i></i>{{item.cont}}</span>
                          <b>{{index+1}}</b>
                      </div>
                </a></li>
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
    classify () {
      return this.$store.state.classify
    }
  }
}
</script>
<style lang="less" scoped>
.lists{
   width: 100%;
   li{
       margin-top: 0.4rem;
       width: 100%;
       background-color: #fff;
       padding: 0.5rem 0.8rem;
       height: 13.6rem;
       a{
           width: 100%;
           height: 100%;
       }
   }
   li:nth-child(1){b{color: #e71617;}} 
   li:nth-child(2){b{color: #ff7519;}} 
   li:nth-child(3){b{color: #e8aa07;}} 
}
.img{
   width: 30%;
   float: left;
    height: 12.5rem;
    margin-right: 1.2rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.cont{
    float: left;
    position: relative;
    width: 65%;
  p{
      font-size: 1.8rem;
      margin-bottom: .3rem;
  }
  b{
      position: absolute;
      top: .2rem;
      right: 0;
      display: block;
      font-size: 2.6rem;
  }
  span{
      font-size: 1.3rem;
      display: block;
      line-height: 3rem;
      height: 3rem;
      color: #999;
      margin-left: 1.5rem;
      position: relative;
      i{
          display: inline-block;
          width: 1rem;
          height: 1rem;
          position: absolute;
          left: -1.5rem;
          top: 1rem;
          background-size: 100% 100%;
      }
  }
  span:nth-child(2)>i{background-image: url('./images/1.gif')}
  span:nth-child(3)>i{background-image: url('./images/2.gif')}
}
</style>


