<!-- 客户案例 -->
<template>
  <div>
    <page-header></page-header>
    <div class="con-wapper">
      <div class="titlePosition">
        <div class="title">客户案例 / Customer Case</div>
        <div class="position">
          <span>位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>客户案例</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <ul class="img-con">
        <li
          class="img-item"
          v-for="(item, index) of solutionData"
          :key='index'
          @mouseover="showCon(index)"
          @mouseout="hiddenCon()"
          @click="goDetail(item.id)">
          <div class="image">
            <transition name='fade'>
              <div class="content-show" v-show="isContent&&index==current">
                <div class="con-title">{{item.title}}</div>
                <div class="content" v-html="item.content"></div>
                <div class="desc-button">查看详情</div>
              </div>
            </transition>
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

<script src="./CustomerCase.js"></script>
<style lang="stylus" scoped src="./CustomerCase.css"></style>
