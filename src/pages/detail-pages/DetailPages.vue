<template>
  <div>
    <page-header></page-header>
    <div class="con-wapper">
      <div class="titlePosition">
        <div class="position">
          <span>位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item class="pathName"><a :href='pathDetail'>{{nameDetail}}</a></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="title">
        {{newsData.title}}
      </div>
      <div class="content" v-html="newsData.content">
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/commen/PageHeader.vue'
import PageFooter from '@/commen/PageFooter.vue'
import axios from 'axios'

export default {
  name: 'DetailPages',
  components: {
    PageHeader,
    PageFooter
  },
  data () {
    return {
      pathDetail: this.$store.state.pathDetail, // 详情页面包屑导航,
      nameDetail: this.$store.state.nameDetail, // 详情页导航名称
      idDetail: this.$store.state.idDetail, // 详情id
      newsData: {}
    }
  },
  mounted () {
    this.inint()
  },
  methods: {
    inint () {
      let _this = this
      axios({
        method: 'post',
        url: '/api/news/newsDataDetailsById.htm',
        data: {
          newsDataId: this.idDetail
        },
        withCredentials: true, // 默认的
        timeout: 8000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          _this.newsData = res.newsData
          console.log(res)
        } else if (res.status === '1006') {
          console.log('必填参数为空')
        } else if (res.status === '1008') {
          console.log('提交异常')
        }
      }).catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.con-wapper>>>.el-pagination
  text-align center
  margin 20px 0
.con-wapper>>>.el-pagination.is-background .el-pager li:not(.disabled).active
  background #164283
.titlePosition>>>.el-breadcrumb
  font-size: 12px
  float: right
.con-wapper
  width: 1200px
  margin auto
  .titlePosition
    display flex
    justify-content space-between
    .title
      font-size 18px
      color #000
    .position
      font-size 12px
  .title
    text-align center
    font-size 16px
    line-height 40px
    margin-top 20px
  .content
    line-height 20px
    img
      width 100%
      height auto
.pathName>>>a
  cursor pointer !important
.content>>>img
  width 100%
  height auto
</style>
