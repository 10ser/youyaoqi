<template>
  <div class="login">
      <tab-bar></tab-bar>
      <div class="main">
            <div class="top"></div>
            <div class="float">
                <div class="input-box">
                <input type="text" placeholder="请输入账号/手机号/邮箱" v-model="account">
                </div>
            <div class="input-box">
                <input type="password" placeholder="请输入密码" v-model="psd">
                <a href="">忘记密码？</a>
                <a href="" @click.prevent="login()">登录</a>
                <a href="#/regsiter">手机号快速注册</a>
            </div>
            <div class="content">
                <div class="content-title"><i></i><span>使用以下方式登录</span></div>
                <div class="content-box">
                    <a href=""><img src="./images/qq.png" alt=""><span>QQ</span></a>
                    <a href=""><img src="./images/weibo.png" alt=""><span>微博</span></a>
                </div>
            </div>
          </div>
      </div>
  </div>
</template>
<script lang="">
import TabBar from 'components/TabBar/TabBar'
export default {
  data () {
    return {
      account: '',
      psd: ''
    }
  },
  created () {
    let userInfo = this.$store.state.userInfo
    if (userInfo.id > 0) {
      this.$router.push('/')
    }
  },
  components: {
    TabBar
  },
  methods: {
    login () {
      let account = this.account
      let psd = this.psd
      if (account === '' || psd === '') {
        this.$msg('提示', '账号或密码不得为空')
      } else {
        if (/^1[3578]\d{9}$/.test(account) && /^[a-zA-Z]\w{5}$/.test(psd)) {
          // 验证成功
          this.$store.dispatch('login', this.account, this.psd)
            .then(res => {
              if (res === '该用户不存在') {
                this.$msg.confirm('提示', '该用户不存在，是否跳转到注册页面')
                  .then(res => {
                    this.$router.push('/regsiter')
                  })
              } else if (res === '该用户存在') {
                this.$msg('提示', '登录成功')
                  .then(res => {
                    this.$router.push('/mine')
                  })
              }
            })
        } else {
          // 验证失败
          this.$msg('提示', '号码或者密码不合法')
          this.psd = ''
          this.account = ''
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
.main{
    width: 66%;
    margin: 20% auto 0;
    background-color: #fff;
}
.top{
    width: 56%;
    height: 11rem;
    margin: 0 auto;
    background-image: url('./images/top.png');
    background-size: 100% 100%;
    background-color: #fff;
}
.float{
    margin-top: -2.6rem;
    background-color: #fff;
}
.input-box{
    border: 1px solid #ccc;
    width: 99%;
    height: 3.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    line-height: 0.3733rem;
    padding: 1rem 1rem 0.5rem 2.5rem;
    margin: .6rem 0rem 0.24rem 0rem;
    input{
        border: none;
        outline: none;
        font-size: 1.4rem;
    }
    a:nth-child(2){
        display: block;
        width:5rem;
        height: 2rem;
        line-height: 2rem;
        margin-top: 2.5rem;
        float: right;
    }
    a:nth-child(3){
        display: block;
        width:100%;
        height: 4rem;
        line-height: 4rem;
        float: left;
        margin: 1rem 2rem 0 -.9rem;
        background-color: #4fd962;
        border-radius: 1rem;
        color: white;
        text-align:center;
        font-size: 1.5rem;
    }
    a:nth-child(4){
        display: block;
        width:100%;
        height: 3rem;
        line-height: 3rem;
        float: left;
        margin: 1rem 2rem 0 -.9rem;
        text-align:center;
        font-size: 1.3rem;
    }
}
.content{
    margin-top: 14rem;
    width: 100%;
    height: 10rem;
    // background-color: #f2f2f2;
}
.content-title{
    margin-top: 1rem;
    position: relative;
    span{
        position: relative;
        display: block;
        z-index: 2;
        color: #999;
        width: 10rem;
        height: 2rem;
        font-size: 1.2rem;
        line-height: 2rem;
        padding: 0 1rem;
        background-color: #fff;
        margin: 0 auto;
        text-align: center;
    }
    i{
        display: block;
        content: "";
        height: 1px;
        width: 100%;
        position: absolute;
        top: 1rem;
        left: 0;
        background-color: #e2e2e2;
    }
}
.content-box{
    width: 60%;
    display: flex;
    margin: 10% auto;
    justify-content:space-around;
    a{
        width: 25%;
        height:10%;
        img{
            width: 100%;
            height: 100%;
        }
        span{
            display: block;
            width: 100%;
            text-align: center;
            line-height: 2rem;
            height: 2rem;
            color:#999; 
        }
    }
}
</style>
