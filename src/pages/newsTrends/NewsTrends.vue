<template>
  <div>
    <page-header></page-header>
    <div class="con-wapper">
      <div class="titlePosition">
        <div class="title">新闻动态 / News Informations</div>
        <div class="position">
          <span>位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新闻动态</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <ul class="news">
        <li class="news-item" v-for="(item, index) of newsList" :key='index' @click="goDetail(item.id)">
          <img :src="imgUrl + item.pictureUrl">
          <div class="news-con">
            <div class="news-title">{{item.title}}</div>
            <div class="news-desc" v-html="item.content">
            </div>
          </div>
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

<script src="./NewsTrends.js"></script>
<style lang="stylus" scoped src="./NewsTrends.css"></style>
