<!-- 企业能源管理方案 -->
<template>
  <div class="business">
    <ul class="img-con">
      <li
       class="img-item"
       v-for="(item, index) of newsList"
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
      </li>
    </ul>
    <el-pagination
      background
      layout="total, prev, pager, next"
      :total="totalRows"
      class="paging"
      :page-size="pageSize"
      :current-page="currentPage"
      @size-change="getInfo"
      @current-change="getInfo_current">
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'Business',
  props: {
    newsList: Array,
    totalRows: Number,
    pageSize: Number,
    currentPage: Number
  },
  data () {
    return {
      isContent: false, // 鼠标悬浮显示文字
      current: 0
    }
  },
  methods: {
    goDetail (id) {
      this.$store.dispatch('changeIdDetail', id)
      this.$store.dispatch('changePathDetail', '/solution')
      this.$store.dispatch('changeNameDetail', '企业能源管理方案')
      this.$router.push({
        path: '/detail-pages',
        query: {}
      })
    },
    getInfo (size) { // 改变每页显示条数触发
      this.$emit('getInfo', size)
    },
    getInfo_current (size) { // 改变页面页码触发
      this.$emit('getInfo_current', size)
    },
    showCon (index) {
      this.isContent = true
      this.current = index
    },
    hiddenCon () {
      this.isContent = false
      this.current = null
    }
  }
}
</script>

<style lang="stylus" scoped>
.content>>>img
  display none
.business>>>.el-pagination
  text-align center
  margin 20px 0
.business>>>.el-pagination.is-background .el-pager li:not(.disabled).active
  background #164283
.img-con
  display flex
  flex-flow row wrap
  margin-top 35px
  color #FFFFFF
  margin-left -40px
  .img-item
    width 30%
    margin-top 40px
    cursor pointer
    margin-left 40px
    .image
      background url(../../../assets/images/sources.png)
      width 100%
      height 240px
      background-repeat no-repeat
      background-size cover
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
.fade-enter-active
  transition opacity .5s //类名：隐藏到显示过程所需要的时间
.fade-enter // 类名:初始化状态
  opacity 0
</style>
