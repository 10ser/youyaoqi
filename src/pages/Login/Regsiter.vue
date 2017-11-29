<template>
<div class="regsiter">
    <navs headtitle="注册" toolshows="true"></navs>
    <div class="main">
        <div class="top"></div>
        <div class="input-user">
            <input type="text" placeholder="请输入手机号码" v-model="phone">
        </div>
        <div class="input-con">
            <input type="password" placeholder="请输入密码" v-model="pwd">
        </div>
        <div class="input-con">
            <input type="password" placeholder="请确认密码" v-model="pwds">
        </div>
        <div class="con-a">
            <a href="" @click.prevent="register()">注册</a>
        </div>
        <div class="bot">
            <input type="checkbox" checked>&nbsp;注册即接受<span>"用户协议"</span>
        </div>
    </div>
</div>
</template>
<script lang="">
import Navs from 'components/Nav/Navs'
export default {
  data () {
    return {
      phone: '',
      pwd: '',
      pwds: ''
    }
  },
  created () {
    let userInfo = this.$store.state.userInfo
    if (userInfo.id > 0) {
      this.$router.push('/')
    }
  },
  components: {
    Navs
  },
  methods: {
    register () {
      let phone = this.phone
      let pwd = this.pwd
      let pwds = this.pwds
      if (phone === '' || pwd === '' || pwds === '') {
        this.$msg('提示', '不得为空')
      } else {
        if (/^1[3578]\d{9}$/.test(phone) && /^[a-zA-Z]\w{5}$/.test(pwd) && pwd === pwds) {
          this.$store.dispatch('registers', phone, pwd)
            .then(res => {
              if (res === '注册成功') {
                this.$msg('提示', res)
                  .then(res => {
                    this.$router.push('/mine')
                  })
              } else {
                this.$msg('提示', res)
              }
            })
        } else {
          this.$msg('提示', '手机不合法或密码不一致')
          this.pwd = this.pwds = ''
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
.input-user{
    border: 1px solid #ccc;
    width: 96%;
    height: 3.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    margin:-1.9rem auto 0;
    input{
        width:80%;
        margin:0 auto;
        display:block;
        border:none;
        padding:1rem .8rem .5rem 0rem;
        font-size:1.3rem;
        outline: none;
    }
}
.input-con{
    border: 1px solid #ccc;
    width: 96%;
    height: 3.5rem;
    background-color: #fff;
    border-radius: 0.5rem;
    margin:1rem auto 0;
    input{
        outline: none;
        width:80%;
        margin:0 auto;
        display:block;
        border:none;
        padding:1rem .8rem .5rem 0rem;
        font-size:1.3rem;
    }
}
.con-a{
    width:100%;
    margin-top:3rem;
    a{
        display: block;
        width: 80%;
        height: 3rem;
        line-height: 3rem;
        font-size: 1.5rem;
        color: #fff;
        border-radius: 0.5rem;
        background-color: #4fd962;
        text-align: center;
        margin: 1.2rem auto 0rem;
    }
}
.bot{
    width:80%;
    margin: 1rem auto;
    color:#999;
    span{
        margin-left:0.5rem;
        color:black;
    }
}
</style>
