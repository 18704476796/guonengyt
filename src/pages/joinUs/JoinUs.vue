<!-- 加入我们 -->
<template>
  <div>
    <page-header></page-header>
    <div class="con-wapper">
      <div class="titlePosition">
        <div class="title">加入我们 / Join Us</div>
        <div class="position">
          <span>位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>加入我们</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="post" v-for="(item, index) of postNewsDatasList" :key='index'>
        <div class="post-title">{{item.title}}</div>
        <div class="post-introduce">
          <ul>
            <li class="post-request">岗位职责：</li>
            <li class="request-desc" v-html="item.jobDuty">
            </li>
          </ul>
          <ul>
            <li class="post-request">岗位要求：</li>
            <li class="request-desc" v-html="item.jobRequirements">
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 公司介绍 -->
    <div class="company">
      <div class="com-title">公司简介</div>
      <img :src="imgUrl + environmentList.pictureUrl" class="com-img">
      <div class="com-introduce" v-html="environmentList.content">
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script src="./JoinUs.js"></script>
<style lang="stylus" scoped src='./JoinUs.css'></style>
