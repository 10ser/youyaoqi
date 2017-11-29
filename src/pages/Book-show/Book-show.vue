<template>
  <div class="book-show">
      <navs :headtitle="booksOne.title" toolshows="true"></navs>
      <div class="main">
        <div class="top">
          <div class="toplist">
            <div class="names">{{booksOne.title}}</div>
            <div class="author">{{booksOne.author}}</div>
            <div class="hot">人气： <span>{{booksOne.hot}}亿</span></div>
            <span class="zf" @click="share"></span>
            <span class="star" :class="{'active':booksOne.star}" @click="addStar()"></span>
          </div>
          <div class="list-bot">
            <div class="btn"><a href="#/read" @click="skip(booksOne)">免费试读</a></div>
            <div class="img"><img v-lazy="booksOne.imgs" alt=""></div>
          </div>
        </div>
        <div class="shang"><span></span>打赏作则，离线阅读，只在有妖气漫画APP~！</div>
        <div class="nav">
          <a href="#"  :class="{'active':num === 1}" @click="num = 1">详情<span></span></a>
          <a href="#"  :class="{'active':num === 2}" @click="num = 2">目录<span></span></a>
          <a href="#"  :class="{'active':num === 3}" @click="num = 3">评论<span></span></a>
        </div>
        <transition-group name="slide-fade">
        <div class="box-xq" v-show="num === 1" key="1">
          <div class="time">上次更新： <span>{{booksOne.time}}</span></div>
          <div class="lass">分类：  <span>{{booksOne.cont}}</span></div>
          <div class="shao">内容简介：</div>
          <div class="content">{{booksOne.content}}</div>
          <div class="play"><a href="#"></a></div>
        </div>
        <div class="box-ml" v-show="num === 2" key="2">
          <div class="box-ml-head">
            <span>正序<i></i></span>
          <ul>
            <router-link tag="li" v-for="(item, index) in booksOne.setcion" :key="index" to="/" v-if="index < indexs" ><span></span><i></i>{{item.sets}}</router-link>
          </ul>
          <button @click="more()">查看更多</button>
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
        <div class="box-pl" v-show="num === 3" key="3">
          <span class="plbtn" @click="Comment(booksOne)"><i></i>评论</span>
          <ul>
            <router-link tag="li" v-for="(item, index) in booksOne.comment" :key="index" to="/">
              <div class="head"><img v-lazy="item.imgs" alt=""></div>
              <div class="cons">
                <div class="title"><span>{{item.usernames}}</span><span>{{item.lv}}</span><span>&nbsp;</span></div>
                <div class="text">{{item.text}}</div>
                <div class="times">{{item.times}}</div>
              </div>
            </router-link>
          </ul>
        </div>
        </transition-group>
        <div class="share" v-show="sharebol">
          <div class="share-box">
            <div class="share-top">
            <p>分享</p>
            <div class="share-list">
              <a href="#"><span><img src="./images/qqkj.png" alt=""></span><label for="">QQ空间</label></a>
              <a href="#"><span><img src="./images/qq.png" alt=""></span><label for="">QQ好友</label></a>
              <a href="#"><span><img src="./images/weibo.png" alt=""></span><label for="">新浪微博</label></a>
            </div>
          </div>
          <div class="noshare" @click="hideshare">取消分享</div>
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
    this.id = this.$route.params.books_id
  },
  data () {
    return {
      id: 0,
      num: 1,
      indexs: 6,
      sharebol: false
    }
  },
  computed: {
    booksOne () {
      let classifys = this.$store.state.classify.classifys
      if (classifys.length > 0) {
        for (let i = 0; i < classifys.length; i++) {
          for (let j = 0; j < classifys[i].classlists.length; j++) {
            if (Number(classifys[i].classlists[j].books_id) === Number(this.id)) {
              return classifys[i].classlists[j]
            }
          }
        }
      } else {
        return {}
      }
    },
    classify () {
      return this.$store.state.classify
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    books () {
      return this.$store.state.books
    }
  },
  methods: {
    addStar () {
      let item = this.booksOne
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
    skip (item) {
      this.$store.dispatch('saveBooksOne', item)
        .then(res => {
          this.$router.push('/read')
        })
    },
    more () {
      this.indexs = this.indexs + 10
    },
    Comment (item) {
      if (this.userInfo.id > 0) {
        this.$store.dispatch('saveBooksOne', item)
          .then(res => {
            this.$router.push('/comment')
          })
      } else {
        this.$msg('提示', '未登录')
          .then(res => {
            this.$router.push('/login')
          })
      }
    },
    share () {
      this.sharebol = true
    },
    hideshare () {
      this.sharebol = false
    }
  }
}
</script>
<style lang="less" scoped>
/* 设置持续时间和动画函数 */
// .slide-fade-enter-active {
//   transition: all .8s linear;
// }
// .slide-fade-leave-active {
//   transition: all .8s linear;
// }
// .slide-fade-enter, .slide-fade-leave-to {
//   opacity: 0;
// }
// .slide-fade-leave,.slide-fade-enter-to {
//   opacity: 1;
// }

.main{
  background-color: #fff;
  overflow-x: none;
}
.top{
  width: 100%;
  height: 15.4rem;
  background-color: #3f3e6c;
  color: white;
  padding-top: 0.1px;
}
.toplist{
  width: 100%;
  position: relative;
  div{
    padding-left: 39%;
    width: 80%;
    margin: 1rem 0;
    span{
      color:#fbf885; 
    }
  }
  div:nth-child(1){
    margin: 1.5rem 0;
    font-size: 1.6rem;
    font-weight: bold;
  }
}
.zf{
  position: absolute;
  display: block;
  width: 1.7rem;
  height: 1.6rem;
  right: 1rem;
  top: 0;
  background-image: url('./images/2_03.gif');
  background-size: 100% 100%;
}
.star{
  position: absolute;
  width: 3.4rem;
  height: 3.4rem;
  right: 2.3rem;;
  bottom: 0.5rem;
  background-image: url('./images/1_07.gif');
  background-size: 100% 100%;
}
.star.active{background-image: url('./images/1_05.gif');}
.list-bot{
  width: 100%;
  height: 6rem;
  background-color: #fff;
  position: relative;
}
.btn{
  width: 61%;
  float: right;
  height: 3.4rem;
  margin: 0.8rem .5rem 0rem 0;
  outline: none;
  a{
    width: 100%;
    height: 100%;
    background-color:#4fd962;
    color: white;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    border-radius: 2rem; 
  }
}
.img{
  width: 34%;
  height: 13rem;
  position: absolute;
  left: .7rem;
  top:-8.2rem;
  img{
    width: 100%;
    height: 100%;
    border: solid 3px white;
    border-radius: 0.5rem;
  }
}
.shang{
  margin-top:0.5rem;
  width: 100%;
  height: 3rem;
  line-height: 3rem;
  font-weight: bold;
  background-color: #fff;
  border-top: solid 1px #f2f2f2;
  border-bottom: solid 1px #f2f2f2;
  padding-left: 3rem;
  position: relative;
  span{
    position: absolute;
    display: block;
    width: 1.3rem;
    height: 1.3rem;
    left: 1rem;
    top: .85rem;
    background-image: url('./images/2_09.gif');
    background-size: 100% 100%;
  }
}
.nav{
  width: 100%;
  line-height: 3.2rem;
  height: 3.2rem;
  padding: 0 5%;
  background-color: #fff;
  border-bottom: solid 1px #f2f2f2;
  a{
    float: left;
    width: 33.3%;
    color: #999;
    text-align: center;
    position: relative;
    font-size: 1.4rem;
  }
  a.active{
    color: #4fd962;
    span{
      width: 1rem;
      height: 0.35rem;
      display: block;
      background-color: #4fd962;
      position: absolute;
      border-radius: 1rem;
      bottom: 0%;
      left: 45%;
    }
  }
}
.box-xq{
  position: absolute;
  width: 100%;
  background-color: #fff;
  color: #999;
  padding: 0.1px 1.2rem;
  div{
    margin: 1rem 0;
    font-size: 1.4rem;
  }
}
.content{
  line-height:1.6rem;
}
.play{
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  a{
    display: block;
    margin: 0 auto;
    width: 4rem;
    height: 4.4rem;
    background-image: url('./images/1_01.gif');
    background-size: 100% 100%;
  }
}
.box-ml{
  width: 100%;
  position: absolute;
}
.box-ml-head{
  width: 100%;
  padding: 0.3rem 0.2rem 0;
  height: 100%;;
  position: relative;
  overflow-x: none;
  >span{
    position: absolute;
    display: block;
    width: 3rem;
    height: 2rem;
    line-height: 2rem;
    color: #999;
    right: 1.5rem;
    top:1rem;
    font-size: 1rem;
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
    padding: 3rem 1rem .5rem 0.2rem;
    >li{
      width:13rem;
      height: 3.5rem;
      border: solid 1px #999;
      border-radius: .5rem;
      line-height: 3.5rem;
      text-align: center;
      white-space: nowrap;
      text-overflow:ellipsis;
      overflow: hidden;
      padding: 0 1rem 0 2.5rem;
      margin: .5rem 0 .5rem .5rem;
      font-size: 1.4rem;
      color: #444;
      position: relative;
      span{
        display: block;
        width: 1.1rem;
        height: 1.3rem;
        position: absolute;
        left: 1rem;
        top: 1.1rem;
        background-image: url('./images/suo.png');
        background-size: 100% 100%;
      }
    }
    >li:first-child>i{
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
  button{
      height: 3.8rem;
      border: solid 1px #999;
      border-radius: .5rem;
      line-height: 3.8rem;
      text-align: center;
      width: 90%;
      background-color: #fff;
      margin-left: 5%;
      font-size: 1.6rem;
      color: #444;
  }
}
.box-pl{
  width: 100%;
}
.plbtn{
  display: block;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background-color: #4fd962;
  text-align: center;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  color: white;
  line-height: 6.3rem;
  font-weight: bold;
  font-size: 1.4rem;
  z-index:4;
  i{
    display: block;
    width: 1.6rem;
    height: 1.6rem;
    position: absolute;
    top: .6rem;
    left: 1.5rem;
    background-image: url('./images/comic_sprite_03.gif');
    background-size: 100% 100%;
  }
}
.box-pl{
  width: 100%;
  padding: 0.5rem 1rem;
    position: absolute;
  ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    li{
      width: 100%;
      padding: .8rem 1rem 1rem 4.3rem;
      border-bottom: solid 1px #f2f2f2;
      position: relative;
    }
  }
}
.head{
  position: absolute;
  width: 3.25rem;
  height: 3.25rem;
  left: 0;
  top: .8rem;
  background-size: 100% 100%;
  img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
.title{
  font-size: 1.5rem;
  padding-top: 0.1px;
  position: relative;
  span:nth-child(1){
    color: #999;
    line-height: 1rem;
    height: 1rem;
    font-size: 1.6rem;
  }
  span:nth-child(2){
    display: inline-block;
    margin-left: 1.2rem;
    margin-top: .5rem;
    width: 2rem;
    height: 1.3rem;
    color: white;
    text-align: right;
    padding-right: 0.2rem;
    background-image: url('./images/center_sprite_02.gif');
    background-position: 0rem 0;
    background-size: 100% 100%;
    font-size: 1rem;
  }
  span:nth-child(3){
    width: 2.2rem;
    height: 1.4rem;
    display: inline-block;
    margin-left: 1.2rem;
    background-image: url('./images/zd.jpg');
    background-size: 100% 100%;
    position: absolute;
    top: .45rem;
  }
}
.text{
  font-size: 1.3rem;
  color: #444;
  margin: .8rem 0 0 0;
  line-height: 1.45rem;
  text-indent: 1rem;
}
.times{
  margin: .5rem 0 0 0;
  font-size: 1rem;
  color: #999;
}
.like{
    background: #fff;
    width: 100%;
    height: 25.8rem;
    color: #999;
    margin-top: 1.5rem;
    h3{
        width: 100%;
        display: block;
        font-size: 1.4rem;
        padding: .8rem 0 0.5rem .8rem;
        font-weight: normal;
    }
}
.like-list>ul{
    display: flex;
    margin-left:.5rem; 
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
            color: #999;
            font-weight: normal;
        }
    }
}
.share{
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
.share-box{
  width: 100%;
  height: 16rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
}
.share-top{
  p{
    width: 100%;
    height: 4rem;
    line-height: 4rem;
    text-align: center;
    font-size: 1.5rem;
  }
}
.share-list{
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 10%;
  width: 100%;
  margin-top: 1%;
  a{
    display: block;
    span{
      display: block;
      width: 4rem;
      height: 4rem;
      img{
        // background-size:100% 100%;
        width: 100%;
        height: 100%;
      }
    }
    label{
      display: block;
      height: 3rem;
      line-height: 3rem;
    }
  }
}
.noshare{
  width: 100%;
  height: 4rem;
  background-color: #ededed;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 4rem;
  text-align: center;
  font-size: 1.4rem;
  overflow: hidden;
  border-top: 1px solid #b3b3b3;
  color: #666666;
}
</style>


