<!-- 公司介绍 -->
<template>
  <div>
    <page-header></page-header>
    <div class="con-wapper">
      <div class="titlePosition">
        <div class="title">公司介绍 / Company Introduction</div>
        <div class="position">
          <span>位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>公司介绍</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="con-wapper">
        <div class="con-img">
          <img :src='imgUrl'>
        </div>
        <div class="con-introduce" v-html="content">
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script src="./CompanyIntroduce.js"></script>

<style lang="stylus" scoped>
.titlePosition>>>.el-breadcrumb
  font-size: 12px
  float: right
.con-wapper
  width: 1200px
  margin auto
  .titlePosition
    display flex
    justify-content space-between
    .title
      font-size 18px
      color #000
    .position
      font-size 12px
.main
  background #eee
  margin-top 80px
  .con-wapper
    padding 40px 0
    .con-img
      display flex
      justify-content flex-end
      img
        width 700px
        height 300px
        border 1px solid #FFFFFF
        padding 10px
    .con-introduce
      margin-top 30px
      text-indent 2em
      color #757474
</style>
