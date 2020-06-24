<!-- 第六屏，成功案例 -->
<template>
  <div class="wappers Hcss_ClearBoth">
    <div class="title animated rollOut">成功案例&nbsp;/&nbsp;Successful&nbsp;case</div>
    <ul class="img-con">
      <li
        class="img-item animated rollOut"
        v-for="(item, index) of successfulCaseList "
        :key='index'
        @mouseover="showCon(index)"
        @mouseout="hiddenCon()"
        @click="goDetail(item.id)">
        <div class="image">
          <transition name='fade'>
            <div class="content-show" v-show="isContent&&index==current">
              <div class="con-title">{{item.title}}</div>
              <div class="content" v-html="item.content"></div>
              <div class="desc-button">查看详情</div>
            </div>
          </transition>
        </div>
      </li>
    </ul>
    <div class="desc-button animated rollOut"><router-link to='/customerCase'>查看更多</router-link></div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'SectionSix',
  props: {
    options: Object,
    successfulCaseList: Array
  },
  data () {
    return {
      isContent: false, // 鼠标悬浮显示文字
      current: 0
    }
  },
  methods: {
    showCon (index) {
      this.isContent = true
      this.current = index
    },
    hiddenCon () {
      this.isContent = false
      this.current = null
    },
    goDetail (id) {
      this.$store.dispatch('changeIdDetail', id)
      this.$store.dispatch('changePathDetail', '/customerCase')
      this.$store.dispatch('changeNameDetail', '成功案例')
      this.$router.push({
        path: '/detail-pages',
        query: {}
      })
    }
  },
  mounted () {
    $('.box3 .img-item').eq(0).addClass('animated rotateOutUpLeft')
    $('.box3 .img-item').eq(1).addClass('animated rotateOut')
    $('.box3 .img-item').eq(2).addClass('animated rotateOutUpRight')
    $('.box3 .img-item').eq(3).addClass('animated rotateOutDownLeft')
    $('.box3 .img-item').eq(4).addClass('animated rotateOut')
    $('.box3 .img-item').eq(5).addClass('animated rotateOutDownRight')
  }
}
</script>

<style lang="stylus" scoped>
  .content>>>img
    display none
  .wappers
    padding 60px 200px
    color #fff
    .title
      font-size 20px
    .img-con
      display flex
      margin-top 120px
      margin-left -32px
      .img-item
        width 28%
        cursor pointer
        margin-left 32px
        .image
          background url(../../../assets/images/sources.png)
          width 100%
          height 300px
          background-size cover
          .content-show
            background #fff
            color #333333
            width 100%
            height 100%
            line-height 23px
            font-size 12px
            position relative
            .con-title
              border-bottom 1px solid #333333
              padding 20px
              text-align center
            .content
              padding 20px
              width 100%
              box-sizing border-box
              height 110px
              text-indent 2em
              display -webkit-box /* 作为弹性伸缩盒子模型显示 */
              -webkit-line-clamp 4 /* 显示的行数；如果要设置2行加...则设置为2 */
              overflow hidden /*超出的文本隐藏*/
              text-overflow ellipsis /* 溢出用省略号 */
              -webkit-box-orient vertical /* 伸缩盒子的子元素排列：从上到下 */
            .desc-button
              position absolute
              left 50%
              margin-left -40px
              bottom 30px
              color #164283
              border 1px solid #164283
              width 80px
              text-align center
              line-height 26px
  .desc-button
    color #164283
    float right
    margin-top 50px
    border 1px solid #164283
    width 80px
    text-align center
    line-height 26px
    cursor pointer
    a
      color #164283
  .fade-enter-active
    transition opacity .5s //类名：隐藏到显示过程所需要的时间
  .fade-enter // 类名:初始化状态
    opacity 0
</style>
