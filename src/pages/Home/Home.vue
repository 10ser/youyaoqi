<template>
<div class="home">
    <tab-bar></tab-bar>
    <div class="main">
        <div class="bannar">
            <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item, index) in banner" :key="index"><img v-lazy="item.imgs" alt=""></mt-swipe-item>
            </mt-swipe>
        </div>
        <nav>
            <router-link tag="a" to="/"><span></span>更新</router-link> 
            <router-link tag="a" to="/rank"><span></span>排行</router-link> 
        </nav>
        <div class="str-content">
            <div class="content-title"></div>
            <div class="content-list">
                <ul>
                    <router-link  tag="li" v-if="index < 6" v-for="(item, index) in classify.classifys[0].classlists" :key="item.books_id" :to="'/book-show/' + item.books_id" ><a href="#"><span><img v-lazy="item.imgs" alt=""></span><b>{{item.title}}</b></a></router-link>
                </ul>
            </div>
        </div>
        <div class="box">
            <div class="box-title">
                <div class="box-logo"><img src="./images/box-title.gif" alt=""></div>
                <div class="box-txt">人气专栏</div>
                <div class="box-more">更多<span></span></div>
            </div>
            <div class="box-list">
                <ul>
                    <router-link tag="li" v-for="(item, index) in classify.classifys[1].classlists" :key="item.book_id" v-if="index < 3" :to="'/book-show/' + item.books_id"  ><a href=""><span><img v-lazy="item.imgs" alt=""></span><b>{{item.title}}</b></a></router-link>
                </ul>
            </div>
        </div>
        <div class="box">
            <div class="box-title">
                <div class="box-logo"><img src="./images/box-title2.gif" alt=""></div>
                <div class="box-txt">精品推荐</div>
                <div class="box-more">更多<span></span></div>
            </div>
            <div class="box-list">
                <ul>
                    <router-link tag="li" v-for="(item, index) in classify.classifys[2].classlists" :key="item.book_id" v-if="index < 3" :to="'/book-show/' + item.books_id"  ><a href=""><span><img v-lazy="item.imgs" alt=""></span><b>{{item.title}}</b></a></router-link>
                </ul>
            </div>
        </div>
        <div class="box">
                <div class="box-title">
                    <div class="box-logo"><img src="./images/box-title4.gif" alt=""></div>
                    <div class="box-txt">热力点击</div>
                    <div class="box-more">更多<span></span></div>
                </div>
                <div class="box-lists">
                    <ul>
                        <router-link tag="li" v-for="(item, index) in classify.classifys[3].classlists" :key="item.book_id" v-if="index < 3" :to="'/book-show/' + item.books_id">
                            <div class="lists-con">
                                <a href="">{{item.title}}</a>
                                <a href="">{{item.cont}}</a>
                                <a href="">{{item.author}}</a>
                            </div>
                            <a href=""><img v-lazy="item.imgs" alt=""></a>
                        </router-link>
                    </ul>
                </div>
        </div>
        <div class="box">
            <div class="box-title">
                <div class="box-logo"><img src="./images/box-title6.png" alt=""></div>
                <div class="box-txt">今日推荐</div>
            </div>
            <div class="one-show">
                <a href="" v-for="(item, index) in classify.classifys[4].classlists" :key="item.book_id" v-if="index < 1">
                    <div class="show-img"><img v-lazy="item.imgs" alt=""></div>
                    <div class="show-cont">
                        <p>{{item.title}}</p>
                        <p>{{item.content}}</p>
                        <p>{{item.author}}</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="box">
            <div class="box-title">
                <div class="box-logo"><img src="./images/box-title3.gif" alt=""></div>
                <div class="box-txt">完结漫画</div>
                <div class="box-more">更多<span></span></div>
            </div>
            <div class="box-list">
                <ul>
                    <li v-for="(item, index) in classify.classifys[5].classlists" v-if="index < 3" :key="item.book_id"><a href=""><span><img v-lazy="item.imgs" alt=""></span><b>{{item.title}}</b></a></li>
                </ul>
            </div>
        </div>
        <div class="box">
            <div class="box-title">
                <div class="box-logo"><img src="./images/box-title5.gif" alt=""></div>
                <div class="box-txt">全彩漫画</div>
                <div class="box-more">更多<span></span></div>
            </div>
            <div class="box-list">
                <ul>
                    <li v-for="(item, index) in classify.classifys[6].classlists" v-if="index < 3" :key="item.book_id"><a href=""><span><img v-lazy="item.imgs" alt=""></span><b>{{item.title}}</b></a></li>
                </ul>
            </div>
        </div>
        <div class="box end">
            <div class="box-title">
                <div class="box-logo"><img src="./images/box-title7.png" alt=""></div>
                <div class="box-txt">不知道什么鬼</div>
            </div>
            <div class="pllist">
                <ul>
                    <li v-for="(item, index) in classify.classifys[7].classlists" v-if="index < 4" :key="item.book_id"><a href=""><span><img v-lazy="item.imgs" alt=""></span><b>{{item.title}}</b></a></li>
                </ul>
            </div>
        </div>
        <div class="footer">
            <a href="">成为作者</a>
            <a href="">意见反馈</a>
            <a href="">漫画热评</a>
            <a href="">电脑版</a>
        </div>
    </div>
