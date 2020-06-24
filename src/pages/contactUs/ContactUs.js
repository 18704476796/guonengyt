import PageHeader from '@/commen/PageHeader.vue'
import PageFooter from '@/commen/PageFooter.vue'
import axios from 'axios'

export default {
  name: 'ContactUs',
  components: {
    PageHeader,
    PageFooter
  },
  data () {
    return {
      infoList: {}
    }
  },
  mounted () {
    this.createMap() // 创建地图
    this.inint()
  },
  methods: {
    // 创建和初始化地图函数：
    // initMap () {
    // this.createMap() // 创建地图
    // },
    // 创建地图函数：
    createMap () {
      var map = new BMap.Map('map') // 创建Map实例
      var point = new BMap.Point(116.365473, 40.070014) // 定义中心点
      map.centerAndZoom(point, 17) // 初始化地图,设置中心点坐标和地图级别
      window.map = map
      var marker = new BMap.Marker(point) // 创建标注
      marker.setTitle('国能英泰,北京市海淀区西三旗建材城中路1号甲7号楼232号')
      map.addOverlay(marker) // 将标注添加到地图中
      // 设置标注动画效果。如果参数为null，则取消动画效果。该方法需要在addOverlay方法后设置
      marker.setAnimation()
      // 添加地图类型控件
      map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}))
      // map.setCurrentCity("北京") // 设置地图显示的城市 此项是必须设置的
      map.enableScrollWheelZoom(true) // 开启鼠标滚轮缩放
    },
    inint () {
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
