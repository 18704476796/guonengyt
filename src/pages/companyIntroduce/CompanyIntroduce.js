import PageHeader from '@/commen/PageHeader.vue'
import PageFooter from '@/commen/PageFooter.vue'
import axios from 'axios'

export default {
  name: 'CompanyIntroduce',
  components: {
    PageHeader,
    PageFooter
  },
  data () {
    return {
      imgUrl: '',
      content: ''
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
        url: '/api/news/findNewsData.htm',
        data: {
          menuType: 6
        },
        withCredentials: true, // 默认的
        timeout: 8000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          let url = res.newDataPage.data[0].pictureUrl
          let urls = res.gnytConsoleURL
          _this.content = res.newDataPage.data[0].content
          _this.imgUrl = urls + url
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
