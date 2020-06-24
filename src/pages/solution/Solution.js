import PageHeader from '@/commen/PageHeader.vue'
import Business from './components/Business'
import School from './components/School'
import Hospital from './components/Hospital'
import ElectricPower from './components/ElectricPower'
import PageFooter from '@/commen/PageFooter.vue'
import axios from 'axios'

export default {
  name: 'Solution',
  components: {
    PageHeader,
    Business,
    School,
    Hospital,
    ElectricPower,
    PageFooter
  },
  data () {
    return {
      activeName: '1',
      totalRows: null, // 分页数据总条数
      pageSize: 6, // 分页单页显示条数
      menuType: 1,
      currentPage: 1, // 每页页码
      newsList: [ // 新闻列表
      ]
    }
  },
  watch: {
    activeName () {
    }
  },
  methods: {
    handleClick (tab, event) {
      this.menuType = tab.name
      console.log(this.menuType)
      this.inint()
    },
    getInfo (size) { // 改变每页显示条数触发
      this.pageSize = size
      this.inint()
    },
    getInfo_current (size) { // 改变页面页码触发
      this.currentPage = size
      this.inint()
    },
    inint () {
      let _this = this
      axios({
        method: 'post',
        url: '/api/news/findNewsData.htm',
        data: {
          pageSize: this.pageSize,
          currentPage: this.currentPage,
          menuType: this.menuType
        },
        withCredentials: true, // 默认的
        timeout: 8000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          _this.newsList = res.newDataPage.data
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
  },
  mounted () {
    this.inint()
  }
}
