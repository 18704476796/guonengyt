import PageHeader from '@/commen/PageHeader.vue'
import PageFooter from '@/commen/PageFooter.vue'
import SystemEdition from './components/SystemEdition.vue'
import AccessDevice from './components/AccessDevice.vue'
import ContactWay from './components/ContactWay.vue'

export default {
  name: 'FeelTrival',
  components: {
    PageHeader,
    PageFooter,
    SystemEdition,
    AccessDevice,
    ContactWay
  },
  data () {
    return {
      industrySystem: null, // 选择系统的编号
      edition: null, // 选择版本编号,
      step:{
        stepOne: true, // 行业系统选择是否显示
        stepTwo: false, // 系统版本是否显示
        stepThree: false, // 选择接入设备是否显示
        stepFour: false // 填写联系方式页面是否显示
      },
      editionIntroduce: false, // 版本介绍页面是否显示
      industriesData: [ // 选择行业系统数据
        {
          id: 1,
          normalSrcImg: require('../../assets/images/factory2.png'), // 正常图片
          clickHoverSrcImg: require('../../assets/images/factory1.png'), // 选择图片
          title: '工厂能源管理',
          isHoverClick: false // 选择行业系统选择显示样式
        },
        {
          id: 2,
          normalSrcImg: require('../../assets/images/electric2.png'), // 正常图片
          clickHoverSrcImg: require('../../assets/images/electric1.png'), // 选择图片
          title: '电力需求侧',
          isHoverClick: false // 选择行业系统选择显示样式
        },
        {
          id: 3,
          normalSrcImg: require('../../assets/images/heat2.png'), // 正常图片
          clickHoverSrcImg: require('../../assets/images/heat1.png'), // 选择图片
          title: '供热阀控',
          isHoverClick: false // 选择行业系统选择显示样式
        },
        {
          id: 4,
          normalSrcImg: require('../../assets/images/house2.png'), // 正常图片
          clickHoverSrcImg: require('../../assets/images/house1.png'), // 选择图片
          title: '小区能源管理',
          isHoverClick: false // 选择行业系统选择显示样式
        },
        {
          id: 5,
          normalSrcImg: require('../../assets/images/school2.png'), // 正常图片
          clickHoverSrcImg: require('../../assets/images/school1.png'), // 选择图片
          title: '高校能源管理',
          isHoverClick: false // 选择行业系统选择显示样式
        },
        {
          id: 6,
          normalSrcImg: require('../../assets/images/hosptial2.png'), // 正常图片
          clickHoverSrcImg: require('../../assets/images/hosptial1.png'), // 选择图片
          title: '医院能源管理',
          isHoverClick: false // 选择行业系统选择显示样式
        },
        {
          id: 7,
          normalSrcImg: require('../../assets/images/public2.png'), // 正常图片
          clickHoverSrcImg: require('../../assets/images/public1.png'), // 选择图片
          title: '公共建设能源监测',
          isHoverClick: false // 选择行业系统选择显示样式
        },
        {
          id: 8,
          normalSrcImg: require('../../assets/images/smart2.png'), // 正常图片
          clickHoverSrcImg: require('../../assets/images/smart1.png'), // 选择图片
          title: '智慧水务',
          isHoverClick: false // 选择行业系统选择显示样式
        },
        {
          id: 9,
          normalSrcImg: require('../../assets/images/other2.png'), // 正常图片
          clickHoverSrcImg: require('../../assets/images/other1.png'), // 选择图片
          title: '其他行业能源计量',
          isHoverClick: false // 选择行业系统选择显示样式
        }
      ]
    }
  },
  mounted () {
    console.log(111222)
    // this.$router.go(0)
  },
  methods: {
    industries (id) { // 行业系统选择点击选择
    this.industrySystem = id
      this.$store.dispatch('changeIndustrySystem', id)
      this.industriesData.forEach((item, index) => {
        if (id === item.id ) {
          item.isHoverClick = true
        } else {
          item.isHoverClick = false
        }
      })
    },
    industriesNext () { // 行业系统选择下一步
      if (this.industrySystem === null) {
        alert('请选择行业系统')
      } else {
        this.step.stepOne = false
        this.step.stepTwo = true
      }
    }
  }
}
