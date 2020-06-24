<!-- 第二屏 -->
<template>
  <div class="TwoBox">
    <div class="title animated bounceOutUp">
      <div class="title-top">我们的优势&nbsp;/&nbsp;Our&nbsp;Strengths</div>
      <div class="title-bottom">专业、安全、可靠</div>
    </div>
    <ul class="back">
      <li class="back-1 animated bounceOutLeft">
        <div class="contents">
          <div class="con-title">更专业</div>
          <div class="content">
            成立近十年，深耕于智慧能源管理、能源物联网、能源销售领域，积累了丰富的管理经验，依托于大数据，为企业经营管理提供高效数据分析和决策支撑。
          </div>
        </div>
      </li>
      <li class="back-2 animated bounceOutLeft">
        <div class="contents">
          <div class="con-title">更便捷</div>
          <div class="content">
            基于云的能源物联网平台，架构灵活，拓展方便，为多种平台、众多通讯协议提供全面支持，为用户提供菜单式便捷服务。
          </div>
        </div>
      </li>
      <li class="back-3 animated bounceOutRight">
        <div class="contents">
          <div class="con-title">低成本</div>
          <div class="content">
            基于用能模型，经大数据分析优化，按需定制式服务，为企业量身定做低成本运营服务，定制低成本能源物联网方案。
          </div>
        </div>
      </li>
      <li class="back-4 animated bounceOutRight">
        <div class="contents">
          <div class="con-title">更高效</div>
          <div class="content">
            支持跨行业领域的能源管理，对智慧城市、智慧能源工厂、小区、医院、学校均能无缝对接，有强大的数据采集、处理、存储能力。
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SectionTwo',
  props: {
    options: Object
  },
  methods: {}
}
</script>

<style lang="stylus" scoped>
.TwoBox
  width 1200px
  margin auto
  .title
    width 100%
    text-align center
    color #fff
    padding 40px 0
    .title-top
      font-size 20px
    .title-bottom
      line-height 50px
  .back
    display flex
    justify-content center
    margin-top 120px
    li
      width 270px
      height 210px
      background-size contain
      background-repeat no-repeat
      cursor pointer
      .contents
        width: 142px
        height: 170px
        line-height 18px
        margin-left: 76px
        margin-top: 40px
        display -webkit-box /* 作为弹性伸缩盒子模型显示 */
        // -webkit-line-clamp 5 /* 显示的行数；如果要设置2行加...则设置为2 */
        overflow hidden /*超出的文本隐藏*/
        // text-overflow ellipsis /* 溢出用省略号 */
        -webkit-box-orient vertical /* 伸缩盒子的子元素排列：从上到下 */
        // text-indent: 2em
        .con-title
          text-align center
          margin-bottom 10px
    .back-1
      background url(../../../assets/images/page2-01.png)
      background-size contain
      background-repeat no-repeat
    .back-2
      background url(../../../assets/images/page2-02.png)
      background-size contain
      background-repeat no-repeat
    .back-3
      background url(../../../assets/images/page2-03.png)
      background-size contain
      background-repeat no-repeat
    .back-4
      background url(../../../assets/images/page2-04.png)
      background-size contain
      background-repeat no-repeat

</style>
