<template>
  <div class="mine">
      <navs headtitle="个人中心" toolshows="true"></navs>
    <div class="main">
        <div class="users">
            <div class="user-head"><img src="" alt=""></div>
            <div class="user-cont">
                <span><b>{{userInfo.username}}</b></span>
                <span>会员时长还剩下<b> {{userInfo.vip}}</b> 天</span>
            </div>
        </div>
        <div class="user-bot">
            <div><span></span>{{userInfo.money}}</div>
            <div><span></span>{{userInfo.moon}}</div>
        </div>
        <div class="book">
            <b></b><a href="#/fav">书架<span>&gt;</span></a>
        </div>
        <div class="face">
            <b class="b1"></b><a href="#/vip">VIP充值<span>&gt;</span></a>
            <b class="b2"></b><a href="#/recharge">妖气币充值<span>&gt;</span></a>
            <b class="b3"></b><a href="#">消费记录<span>&gt;</span></a>
        </div>
        <div class="leave"><a href="#" @click.prevent="leave()">退出当前用户登录</a></div>
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
    if (!this.userInfo.id) {
      this.$msg('提示', '未登录')
        .then(res => {
          this.$router.push('/login')
        })
    }
  },
  computed: {
    userInfo () {
      return this.$store.state.userInfo
    }
  },
  methods: {
    leave () {
      this.$store.state.userInfo = {}
      this.$store.state.books = []
      this.$msg('提示', '已退出登录')
        .then(res => {
          this.$router.push('/')
        })
    }
  }
}
</script>
<style lang="less" scoped>
.users{
    width: 100%;
    height: 5.8rem;
    background-color: #fff;
    padding: 0.5rem 0.8rem;
}
.user-head{
   float: left;
   width: 5rem;
   height: 5rem;
   background-color: #ddd;
   border-radius: 50%; 
}
.user-cont{
    float: left;
    margin-left: 1.5rem;
    width: 75%;
    span{
        display: block;
        line-height: 2.3rem;
        color: #999;
        b{
            font-size: 1.5rem;
            color: black;
        }
    }
    span:last-child>b{
        color: red;
    }
}
.user-bot{
    height: 4rem;
    border-bottom: 1px solid #dedede;
    background-color: #fff;
    div{
        display: inline-block;
        float: left;
        width: 49%;
        height: 2rem;
        padding-left: 3rem;
        text-align: center;
        font-size: 1.8rem;
        margin: .8rem 0;
        span{
            margin: 0rem 1rem 0 0;
            width: 2rem;
            height: 2rem;
            display: inline-block;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            margin-right: 1rem;
            line-height: 2rem;
        }
    }
    div:nth-child(1){
        border-right: solid 1px #ccc;
        >span{
             background-image: url('./images/6.gif');
        }
    }
    div:nth-child(2)>span{
        width: 2.8rem;
        background-image: url('./images/5.gif');
    }
}
.book{
    border-bottom: 1px solid #dedede;
    border-top: 1px solid #dedede;
    width: 100%;
    background-color: #fff;
    height: 4.5rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    position: relative;
    a{
        float: left;
        width: 100%;
        padding-left: 5rem;
        line-height: 4.5rem;
        font-size: 1.5rem;
    }
    span{
        display: inline-block;
        float: right;
        padding-right: 0.5rem;
        color: #999;
    }
    b{
        position: absolute;
        display: inline-block;
        width: 2.75rem;
        height: 2.75rem;
        top: 0.8rem;
        left: 1.3rem;
        background-image: url('./images/4.gif');
        background-size: 100% 100%;
    }
}
.face{
    width: 100%;
    height: 13.5rem;
    position: relative;
    a{
        background-color: #fff;
        float: left;
        width: 100%;
        padding-left: 5rem;
        line-height: 4.5rem;
        font-size: 1.5rem; 
    }
    span{
       display: inline-block;
        float: right;
        padding-right: 0.5rem;
        color: #999; 
    }
    a:nth-child(1){
       border-bottom: 1px solid #dedede;
        border-top: 1px solid #dedede; 
    }
    a:nth-child(2){
       border-bottom: 1px solid #dedede;
    }
    a:nth-child(4){
       border-bottom: 1px solid #dedede;
    }
    b{
        position: absolute;
        display: inline-block;
        width: 2.75rem;
        height: 2.75rem;
        top: 0.8rem;
        left: 1.5rem;
        background-size: 100% 100%;
    }
    .b1{background-image: url('./images/3.gif');}
    .b2{top:5.5rem;background-image: url('./images/2.gif');}
    .b3{top:9.8rem;background-image: url('./images/1.gif');}
}
.leave{
    margin-top: 1.2rem;
    height: 4.5rem;
    width: 100%;
    background-color: #fff;
    border-bottom: 1px solid #dedede;
    border-top: 1px solid #dedede;
    a{
        width: 100%;
        background-color: #fff;
        line-height: 4.5rem;
        text-align: center;
        font-size: 1.5rem;
    }
}
</style>

