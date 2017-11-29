<template>
  <div class="read">
    <navs :headtitle="readbooks.title" :class="{'hides':hidebol}">
        <span @click="Cachebol()"></span>
    </navs>
      <div class="main" @click="hide()" ref="mybox">
          <div class="bookimgs">
              <ul>
                  <li v-for="(item, index) in readbooks.bookimgs" :key="index"><img v-lazy="item.imgs" alt=""></li>
              </ul>
          </div>
          <div class="bot-nav" :class="{'hide':hidebol}">
              <a href="###" :class="{'active':readbooks.star}" @click.prevent="addStar()"></a>
              <router-link to="/catalogue"></router-link>
              <router-link to="/"></router-link>
          </div>
          <div class="cache" v-show="cachebol">
              <div class="cache-box">
                  <span></span>
                  <div class="title">有妖气，什么都能下 ！<span @click="Cachebol()"></span></div>
                  <div class="info">
                      <span>极速缓存，离线阅读——</span>
                      <span>尽在有妖气客户端O(∩_∩)O~</span>
                      <a href="#">我不信 ！</a>
                  </div>
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
      cachebol: false,
      hidebol: false
    }
  },
  mounted () {
    let box = this.$refs.mybox
    box.addEventListener('scroll', this.scroll, false)
  },
  components: {
    Navs
  },
  computed: {
    readbooks () {
      return this.$store.state.booksone
    },
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    Cachebol () {
      this.cachebol = !this.cachebol
    },
    hide () {
      this.hidebol = !this.hidebol
    },
    addStar () {
      let item = this.readbooks
      if (this.userInfo.id > 0) {
        item.star = !item.star
        console.log(item.star)
        if (item.star) {
          this.$store.dispatch('addStar', item)
        } else {
          this.$store.dispatch('subStar', item)
        }
      } else {
        this.$msg('提示', '未登录')
          .then(res => {
            this.$router.push('/login')
          })
      }
    },
    scroll () {
      this.hidebol = true
    }
  },
  created () {
    if (this.userInfo.id > 0) {
      this.$store.dispatch('historys')
    }
  }
}
</script>
<style lang="less" scoped>
header{
  transition: all 0.3s ease;
  z-index: 5;

  span{
      position: absolute;
      width: 2.2rem;
      height: 2.1rem;
      display: block;
      right: 1rem;
      top: 1rem;
      background-image: url('./images/downBtn_02.gif');
      background-size: 100% 100%;
  }
}
.main{
    top: 0;
    padding-top: 4.2rem;
    background-color: #fff;
        img[lazy=loading]{
        background: url("./images/loadings.gif") center center no-repeat;
        -webkit-background-size: 100px 100px;
        background-size: 100px 100px;
        }
    }
.bot-nav{
    width: 100%;
    position: fixed;
    bottom: 0;left: 0;right: 0;
    height: 4.5rem;
    border-top: solid 1px #f2f2f2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #fff;
    z-index: 4;
    transition: all 0.3s ease;
    a{
        width: 2rem;
        height: 2rem;
        background-size: 100% 100%;
    }
    a:nth-child(1).active{background-image: url('./images/1_07.gif');}
    a:nth-child(1){background-image: url('./images/1_03.gif');}
    a:nth-child(2){height:1.5rem;background-image: url('./images/1_01.gif');}
    a:nth-child(3){background-image: url('./images/1_05.gif');}
}
.bookimgs{
  width: 100%;
  li{
      width: 100%;
      height: 44rem;
      img{
          width: 100%;
          height: 100%;
      }
  }
}
.cache{
    position: fixed;
    z-index: 99;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
}
.cache-box{
    width: 96%;
    margin: 60% auto;
    height: 18.5rem;
    background-color: #fff;
    border-radius: .5rem;
    text-align: center;
    position: relative;
    >span{
        width: 12.5rem;
        height: 10rem;
        display: block;
        position: absolute;
        z-index: -1;
        top:-6.1rem;
        left: 9.08rem;
        background-image: url('./images/yaoqiniang1.png');
        background-size: 100% 100%;
    }
}
.title{
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    border-bottom: solid 1px #ddd;
    font-weight: bold;
    font-size: 1.8rem;
    position: relative;
    >span{
        width: 1.5rem;
        height: 1.5rem;
        display: block;
        position: absolute;
        right: 1.4rem;
        top: 1.4rem;
        background-image: url('./images/index_03.gif');
        background-size: 100% 100%;
    }
}
.info{
    width: 100%;
    padding: 1.6rem;
    span{
        display: block;
        margin-bottom: 1.5rem;
        font-size: 1.5rem;
    }
    a{
        width: 100%;
        background-color: #f66000;
        height: 3.5rem;
        color: white;
        border-radius: .5rem;
        font-size: 1.5rem;
        line-height: 3.5rem;
    }
}
.hide{
    transform: translateY(100%);
    opacity: 0;
}
.hides{
    transform: translateY(-100%);
    opacity: 0;
}
</style>


