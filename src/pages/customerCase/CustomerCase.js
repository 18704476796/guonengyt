import PageHeader from '@/commen/PageHeader.vue'
import PageFooter from '@/commen/PageFooter.vue'
import axios from 'axios'

export default {
  name: 'CustomerCase',
  components: {
    PageHeader,
    PageFooter
  },
  data () {
    return {
      totalRows: null, // 分页数据总条数
      pageSize: 6, // 分页单页显示条数
      currentPage: 1, // 每页页码
      solutionData: [ // 解决方案列表
      ],
      isContent: false, // 鼠标悬浮显示文字
      current: 0
    }
  },
  mounted () {
    this.inint()
  },
  methods: {
    goDetail (id) {
      this.$store.dispatch('changeIdDetail', id)
      this.$store.dispatch('changePathDetail', '/customerCase')
      this.$store.dispatch('changeNameDetail', '客户案例')
      this.$router.push({
        path: '/detail-pages',
        query: {}
      })
    },
    getInfo (size) { // 改变每页显示条数触发
      this.pageSize = size
      this.inint()
    },
    getInfo_current (size) { // 改变页面页码触发
      this.currentPage = size
      this.inint()
    },
    showCon (index) {
      this.isContent = true
      this.current = index
    },
    hiddenCon () {
      this.isContent = false
      this.current = null
    },
    inint () {
      let _this = this
      axios({
        method: 'post',
        url: '/api/news/findNewsData.htm',
        data: {
          pageSize: this.pageSize,
          currentPage: this.currentPage,
          menuType: 5
        },
        withCredentials: true, // 默认的
        timeout: 8000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          _this.solutionData = res.newDataPage.data
          _this.totalRows = res.newDataPage.totalRows // 总条数
          _this.pageSize = res.newDataPage.pageSize // 每页显示条数
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
