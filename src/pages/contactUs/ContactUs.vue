<!-- 联系我们 -->
<template>
  <div>
    <page-header></page-header>
    <div class="con-wapper">
      <div class="titlePosition">
        <div class="title">联系我们 / Contact Us</div>
        <div class="position">
          <span>位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>联系我们</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="con-wapper">
        <div class="info-left">
          <div class="title">
            联系我们
          </div>
          <ul class="left-bottom">
            <li>{{infoList.name}}</li>
            <li>地址：{{infoList.webId}}</li>
            <li>电话：{{infoList.tel}}</li>
            <li>邮编：{{infoList.icpNumb}}</li>
          </ul>
        </div>
        <div class="info-right">
          <div id="map"></div>
        </div>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script src="./ContactUs.js"></script>

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
    display flex
    justify-content space-between
    .info-left
      .title
        margin-bottom 40px
        font-size 16px
      .left-bottom
        font-size 12px
        line-height 36px
    .info-right
      width 600px
      #map
        width 100%
        height 300px
</style>
