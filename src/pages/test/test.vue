<template>
  <div class="swiper-tab">
  <div class="swiper-tab-list {{currentTab==0 ? 'on' : ''}}" data-current="0" bindtap="swichNav">红色</div>
  <div class="swiper-tab-list {{currentTab==1 ? 'on' : ''}}" data-current="1" bindtap="swichNav">绿色</div>
  <div class="swiper-tab-list {{currentTab==2 ? 'on' : ''}}" data-current="2" bindtap="swichNav">黄色</div>
</div>
<div class="swiper-tab-temp"></div>
<div>
  <swiper current="{{currentTab}}" autoplay="{{true}}" class="swiper-box" duration="300" style="height:600px" bindchange="bindChange">
    <swiper-item style="background-color:red">
      红色内容
    </swiper-item>
    <swiper-item style="background-color:green">
      绿色内容
    </swiper-item>
    <swiper-item style="background-color:yellow">
      黑色内容
    </swiper-item>
  </swiper>
</div>
</template>
<style>
.swiper-tab {
  width: 100%;
  border-bottom: 1px solid #777;
  text-align: center;
  line-height: 40px;
  background-color: #fff;
}


.swiper-tab-list {
  font-size: 13px;
  display: inline-block;
  width: 33.3%;
  color: #777;
}
.on {
  color: #FFF;
  background-color: #528dc3;
  border-top:5rpx solid #528dc3;
  border-bottom:5rpx solid #528dc3;
}
</style>
<script>
export default {
    
}
</script>