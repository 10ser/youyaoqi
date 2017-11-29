<template>
  <div class="comment">
      <navs headtitle="妖气币充值" toolshows="true"></navs>
      <div class="main">
          <div class="account-info">
              <div class="account-name">当前账号：<span>罗狮鼠</span></div>
              <div class="balance">余额: <span>0</span> 妖气币</div>
          </div>
          <div class="paymoney">
              <div class="pay-title">充值金额</div>
              <div class="num-box">
                  <span @click="sub"></span>
                  <input type="text" :value="num">
                  <span @click="num++"></span>
              </div>
              <div class="pay-num"><span>{{num}}</span>元</div>
          </div>
          <div class="num">妖气币数量: <span>{{num * 100}}</span> 妖气币</div>
          <div class="type">
              <div class="type-title">选择支付方式</div>
              <div class="type-zfb"><span></span>支付宝<b><i></i></b></div>
              <div class="type-more"><span></span>更多方式尽在有妖气客户端<b>安&nbsp;装</b></div>
          </div>
          <div class="pay-btn">
              <button>立即支付</button>
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
  data () {
    return {
      num: 10
    }
  },
  computed: {
    classify () {
      return this.$store.state.classify
    }
  },
  methods: {
    sub () {
      if (this.num > 0) {
        this.num--
      } else {
        this.num = 0
      }
    }
  }
}
</script>
<style lang="less" scoped>
.account-info{
    width: 100%;
    height: 2.4rem;
    line-height: 2.4rem;
    padding: 0 1rem;
}
.account-name{
    float: left;
    span{
        color: #999;
    }
}
.balance{
    float: right;
    span{
        color: #ff6600;
    }
}
.num{
    width: 100%;
    height: 2.4rem;
    line-height: 2.4rem;
    padding: 0 1rem;
    span{
       color: #ff6600; 
    }
}
.type{
    width: 100%;
    background-color: #fff;
    height: 12rem;
    margin-bottom: 1rem;
}
.type-title{
    width: 100%;
    height: 3rem;
    line-height: 3rem;
    padding-left: 1.2rem;
    font-size: 1.4rem;
    color: #999;
    border-bottom: solid 1px #b3b3b3;
}
.type-zfb{
    padding-left: 1.2rem;
    font-size: 1.6rem;
    line-height: 4.5rem;
    height: 4.5rem;
    border-bottom: solid 1px #b3b3b3;
    position: relative;
    padding-left: 5rem;
    span{
        display: inline-block;
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2rem;
        background-image: url('./images/zfb.png');
        background-size: 100% 100%;
        position: absolute;
        left: 1rem;
        top: .75rem;
    }
    b{
        display:block;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        border: solid 1px #b3b3b3;
        position: absolute;
        right: 1.5rem;
        top: 1.25rem;
        i{
            width: 0.9rem;
            height: 0.9rem;
            display: block;
            background-color: #ff6000;
            border-radius: 50%;
            position: relative;
            left: 24%;
            top: 24%;
        }
    }
}
.type-more{
    padding-left: 1.2rem;
    font-size: 1.6rem;
    line-height: 4.5rem;
    height: 4.5rem;
    border-bottom: solid 1px #b3b3b3;
    position: relative;
    padding-left: 5rem;
    span{
        display: inline-block;
        width: 2.5rem;
        height: 2.5rem;
        line-height: 2rem;
        background-image: url('./images/more.png');
        background-size: 100% 100%;
        position: absolute;
        left: 1rem;
        top: .75rem;
    }
    b{
        width: 5.5rem;
        height: 2rem;
        display: inline-block;
        border-radius: 1rem;
        text-align: center;
        line-height: 2rem;
        color: white;
        background-color: #4fd962;
        position: absolute;
        right: 1.5rem;
        top: 1.25rem;
        font-weight: normal;
    }
}
.paymoney{
    width: 100%;
    background-color: #fff;
    height: 10rem;
    padding: 0 1.5rem;
}
.pay-title{
    color: #999;
    line-height: 3.5rem;
    height: 3.5rem;
    font-size: 1.5rem;
    border-bottom: solid 1px #999;
}
.num-box{
    margin: 2rem 2.5rem 1.5rem 3rem;
    float: left;
    width: 14rem;
    height: 2.7rem;
    border:solid 1px #999;
    border-radius: 2rem;
    padding: 0 2%;
    span{
        display: block;
        float: left;
        width: 20%;
        height: 2.7rem;
        background-size: 50% 50%;
        background-position: center center;
        background-repeat: no-repeat;
    }
    span:nth-of-type(1){border-right: solid 1px #999;background-image: url('./images/icon_minus.png');}
    span:nth-of-type(2){border-left: solid 1px #999;background-image: url('./images/icon_plus.png');}
    input{
        display: block;
        float: left;
        width: 60%;
        height: 99%;
        text-align: center;
        line-height: 2.6rem;      
        outline: none;
        border: none;
        resize: none;
        font-size: 1.4rem;
    }
}
.pay-num{
    padding: 2rem 0;
    float: left;
    height: 2.6rem;
    line-height: 2.6rem;
    font-size: 1.5rem;
    span{
        color: #ff6600;
        margin-right: .3rem;
    }
}


.pay-btn{
    width: 100%;
    height: 9.1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 90%;
        height: 40%;
        border-radius: .9rem;
        background-color: #ff6600;
        color: white;
        border: none;
        font-size: 1.4rem;
    }
}
</style>

