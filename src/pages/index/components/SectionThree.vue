<!-- 第三屏 -->
<template>
  <div class="wapper3">
    <div class="title animated bounceOutUp">解决方案&nbsp;/&nbsp;Solution</div>
   <ul class="img-con">
     <li
      class="img-item"
      v-for="(item, index) of solutionData"
      :key='index'
      @mouseover="showCon(index)"
      @mouseout="hiddenCon()"
      @click="goDetail(item.id)">
       <div class="image">
         <transition name='fade'>
           <div class="content-show" v-show="isContent&&index==current">
             <div class="con-title">——{{item.title}}</div>
             <div class="content" v-html="item.content"></div>
           </div>
         </transition>
       </div>
       <div class='title-bottom'>{{item.title}}</div>
     </li>
   </ul>
   <div class="desc-button animated rollOut"><router-link to='/solution'>查看更多</router-link></div>
  </div>
</template>

<script>
export default {
  name: 'SectionThree',
  props: {
    options: Object,
    solutionData: Array // 列表数据
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
      this.$store.dispatch('changePathDetail', '/solution')
      this.$store.dispatch('changeNameDetail', '解决问题')
      this.$router.push({
        path: '/detail-pages',
        query: {}
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wapper3
    padding 60px 200px
    color #fff
    .title
      font-size 20px
    .img-con
      display flex
      flex-flow row wrap
      margin-top 25px
      margin-left -32px
      .img-item
        width 30%
        margin-top 15px
        cursor pointer
        margin-left 32px
        .image
          background url(../../../assets/images/sources.png)
          width 100%
          height 180px
          overflow hidden
          .content-show
            background rgba(22, 66, 131,.5)
            width 100%
            height 100%
            padding 20px
            box-sizing border-box
            line-height 23px
            .content
              display -webkit-box /* 作为弹性伸缩盒子模型显示 */
              -webkit-line-clamp 5 /* 显示的行数；如果要设置2行加...则设置为2 */
              overflow hidden /*超出的文本隐藏*/
              text-overflow ellipsis /* 溢出用省略号 */
              -webkit-box-orient vertical /* 伸缩盒子的子元素排列：从上到下 */
              height 120px
        .title-bottom
          text-align center
          line-height 30px
  .desc-button
    color #164283
    float right
    margin-top 10px
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
  .content>>>img
    display none
</style>
