<template>
  <div class="classify">
      <navs :headtitle="classlist.classname" toolshows="true"></navs>
      <div class="main">
          <div class="lists">
              <ul>
                  <li v-for="(item, index) in classlist.classlists" :key="item.books_id"><a href="">
                      <div class="img"><img v-lazy="item.imgs" alt=""></div>
                      <div class="cont">
                          <p>{{item.title}}</p>
                          <span><i></i>{{item.author}}</span>
                          <span><i></i>{{item.title}}</span>
                          <span><i></i>{{item.hot}}亿</span>
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
  created () {
    this.id = this.$route.params.classId
  },
  data () {
    return {
      id: 0
    }
  },
  computed: {
    classlist () {
      let classifys = this.$store.state.classify.classifys
      if (classifys.length > 0) {
        for (let i = 0; i < classifys.length; i++) {
          if (Number(classifys[i].classId) === Number(this.id)) {
            console.log(classifys[i])
            return classifys[i]
          }
        }
      } else {
        return {}
      }
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
       height: 9.1rem;
       a{
           width: 100%;
           height: 100%;
       }
   } 
}
.img{
   width: 6.25rem;
   float: left;
    height: 7.9rem;
    margin-right: 1.2rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.cont{
    float: left;
    padding-top: 0.3rem;
  p{
      font-size: 1.8rem;
      font-weight: bold;
      margin-bottom: .3rem;
  }
  span{
      font-size: 1.3rem;
      display: block;
      line-height: 1.8rem;
      color: #999;
      margin-left: 1.5rem;
      position: relative;
      i{
          display: inline-block;
          width: 1rem;
          height: 1rem;
          position: absolute;
          left: -1.5rem;
          top: 0.4rem;
          background-size: 100% 100%;
      }
  }
  span:nth-child(2)>i{background-image: url('./images/1.gif')}
  span:nth-child(3)>i{background-image: url('./images/2.gif')}
  span:nth-child(4)>i{background-image: url('./images/3.gif')}
}
</style>


