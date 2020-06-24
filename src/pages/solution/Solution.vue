<!-- 解决方案 -->
<template>
  <div>
    <page-header></page-header>
    <div class="centerContent" @getInfo='getInfo' @getInfo_current='getInfo_current'>
      <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
        <el-tab-pane label="企业能源管理解决方案" name="1">
          <business :newsList='newsList' :totalRows='totalRows' :pageSize='pageSize' :currentPage='currentPage'></business>
        </el-tab-pane>
        <el-tab-pane label="高校能源管理解决方案" name="2">
          <school :newsList='newsList' :totalRows='totalRows' :pageSize='pageSize' :currentPage='currentPage'></school>
        </el-tab-pane>
        <el-tab-pane label="医院能源管理解决方案" name="3">
          <hospital :newsList='newsList' :totalRows='totalRows' :pageSize='pageSize' :currentPage='currentPage'></hospital>
        </el-tab-pane>
        <el-tab-pane label="电力需求侧解决方案" name="4">
          <electric-power :newsList='newsList' :totalRows='totalRows' :pageSize='pageSize' :currentPage='currentPage'></electric-power>
        </el-tab-pane>
      </el-tabs>
    </div>
    <page-footer></page-footer>
  </div>
</template>

<script src="./Solution.js"></script>
<style lang="stylus" scoped src="./Solution.css"></style>
