import PageHeader from '@/commen/PageHeader.vue'
import PageFooter from '@/commen/PageFooter.vue'
import axios from 'axios'

export default {
  name: 'JoinUs',
  components: {
    PageHeader,
    PageFooter
  },
  data () {
    return {
      environmentList: {}, // 公司环境
      postNewsDatasList: [], // 招聘
      imgUrl: '',
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
        url: '/api/news/findJoinUs.htm',
        data: {
        },
        withCredentials: true, // 默认的
        timeout: 8000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          _this.postNewsDatasList = res.postNewsDatasList
          _this.environmentList = res.environmentList[0]
          _this.imgUrl = res.gnytConsoleURL
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
