<!-- 顶部导航 -->
<template>
  <div class="header">
    <div class="wapper">
      <div class="gnTitle">北京国能英泰科技有限公司</div>
      <el-menu
        :default-active="$route.path"
        :router='true'
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgba(255, 255, 255,0)"
        text-color="#fff"
        active-text-color="#3779da">
        <el-menu-item index="/">首页</el-menu-item>
        <!-- <el-submenu index="/solution">
          <template slot="title">解决方案</template>
          <el-menu-item index="/solution?name=first">企业能源管理解决方案</el-menu-item>
          <el-menu-item index="/solution?name=second">高校能源管理解决方案</el-menu-item>
          <el-menu-item index="/solution?name=third">医院能源管理解决方案</el-menu-item>
          <el-menu-item index="/solution?name=fourth">电力需求侧解决方案</el-menu-item>
        </el-submenu> -->
        <el-menu-item index="/solution">解决方案</el-menu-item>
        <el-menu-item index="/feelTrial">免费体验</el-menu-item>
        <el-menu-item index="/customerCase">客户案例</el-menu-item>
        <el-menu-item index="/service">服务流程</el-menu-item>
        <el-menu-item index="/newsTrends">新闻动态</el-menu-item>
        <el-menu-item index="/companyIntroduce">公司介绍</el-menu-item>
        <el-menu-item index="/joinUs">加入我们</el-menu-item>
        <el-menu-item index="/contactUs">联系我们</el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ComHeader',
  data () {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
    }
    // selectTab (val) {
    //   this.$store.dispatch('changeActiveName', val)
    // }
  }
}
</script>

<style lang="stylus" scoped>
.el-menu--popup
  background red !important
.wapper
  position relative
  width: 100%
  background: rgba(0,0,0,.4)
  height: 120px
  .gnTitle
    position absolute
    width 100%
    left 50%
    margin-left -428px
    color #ffff
    font-size 20px
    line-height 66px
  .el-menu-demo
    display: flex
    justify-content: center
    top 60px
  .el-menu.el-menu--horizontal
    border-bottom: none
  .el-menu--horizontal>.el-menu-item
    border-bottom: none
.wapper>>>.el-menu--horizontal>.el-submenu .el-submenu__title
    border-bottom: none
.wapper>>>.el-submenu__title:hover
  background-color: rgba(22, 66, 131, .32) !important
.wapper>>>.el-menu-item:hover
  background-color: rgba(22, 66, 131, 0.32) !important
// .wapper>>>.el-menu-item.is-active
//   background-color: rgba(255, 255, 255, 0.8) !important
.router-link-exact-active, .router-link-active
  color #164283 !important
</style>
