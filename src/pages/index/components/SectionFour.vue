<!-- 第四屏 ,关于企业-->
<template>
  <div class="wapper4">
    <div class="title animated slideOutUp">关于企业&nbsp;/&nbsp;About&nbsp;Enterprises</div>
    <div class="img-top">
      <img :src= "urlPublic + aboutEnterprise.pictureUrl" class="animated slideOutRight" />
    </div>
    <div class="con-bottom">
      <div class="content">
        <div class="desc animated slideOutLeft" v-html="aboutEnterprise.content">
        </div>
        <div class="desc-button animated rollOut"><router-link to='/companyIntroduce'>查看详情</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionFour',
  props: {
    options: Object,
    aboutEnterprise: Object, // 关于企业
    urlPublic: String
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
  .content>>>img
    display none
  .wapper4
    padding 60px 200px
    color #fff
    .title
      font-size 20px
      text-align center
    .img-top
      display flex
      justify-content flex-end
      margin-top 100px
      img
        width 560px
        height 200px
        border 2px solid #fff
        padding 5px
    .con-bottom
      display flex
      justify-content flex-start
      margin-top 30px
      .content
        width 560px
        .desc
          height 104px
          line-height 26px
          text-indent 2em
          display -webkit-box /* 作为弹性伸缩盒子模型显示 */
          -webkit-line-clamp 4 /* 显示的行数；如果要设置2行加...则设置为2 */
          overflow hidden /*超出的文本隐藏*/
          text-overflow ellipsis /* 溢出用省略号 */
          -webkit-box-orient vertical /* 伸缩盒子的子元素排列：从上到下 */
        .desc-button
          color #164283
          border 1px solid #164283
          width 80px
          text-align center
          line-height 26px
          float right
          margin-top 20px
          margin-right 100px
          cursor pointer
          a
            color #164283
</style>
