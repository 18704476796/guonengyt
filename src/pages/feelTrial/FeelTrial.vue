<!-- 免费体验 -->
<template>
  <div>
    <page-header></page-header>
    <div class="con-wapper">
      <div class="titlePosition">
        <div class="title">免费体验 / Free Medical Examination</div>
        <div class="position">
          <span>位置：</span>
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>免费体验</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </div>
      <div class="changeCon">
        <!-- 选择行业系统,免费体验第一步 -->
        <div class="freeIndex" v-show="step.stepOne">
          <div class="change-title">选择行业系统</div>
          <ul class="industries">
            <li
              v-for="(item, index) of industriesData"
              :key='index'
              @click="industries(item.id)">
              <div class="normal">
                <img :src="item.normalSrcImg" />
                <div class="item-title">{{item.title}}</div>
              </div>
              <div class="isHoverClick" v-show = "item.isHoverClick">
                <img :src = "item.clickHoverSrcImg" />
                <div class="item-title">{{item.title}}</div>
              </div>
            </li>
          </ul>
          <div class="button">
            <div class="pre-next" @click="industriesNext()">下一步</div>
          </div>
        </div>
        <!-- 选择系统版本 -->
        <system-edition v-show="step.stepTwo" :step='step' :industrySystem='industrySystem'></system-edition>
        <!-- 选择接入设备 -->
        <access-device v-show="step.stepThree" :step='step'></access-device>
        <!-- 填写联系方式 -->
        <contact-way v-show="step.stepFour" :step='step'></contact-way>
      </div>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script src="./FeelTrial.js"></script>
<style lang="stylus" scoped src="./FeelTrial.css"></style>
