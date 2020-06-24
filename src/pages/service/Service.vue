<template>
  <div>
    <page-header></page-header>
    <div class="con-wapper">
      <div class="titlePosition">
        <div class="title">服务流程 / Service Process</div>
        <div class="position">
          <span>位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>服务流程</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <img :src='imgUrl'>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script src="./Service.js">
</script>

<style lang="stylus" scoped>
.titlePosition>>>.el-breadcrumb
  font-size: 12px
  float: right
.con-wapper
  width: 1200px
  margin auto
  img
    width 100%
    height auto
    margin-top 40px
  .titlePosition
    display flex
    justify-content space-between
    .title
      font-size 18px
      color #000
    .position
      font-size 12px
</style>
