import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'
import SectionSeven from './components/SectionSeven'
import axios from 'axios'
export default {
  name: 'Index',
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive,
    SectionSix,
    SectionSeven
  },
  data () {
    return {
      // 全屏滚动参数设置
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        afterLoad: this.afterLoad,
        afterSlideLoad: this.afterSlideLoad,
        onLeave: this.onLeave,
        scrollOverflow: true,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'], // 导航锚点
        menu: '#menu', // 侧边导航id
        scrollingSpeed: 1000,
        // navigation: true, //是否显示导航，默认为false
        // navigationPosition: 'right', //导航小圆点的位置
        // navigationTooltips: ["第一页","第二页","第三页"],
        showActiveTooltip: true,
        scrollBar: false,
        sectionsColor: [ // 每屏背景颜色
        ]
      },
      solutionData: [], // 解决方案列表
      aboutEnterprise: {}, // 关于企业数据
      newsListTwo: [], // 新闻动态
      newsListOne: [],
      successfulCaseList: [], // 成功案例
      cooperativePartnerList: [], // 合作伙伴
      urlPublic: '' // 图片路径前缀
    }
  },
  methods: {
    afterLoad (Index, val) {
      if (val.index === 0) {
        $("#menu").addClass('animated bounce')
        $('.box1 .centerCon').animate({
        	top: '50%',
        	left: '50%'
        }, 1000);
        $(".header .wapper").removeClass('bounceOutLeft')
        // $(".box1 .centerCon").removeClass('bounceOutRight')
        $(".header .wapper").addClass('animated bounceInLeft')
        // $(".box1 .centerCon").addClass('centerConIn animated bounceInRight')
      } else if (val.index === 1) {
        $(".box2 .title").removeClass('bounceOutUp')
        $(".box2 .back-1").removeClass('bounceOutLeft')
        $(".box2 .back-2").removeClass('bounceOutLeft')
        $(".box2 .back-3").removeClass('bounceOutRight')
        $(".box2 .back-4").removeClass('bounceOutRight')
        $(".box2 .title").addClass('animated bounceInDown')
        $(".box2 .back-1").addClass('animated bounceInRight')
        $(".box2 .back-2").addClass('animated bounceInRight')
        $(".box2 .back-3").addClass('animated bounceInLeft')
        $(".box2 .back-4").addClass('animated bounceInLeft')
      } else if (val.index === 2) {
        $(".box3 .title").removeClass('animated bounceOutUp')
        $(".box3 .wapper3>.desc-button").removeClass('animated rollOut')
        $(".box3 .img-item").eq(0).removeClass('animated rotateOutUpLeft')
        $(".box3 .img-item").eq(1).removeClass('animated rotateOut')
        $(".box3 .img-item").eq(2).removeClass('animated rotateOutUpRight')
        $(".box3 .img-item").eq(3).removeClass('animated rotateOutDownLeft')
        $(".box3 .img-item").eq(4).removeClass('animated rotateOut')
        $(".box3 .img-item").eq(5).removeClass('animated rotateOutDownRight')
        $("#menu").addClass('animated flipInY')
        $(".box3 .title").addClass('animated bounceInUp')
        $(".box3 .img-item").eq(0).addClass('animated rotateInUpLeft')
        $(".box3 .img-item").eq(1).addClass('animated rotateIn')
        $(".box3 .img-item").eq(2).addClass('animated rotateInUpRight')
        $(".box3 .img-item").eq(3).addClass('animated rotateInDownLeft')
        $(".box3 .img-item").eq(4).addClass('animated rotateIn')
        $(".box3 .img-item").eq(5).addClass('animated rotateInDownRight')
        $(".box3 .wapper3>.desc-button").addClass('animated rollIn')
      } else if (val.index === 3) {
        $(".box4 .title").removeClass('animated slideOutUp')
        $(".box4 .img-top img").removeClass('animated slideOutRight')
        $(".box4 .con-bottom .desc").removeClass('animated slideOutLeft')
        $(".box4 .con-bottom .desc-button").removeClass('animated rollOut')
        $("#menu").addClass('animated pulse')
        $(".box4 .title").addClass('animated slideInUp')
        $(".box4 .img-top img").addClass('animated slideInRight')
        $(".box4 .con-bottom .desc").addClass('animated slideInLeft')
        $(".box4 .con-bottom .desc-button").addClass('animated rollIn')
      } else if (val.index === 4) {
        $("#menu").addClass('animated rubberBand')
        $(".box5 .title").removeClass('animated fadeOutUp')
        $(".box5 .list-left").removeClass('animated fadeOutUpBig')
        $(".box5 .list-right").removeClass('animated fadeOutDownBig')
        $(".box5 .desc-button").removeClass('animated fadeOutRight')
        $(".box5 .title").addClass('animated fadeInUp')
        $(".box5 .list-left").addClass('animated fadeInUpBig')
        $(".box5 .list-right").addClass('animated fadeInDownBig')
        $(".box5 .desc-button").addClass('animated fadeInRight')
      } else if (val.index === 5) {
        $("#menu").addClass('animated shake')
        $(".box6 .title").removeClass('animated rollOut')
        $(".box6 .img-item").removeClass('animated rollOut')
        $(".box6 .wappers>.desc-button").removeClass('animated rollOut')
        $(".box6 .title").addClass('animated rollIn')
        $(".box6 .img-item").addClass('animated rollIn')
        $(".box6 .wappers>.desc-button").addClass('animated rollIn')
      } else if (val.index === 6) {
        $(".box7 .title").removeClass('animated slideOutLeft')
        $(".box7 .con-logo").removeClass('animated slideOutRight')
        $(".box7 .desc-button").removeClass('animated slideOutUp')
        $(".box7 .footer").removeClass('animated slideOutUp')
        $("#menu").addClass('animated swing')
        $(".box7 .title").addClass('animated slideInLeft')
        $(".box7 .con-logo").addClass('animated slideInRight')
        $(".box7 .desc-button").addClass('animated slideInUp')
        $(".box7 .footer").addClass('animated slideInUp')
      }
    },
    onLeave (val) {
      if (val.index === 0) {
        $('.box1 .centerCon').animate({
        	top: '-1200px',
        	left: '-1200px'
        }, 1000);
        $(".header .wapper").removeClass('animated bounceInLeft')
        // $(".box1 .centerCon").removeClass('centerConIn animated bounceInRight')
        $(".header .wapper").addClass('animated bounceOutLeft')
        // $(".box1 .centerCon").addClass('animated bounceOutRight')
      } else if (val.index === 1) {
        $("#menu").addClass('animated flash')
        $(".box2 .title").addClass('animated bounceOutUp')
        $(".box2 .back-1").addClass('animated bounceOutLeft')
        $(".box2 .back-2").addClass('animated bounceOutLeft')
        $(".box2 .back-3").addClass('animated bounceOutRight')
        $(".box2 .back-4").addClass('animated bounceOutRight')
      } else if (val.index === 2) {
        $("#menu").addClass('animated flipInY')
        $(".box3 .title").addClass('animated bounceOutUp')
        $(".box3 .img-item").eq(0).addClass('animated rotateOutUpLeft')
        $(".box3 .img-item").eq(1).addClass('animated rotateOut')
        $(".box3 .img-item").eq(2).addClass('animated rotateOutUpRight')
        $(".box3 .img-item").eq(3).addClass('animated rotateOutDownLeft')
        $(".box3 .img-item").eq(4).addClass('animated rotateOut')
        $(".box3 .img-item").eq(5).addClass('animated rotateOutDownRight')
        $(".box3 .wapper3>.desc-button").addClass('animated rollOut')
      } else if (val.index === 3) {
        $("#menu").addClass('animated pulse')
        $(".box4 .title").addClass('animated slideOutUp')
        $(".box4 .img-top img").addClass('animated slideOutRight')
        $(".box4 .con-bottom .desc").addClass('animated slideOutLeft')
        $(".box4 .con-bottom .desc-button").addClass('animated rollOut')
      } else if (val.index === 4) {
        $("#menu").addClass('animated rubberBand')
        $(".box5 .title").addClass('animated fadeOutUp')
        $(".box5 .list-left").addClass('animated fadeOutUpBig')
        $(".box5 .list-right").addClass('animated fadeOutDownBig')
        $(".box5 .desc-button").addClass('animated fadeOutRight')
      } else if (val.index === 5) {
        $("#menu").addClass('animated shake')
        $(".box6 .title").addClass('animated rollOut')
        $(".box6 .img-item").addClass('animated rollOut')
        $(".box6 .wappers>.desc-button").addClass('animated rollOut')
      } else if (val.index === 6) {
        $("#menu").addClass('animated swing')
        $(".box7 .title").addClass('animated slideOutLeft')
        $(".box7 .con-logo").addClass('animated slideOutRight')
        $(".box7 .desc-button").addClass('animated slideOutUp')
        $(".box7 .footer").addClass('animated slideOutUp')
      }
    },
    inint () {
      let _this = this
      axios({
        method: 'post',
        url: '/api/index.htm',
        withCredentials: true, // 默认的
        timeout: 80000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          _this.urlPublic = res.gnytConsoleURL
          _this.solutionData = res.solutionList // 解决方案数据
          _this.aboutEnterprise = res.aboutEnterprise // 关于企业
          _this.newsListTwo = res.newsListTwo // 新闻动态
          _this.newsListOne = res.newsListOne
          _this.successfulCaseList = res.successfulCaseList // 成功案例
          _this.cooperativePartnerList = res.cooperativePartnerList // 合作伙伴
          console.log(1)
          console.log(res)
        } else if (res.status === '1006') {
          _this.$toast('必填参数为空')
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
