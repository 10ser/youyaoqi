<template>
  <div class="comment">
      <navs headtitle="VIP充值" toolshows="true"></navs>
      <div class="main">
          <div class="vip-title">VIP开通推荐<span>（中断续费将不再享受专享价格）</span></div>
          <div class="vip-list">
              <ul>
                  <li><span>推荐</span>88元/12个月</li>
                  <li>30元/1个月</li>
                  <li disabled><span>VIP专享</span>8元/1个月</li>
              </ul>
          </div>
          <div class="type">
              <div class="type-title">选择支付方式</div>
              <div class="type-zfb"><span></span>支付宝<b><i></i></b></div>
              <div class="type-more"><span></span>更多方式尽在有妖气客户端<b>安&nbsp;装</b></div>
          </div>
          <div class="privilege">
              <div class="privilege-title">VIP会员独有特权</div>
              <div class="privilege-list">
                  <ul>
                      <li>
                         <img src="./images/icon_privilege1.png" alt="">
                         <p>尊贵身份</p> 
                         <p>VIP尊贵身份体验</p>
                      </li>
                      <li>
                         <img src="./images/icon_privilege2.png" alt="">
                         <p>VIP漫画免费看</p> 
                         <p>立即阅读最新章节</p>
                      </li>
                      <li>
                         <img src="./images/icon_privilege3.png" alt="">
                         <p>领月票</p> 
                         <p>给喜爱的作品投月票</p>
                      </li>
                      <li>
                         <img src="./images/icon_privilege4.png" alt="">
                         <p>付费章节折扣价</p> 
                         <p>享受付费章节折扣</p>
                      </li>
                  </ul>
              </div>
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
  computed: {
    classify () {
      return this.$store.state.classify
    }
  }
}
</script>
<style lang="less" scoped>
.vip-title{
    width: 100%;
    height: 3rem;
    padding: 0 0.8rem;
    line-height: 3rem;
    font-size: 1.4rem;
    color: #999;
    span{
        display: inline-block;
        margin-left: .5rem;
        color: red;
        font-size: 1rem;
    }
}
.vip-list{
    width: 100%;
    height: 12rem;
    margin-bottom: .8rem;
    li{
        width: 45%;
        float: left;
        margin: 0 0 2% 3%;
        background-color: #fff;
        border-radius: .5rem;
        text-align: center;
        height: 5.5rem;
        line-height: 5.5rem;
        font-size: 1.5rem;
        border: solid 1px #d8d8d8;
        position: relative;
        span{
            position: absolute;
            top:0;
            left: 0;
            display: block;
            width: 4rem;
            font-size: 1rem;
            height: 1.5rem;
            line-height: 1.5rem;
            color: white;
            border-radius: .2rem;
        }
    }
    li:nth-child(1)>span{background-color: #ff6000;}
    li:nth-child(3){
       color:rgb(204, 204, 204);
       span{background-color: #ff9c00;}
      }
    li.active{
        border: solid 1px #ff6600;
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
        height: 2.5rem;
        display: inline-block;
        border-radius: 1rem;
        text-align: center;
        line-height: 2.5rem;
        color: white;
        background-color: #4fd962;
        position: absolute;
        right: 1.5rem;
        top: 1.05rem;
        font-weight: normal;
    }
}
.privilege{
    width: 100%;
    height: 14rem;;
    padding: 1rem;
    background-color: #fff;
}
.privilege-title{
    width: 100%;
    color: #999;
    font-size: 1.4rem;
    line-height: 2rem;
    height: 2.3rem;
    border-bottom: solid 1px #d6d6d6;
}
.privilege-list{
    width: 100%;
    li{
        width: 50%;
        float: left;
        padding: .8rem 0 .5rem 4rem;
        position: relative;
        img{
            position: absolute;
            left: 0;
            top: 1rem;
            border: solid 1px #d6d6d6;
        }
        p{
            font-size: 1.4rem;
            line-height: 2rem;
        }
        p:nth-child(3){
            color:#999;
        }
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

