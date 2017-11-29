<template>
  <div class="search">
      <navs headtitle="搜索分类" toolshows="true"></navs>
      <div class="main">
         <div class="search-input">
             <input type="text">
             <a href="">搜索</a>
         </div>
         <div class="classifys">
             <div class="classify-title">
                 <b></b>
                 <span>漫画分类</span>
                 <b></b>
             </div>
             <div class="classifys-list">
                 <ul>
                     <router-link v-for="(item, index) in classify.classifys" tag="li" :key="item.classname" :to="'/classify/' + item.classId"><a href="#">{{item.classname}}</a></router-link>
                 </ul>
             </div>
         </div>
         <div class="like">
             <h3>猜你喜欢</h3>
             <div class="like-list">
                 <ul>
                     <li v-for="(item, index) in classify.books" :key="item.books_id" v-if="index < 3"><a href="#"><span><img v-lazy="item.imgs" alt=""></span><b>{{item.title}}</b></a></li>
                 </ul>
             </div>
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
    this.$store.dispatch('setClassify')
  },
  computed: {
    classify () {
      return this.$store.state.classify
    }
  }
}
</script>
<style lang="less" scoped>
.search-input{
    width: 100%;
    height: 5rem;
    padding: 0.8rem 1rem 0rem 1rem;
    background-color: #fff;
    input{
        float: left;
        width: 80%;
        height: 3.5rem;
        border: 1px solid #4fd962;
        border-radius: 1.8rem 0 0 1.8rem;
        line-height: 3.5rem;
        font-size: 1.7rem;
        padding: 0rem 0rem 0rem 1.5rem;
        outline: none;
    }
    a{
        float: left;
        width: 20%;
        height: 3.5rem;
        background-color: #4fd962;
        line-height: 3.5rem;
        text-align: center;
        border-radius: 0 1.8rem 1.8rem 0;
        color: #fff;
        font-size: 1.7rem;
    }
}
.classify-title{
    display: flex;
    justify-content: space-around;
    background-color: #fff;
    align-content: center;
    height: 3rem;
    b{
        display: inline-block;
        width: 10rem;
        height: 1.5px;
        background-color: #b3b3b3;
        font-weight: normal;
        margin-top: 1.5rem;
    }
    span{
        display: inline-block;
        margin: 0  -.5rem;
        color: #999;
        font-size: 1.6rem;
        line-height: 2.9rem;
    }
}
.classifys-list>ul{
    width: 100%;
    padding: 0.5rem;
    display: flex;
    background-color: #fff;
    height: 16.5rem;
    flex-wrap: wrap;
    justify-content: center space-around;
    li{
        width: 30%;
        background-color: #f2f2f2;
        border-radius: 1.5rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        margin-right:.55rem;
        margin: 0.3rem 0.55rem 0.3rem 0.3rem;
        a{
            color: #999;
            font-size: 1.5rem;
        }
    }
}
.classifys{
    margin-bottom: 0.8rem;
}
.like{
    background: #fff;
    padding: 0.8rem;
    height: 25.8rem;
    h3{
        font-size: 1.4rem;
        margin: .8rem 0 0.5rem .8rem;
    }
}
.like-list>ul{
    display: flex;
    margin-left:.8rem; 
    flex-wrap: wrap;
    justify-content:space-around;
    li{
        width: 31%;
        span{
            display: block;
            width:93%;
            height: 11.5rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        b{
            display: block;
            width: 100%;
            text-align: center;
            font-size: 1.4rem;
            line-height: 2rem;
        }
    }
}
</style>