</div>
</template>
<script>
import TabBar from 'components/TabBar/TabBar'
export default {
  components: {
    TabBar
  },
  computed: {
    classify () {
      return this.$store.state.classify
    },
    banner () {
      return this.$store.state.banner
    }
  }
}
</script>
<style lang="less" scoped>
.bannar{
    width: 100%;
    height: 17rem;
    background-color: #fff;
    img{
        width: 100%;
        height: 100%;
    }
}
nav{
    width: 100%;
    height: 3.8rem;
    background-color: #fff;
    border-radius: 5px;
    a{
        width: 50%;
        float: left;
        line-height: 3.8rem;
        text-align: center;
        font-size: 1.6rem;
        position: relative;
        padding-left: 2.5rem;
        span{
            display: inline-block;
            width: 1.8rem;
            height: 2.2rem;
            background-size: 100% 100%;
            position: absolute;
            top:0.7rem;
            left: 35%;
        }
    }
}
nav>a:nth-child(1)>span{
    background-image: url('./images/nav2.gif');
}
nav>a:nth-child(2)>span{
    background-image: url('./images/nav1.gif');
}
.str-content{
    width: 100%;
    background-color: #fff;
    margin-top: 1rem;
    border-radius: 5px;
}
.content-title{
    width: 60%;
    height: 1.5rem;
    margin: 0 auto 0.5rem;
    background-image: url('./images/title.gif');
    background-size: 100% 100%;
}
.content-list>ul{
    display: flex;
    margin-left:.8rem; 
    flex-wrap: wrap;
    justify-content:space-around;
    li{
        width: 31%;
        span{
            display: block;
            width:93%;
            height: 12.5rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        b{
            display: block;
            width: 100%;
            text-align: center;
            line-height: 2rem;
            height: 2rem;
            white-space: nowrap;
            text-overflow:ellipsis;
            overflow: hidden;
        }
    }
}
.box{
    margin-top: .8rem;
    margin-bottom: .8rem;
    width: 100%;
    padding: 0.8rem;
    background-color: #fff;
    border-radius: 5px;
}
.box-title{
    width: 100%;
    height: 1.8rem;;
    margin-bottom: .5rem;
}
.box-logo{
    float: left;
    width: 1.7rem;
    height: 1.8rem;
    margin-left: .5rem;
    margin-right: .8rem;
    img{
        width: 100%;
        height: 100%;
    }
}
.box-txt{
    float: left;
    line-height: 1.8rem;
    font-size: 1.5rem;
}
.box-more{
    float: right;
    color:#aaa;
    font-size: 1.2rem;
    margin-right: 1.5rem;
    position: relative;
    span{
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        background-image: url('./images/more.gif');
        background-size: 100% 100%;
        position: absolute;
        right: -1.9rem;;
        top:-0.25rem;
    }

}
.box-list>ul{
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content:space-around;
    li{
        width: 32%;
        span{
            display: block;
            width:93%;
            height: 12.5rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        b{
            display: block;
            width: 100%;
            text-align: center;
            line-height: 2rem;
            white-space: nowrap;
            text-overflow:ellipsis;
            overflow: hidden;
            height: 2rem;;
        }
    }
}
.box-lists>ul{
    width: 100%;
    height: 28.5rem;
    background-color: #fff;
    li{
        float: left;
        margin-bottom: .5rem;
        width: 100%;
        >a{
            float: left;
            width: 55%;
            height: 9rem;
            >img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
.lists-con{
    float: right;
    width: 45%;
    height: 9rem;
    padding-left: 2rem;
    background-color: #f2f2f2;    
}
.lists-con>a:nth-child(1){
    font-weight: bold;
    font-size: 1.3rem;
    margin: .8rem 0 1rem;
}
.lists-con>a:nth-child(2){
    font-size: 1.1rem;
    margin:0 0 .6rem;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
}
.lists-con>a:nth-child(3){
    font-size: 1.1rem;
    margin:1.2rem 0 .5rem;;
    color:#999;
    white-space: nowrap;
    text-overflow:ellipsis;
    overflow: hidden;
}
.one-show{
   width: 100%;
   height: 13.5rem;
   background-color: #fff; 
}
.show-img{
    float: left;
    width: 30%;
    img{
        width: 100%;
        height: 100%;;
    }
}
.show-cont{
    float:left;
    margin-left: .8rem;
    width: 60%;
    >p:nth-child(1){
        font-size: 1.6rem;
        margin: 1.1rem 0;
    }
    >p:nth-child(2){
        font-size: 1.3rem;
        color: #999;
        margin-bottom: 1.2rem;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow: hidden;
    }
    >p:nth-child(3){
        font-size: 1.6rem;
        margin-bottom: 1.2rem;
    }
}
.pllist>ul{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    li{
        float: left;
        width: 48%;
        height:11rem;
        span{
            display: block;
            width: 100%;
            height:9rem;
            img{
                width: 100%;
                height:100%;
            }
        }
        b{
            display: block;
            text-align: center;
            line-height: 2rem;
            height: 2rem;
            white-space: nowrap;
            text-overflow:ellipsis;
            overflow: hidden;
        }
    }
}
.end{margin-bottom: 0;}
.footer{
    width: 100%;
    height: 4rem;
    background-image: url('./images/footer.jpg');
    background-size: 100% 100%;
    display: flex;
    flex-wrap: wrap;
    line-height: 4rem;
    justify-content:space-around;
    a{
        width: 25%;
        text-align: center;
        font-size: 1.4rem;
    }  
}
</style>

