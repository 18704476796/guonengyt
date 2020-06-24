<!-- 首页第一屏 -->
<template>
  <div class="box">
    <video data-autoplay autoplay loop muted id='video1' src="../../../assets/images/index.mp4"></video>
    <!-- <video id="video1" muted="muted" autoplay="autoplay" src="../../../assets/images/index.mp4" controls="controls"> -->
    <div class="index">
      <!-- 导航 -->
      <com-header></com-header>
      <!-- 了解详情 -->
      <div class="centerCon">
        <div class="title">北京国能英泰科技有限公司</div>
        <button type="button" class="details"><router-link to='/companyIntroduce'>了解详情</router-link></button>
      </div>
    </div>
  </div>
</template>

<script>
import ComHeader from '@/commen/Com_Header.vue'
export default {
  name: 'SectionOne',
  components: {
    ComHeader
  },
  props: {
    options: Object
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.box
  position: relative
  #video1
    position: absolute
    top: 0px
    left: 0px
    width: 100%
    height: 100%
    /*加滤镜*/
    /*filter: blur(15px); //背景模糊设置 */
    /*-webkit-filter: grayscale(100%);*/
    /*filter:grayscale(100%); //背景灰度设置*/
    z-index:-11
    background: #000
    object-fit: cover
    source
      max-width: 100%
      max-height: 100%
      height: auto
      width: auto
.index
  // width 1200px
  margin auto
  overflow hidden
  position relative
  height 100vh
.centerCon
  position absolute
  z-index 100
  left -1200px
  top -1200px
  margin-left -250px
  margin-top -67px
  width 500px
  height 194px
  background rgba(22, 66, 131,.5)
  color #fff
  text-align center
  .title
    font-size 30px
    line-height 120px
  .details
    background none
    color #fff
    border 1px solid #fff
    width 100px
    line-height 26px
    cursor pointer
    a
      color #FFFFFF
</style>
