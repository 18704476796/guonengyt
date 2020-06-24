<!-- 第五屏,新闻动态 -->
<template>
  <div class="wapper5">
    <div class="title animated fadeOutUp">新闻动态&nbsp;/&nbsp;News&nbsp;Informations</div>
    <ul class="wapper">
      <!-- 左侧列表 -->
      <li class="list-left animated fadeOutUpBig">
        <div class="left-con" v-for='(item, index) of newsListOne' :key='index' @click="goDetail(item.id)">
          <img :src='urlPublic + item.pictureUrl'/>
          <div class="content">
            <div class="con-title">{{item.title}}</div>
            <div class="desc" v-html="item.content"></div>
          </div>
        </div>
      </li>
      <!-- 右侧列表 -->
      <li class="list-right animated fadeOutDownBig">
        <div class="rignt-con" v-for='(item, index) of newsListTwo' :key='index' @click="goDetail(item.id)">
          <div class="con-title">{{item.title}}</div>
          <div class="desc" v-html="item.content"></div>
        </div>
        <div class="desc-button animated fadeOutRight"><router-link to='/newsTrends'>查看更多</router-link></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SectionFive',
  props: {
    options: Object,
    newsListOne: Array,
    newsListTwo: Array,
    urlPublic: String
  },
  data () {
    return {
    }
  },
  methods: {
    goDetail (id) {
      this.$store.dispatch('changeIdDetail', id)
      this.$store.dispatch('changePathDetail', '/newsTrends')
      this.$store.dispatch('changeNameDetail', '新闻动态')
      this.$router.push({
        path: '/detail-pages',
        query: {}
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content>>>img
    display none
  .wapper5
    padding 60px 200px
    color #fff
    // height 100vh
    .title
      font-size 20px
      text-align center
    .wapper
      display flex
      justify-content space-between
      margin-top 80px
      li
        width 45%
        .left-con
          display flex
          margin-top 20px
          cursor pointer
          img
            width 100px
            height 120px
          .content
            flex 1
            margin-left 15px
            padding 10px 0
            font-size 12px
            line-height 20px
            display -webkit-box /* 作为弹性伸缩盒子模型显示 */
            -webkit-line-clamp 3 /* 显示的行数；如果要设置2行加...则设置为2 */
            overflow hidden /*超出的文本隐藏*/
            text-overflow ellipsis /* 溢出用省略号 */
            -webkit-box-orient vertical /* 伸缩盒子的子元素排列：从上到下 */
            .con-title
              line-height 34px
              font-size 14px
            .desc
              overflow hidden /*超出的文本隐藏*/
        .rignt-con
          border-bottom 1px dashed #fff
          padding-bottom 20px
          margin-top 20px
          cursor pointer
          line-height 20px
          display -webkit-box /* 作为弹性伸缩盒子模型显示 */
          -webkit-line-clamp 2 /* 显示的行数；如果要设置2行加...则设置为2 */
          overflow hidden /*超出的文本隐藏*/
          text-overflow ellipsis /* 溢出用省略号 */
          -webkit-box-orient vertical /* 伸缩盒子的子元素排列：从上到下 */
          .con-title
            font-size 14px
            margin-bottom 10px
          .desc
            overflow hidden /*超出的文本隐藏*/
        .desc-button
          color #164283
          border 1px solid #164283
          width 80px
          text-align center
          line-height 26px
          float right
          margin-top 50px
          cursor pointer
          a
            color #164283
</style>
