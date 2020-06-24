<!-- 首页页脚 -->
<template>
  <div class="footer">
    <div>{{infoList.recordNumber}}</div>
    <div>技术支持：{{infoList.publicNetworkSecurity}}</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ComFooter',
  data () {
    return {
      infoList: {} // 公司信息
    }
  },
  mounted () {
    this.inint()
  },
  methods: {
    inint () { // 初始化数据
      let _this = this
      axios({
        method: 'post',
        url: '/api/company/aboutusUs.htm',
        data: {
        },
        withCredentials: true, // 默认的
        timeout: 8000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          _this.infoList = res.company[0]
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
.footer
  position absolute
  bottom 0
  color #FFFFFF
  line-height 30px
  text-align center
  width 100%
  padding 20px
  border-top 1px solid #FFFFFF
  font-size 12px
</style>
