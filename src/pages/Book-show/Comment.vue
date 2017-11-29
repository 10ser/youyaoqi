<template>
  <div class="comment">
      <navs headtitle="发表评论" toolshows="true"></navs>
      <div class="main">
          <div class="area">
              <textarea name="" id="" cols="30" rows="10" placeholder="快说两句话吧n(*≧▽≦*)n" ref="cont"></textarea>
              <span @click="submit(booksone)">发表评论</span>
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
    },
    userInfo () {
      return this.$store.state.userInfo
    },
    booksone () {
      return this.$store.state.booksone
    }
  },
  methods: {
    submit (item) {
      this.$store.dispatch('comment', this.$refs.cont.value)
    }
  }
}
</script>
<style lang="less" scoped>
.main{
    background-color: #fff;    
}
.area{
    width: 100%;
    background-color: #fff;
}
.area textarea{
    width: 100%;
    height: 13rem;
    padding: 1.3rem;
    font-size: 1.5rem;
    border:none;
    border-bottom: solid 2px #ddd;
    outline: none;
}
.area>span{
    display: block;
    width: 16rem;
    height: 3.5rem;
    line-height: 3.5rem;
    font-size: 1.5rem;
    color: #fff;
    text-align: center;
    background-color: #8ce057;
    border-radius: .5rem;
    margin: 1rem auto;
    font-weight: bold;
}
</style>

