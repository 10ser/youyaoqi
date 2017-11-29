<template>
  <div class="fav">
    <navs headtitle="书架" toolshows="true"></navs>
      <div class="main">
          <nav>
              <a href="###" @click.prevent="showcollect">收藏<span :class="{'active':collectbol}"></span></a>
              <a href="###" @click.prevent="showhistory">历史<span :class="{'active':!collectbol}"></span></a>
              <span :class="{'active':changebol}" @click="show()" v-if="collectbol"></span>
          </nav>
          <div class="collect" v-if="collectbol">
            <div class="stars">
                <ul>
                  <router-link tag="li" v-for="(item, index) in books" :key="item.id" :to="'/book-show/' + item.books_id" >
                    <a href="#">
                      <img v-lazy="item.imgs" alt="">
                      <span>{{item.title}}</span>
                      <span>未读/{{item.hua}}话</span>
                    </a>
                    <b  v-show="botbol===true" :class="{'active':item.choose}"  @click="choose(item)"></b>
                  </router-link>
                </ul>
            </div>
            <div class="kong" v-show="!books.length>0"></div>
            <div class="bot" v-show="botbol">
                <div @click="chooseAll()"><span></span>全选</div>
                <div @click="drop()"><span></span>删除</div>
            </div>
          </div>
          <div class="history" v-if="!collectbol">
              <div class="lists">
              <ul>
                <router-link v-for="(item, index) in historys" :key="item.id" :to="'/book-show/' + item.books_id" tag="li">
                  <a href="">
                    <div class="img"><img v-lazy="item.imgs" alt=""></div>
                    <div class="cont">
                        <p>{{item.title}}</p>
                        <span><i></i>{{item.author}}</span>
                        <span><i></i>{{item.cont}}</span>
                        <span><i></i>{{item.hot}}亿</span>
                      </div>
                  </a>
                <div class="read"><a href="#" @click.prevent="skip(item)"><span></span>继续阅读</a></div>
                </router-link>
              </ul>
          </div>
          </div>
      </div>
  </div>
</template>
<script>
import Navs from 'components/Nav/Navs'
export default {
  data () {
    return {
      changebol: false,
      botbol: false,
      collectbol: true
    }
  },
  components: {
    Navs
  },
  computed: {
    books () {
      return this.$store.state.books
    },
    historys () {
      return this.$store.state.historys
    }
  },
  methods: {
    show () {
      this.changebol = !this.changebol
      this.botbol = !this.botbol
    },
    choose (item) {
      this.$store.dispatch('choose', item)
    },
    drop () {
      this.$store.dispatch('drop')
        .then(res => {
          if (res === '请选择删除的书籍') {
            this.$msg('提示', res)
          } else if (res === '先去添加书籍吧') {
            this.$msg('提示', res)
            this.show()
          } else {
            this.show()
          }
        })
    },
    chooseAll () {
      this.$store.dispatch('chooseAll')
    },
    showhistory () {
      this.collectbol = false
    },
    showcollect () {
      this.collectbol = true
    },
    skip (item) {
      this.$store.dispatch('saveBooksOne', item)
        .then(res => {
          this.$router.push('/read')
        })
    }
  }
}
</script>
<style lang="less" scoped>
nav{
    width: 100%;
    background-color: #fff;
    height: 3.8rem;
    line-height: 3.8rem;
    padding: 0 12%;
    position: fixed;
    top:4.2rem;
    left: 0;
    right: 0;
    a{
        width: 50%;
        float: left;
        text-align: center;
        font-size: 1.45rem;
        position: relative;
        >span{
            display: block;
            width: 1.5rem;
            height: 0.25rem;
            border-radius: 1rem;
            position: absolute;
            bottom:0.1rem;
            left: 46.5%;
        }
        span.active{
            background-color: #8ce057;          
        }
    }
    >span{
        display: block;
        width: 1.6rem;
        height: 1.7rem;
        position: absolute;
        right: 1.2rem;
        bottom: 1.1rem;
        background-image: url('./images/4.gif');
        background-size: 100% 100%;
    }
    >span.active{
         background-image: url('./images/5.gif');
    }
}
.bot{
    width: 100%;
    position: fixed;
    height: 5rem;
    line-height: 5rem;
    background-color: #fff;
    border-top: solid 1px #999;
    border-bottom: solid 1px #999;
    bottom: 0;
    left: 0;
    right: 0;
    font-size: 1.6rem;
    div{
       width: 50%; 
       float: left;
       text-align: center;
       position: relative;
       padding-left: 2.3rem;
       span{
           width: 1.4rem;
           height: 1.7rem;
           display: block;
           position: absolute;
           left: 35%;
           top: 32%;
           background-size: 100% 100%;
       }
    }
    div:nth-child(1){
        border-right: solid 1px #999;
        span{
           background-image: url('./images/1.gif');
        }
    }
    div:nth-child(2){
        span{
           background-image: url('./images/2.gif');
        }
    }
}
.kong{
  width: 15rem;
  height: 16.5rem;
  margin: 6rem auto;
  background-image: url('./images/nullPic.png');
  background-size: 100% 100%;
}
.stars{
    width: 100%;
    margin-top: 3.8rem;
    padding: .5rem;
    ul{
        width: 100%;
        padding-left: 0.2rem;
        li{
            margin: 0.5rem;
            float: left;
            width: 9rem;
            height: 15.5rem;
            background-color: #fff;
            position: relative;
            img{
                width: 100%;
                height: 11.3rem;
            }
            span{
                display: block;
                text-align: center;
                font-size: 1.5rem;
                white-space: nowrap;
                text-overflow:ellipsis;
                overflow: hidden;
                line-height: 2rem;
            }
            span:nth-child(3){
                color:#999;
                font-size: 1.2rem;
            }
            b{
               width: 100%;
               height: 11.3rem;
               display: block;
               position: absolute;
               top:0;
               left: 0;
               right: 0;
               background-image: url('./images/dw.png');
               background-size: 100% 100%;
            }
            b.active{
               background-image: url('./images/dw2.png'); 
            }
        }
    }
}
.lists{
   margin-top: 4.5rem;
   width: 100%;
   li{
       margin-top: 0.5rem;
       width: 100%;
       background-color: #fff;
       padding: 0.5rem 0.8rem;
       height: 9.1rem;
       position: relative;      
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
  span:nth-child(2)>i{background-image: url('./images/2-1.gif')}
  span:nth-child(3)>i{background-image: url('./images/2-2.gif')}
  span:nth-child(4)>i{background-image: url('./images/2-3.gif')}
}
.read{
  width: 5rem;
  height: 5rem;
  color: #999;
  position: absolute;
  right: 2rem;
  top: 2rem;
  text-align: center;
  span{
    display: block;
    width: 2rem;
    height: 2.5rem;
    margin: 0 auto .3rem;
    background-image: url('./images/3.gif');
    background-size: 100% 100%;
  }
}
</style>


