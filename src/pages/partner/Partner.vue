<!-- 合作伙伴 -->
<template>
  <div>
    <page-header></page-header>
    <div class="con-wapper">
      <div class="titlePosition">
        <div class="title">合作伙伴 / Partner</div>
        <div class="position">
          <span>位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>合作伙伴</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <ul class="img-con">
        <li v-for="item of newDataPage" :key='item.id'>
          <img :src="imgSrc + item.pictureUrl" />
        </li>
      </ul>
      <el-pagination
        background
        layout="total, prev, pager, next"
        :total="totalRows"
        class="paging"
        :page-size="pageSize"
        :current-page="currentPage"
        @size-change="getInfo"
        @current-change="getInfo_current">
      </el-pagination>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script src="./Partner.js"></script>
<style lang="stylus" scoped src="./Partner.css"></style>
