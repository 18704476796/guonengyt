<!-- 系统版本 -->
<template>
  <div class="system">
    <div class="change-title">选择系统版本</div>
    <ul class="industries">
      <li
        :class="{btnActive:i === index}"
        v-for="(item, index) of searchDate"
        @click="systemClick(item.id, index)"
        :key='index'>
          {{item.title}}
      </li>
    </ul>
    <div class="editionDesc">
      <button type="button" @click="dialogTableVisible = true">版本介绍</button>
    </div>
    <div class="button">
      <div class="pre-next" @click="systemPre()">上一步</div>
      <div class="pre-next" @click="systemNext()">下一步</div>
    </div>
    <el-dialog title="版本介绍" :visible.sync="dialogTableVisible">
      <el-table
        :data="tableData"
         height="300"
        style="width: 100%">
        <el-table-column prop="serviceItem" label="服务内容" width="180">
        </el-table-column>
        <el-table-column prop="basic" label="基础版" width="110">
          <template slot-scope="scope">
            <span v-if="scope.row.basic == 'a'" class="el-icon-check"></span>
            <span v-if="scope.row.basic == 'b'" class="el-icon-close"></span>
            <span v-if="scope.row.basic !== 'a' && scope.row.basic !== 'b'">{{scope.row.basic}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="standard" label="标准版" width="110">
          <template slot-scope="scope">
            <span v-if="scope.row.standard == 'a'" class="el-icon-check"></span>
            <span v-if="scope.row.standard == 'b'" class="el-icon-close"></span>
            <span v-if="scope.row.standard !== 'a' && scope.row.standard !== 'b'">{{scope.row.standard}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="advanced" label="高级版" width="110">
          <template slot-scope="scope">
            <span v-if="scope.row.advanced == 'a'" class="el-icon-check"></span>
            <span v-if="scope.row.advanced == 'b'" class="el-icon-close"></span>
            <span v-if="scope.row.advanced !== 'a' && scope.row.advanced !== 'b'">{{scope.row.advanced}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="customization" label="定制版" width="110">
          <template slot-scope="scope">
            <span v-if="scope.row.customization == 'a'" class="el-icon-check"></span>
            <span v-if="scope.row.customization == 'b'" class="el-icon-close"></span>
            <span v-if="scope.row.customization !== 'a' && scope.row.customization !== 'b'">{{scope.row.customization}}</span>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'SystemEdition',
  props: {
    step: Object,
    industrySystem: Number
  },
  data () {
    return {
      i: null,
      edition: null, // 版本编号
      dialogTableVisible: false, // 弹框显示
      searchDate: [{
        id: 1,
        title: '基础版'
      },
      {
        id: 2,
        title: '标准版'
      },
      {
        id: 3,
        title: '高级版'
      },
      {
        id: 4,
        title: '定制版'
      }],
      tableData: [{
        id: 1,
        serviceItem: '数据采集',
        basic: 'a', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 2,
        serviceItem: '实时数据',
        basic: 'a', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 3,
        serviceItem: '历史数据',
        basic: 'a', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 4,
        serviceItem: '告警信息',
        basic: 'a', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 5,
        serviceItem: '操作日志',
        basic: 'a', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 6,
        serviceItem: '远程控阀',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 7,
        serviceItem: '数据统计',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 8,
        serviceItem: '数据分析',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 9,
        serviceItem: '能耗指标',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 10,
        serviceItem: '分类分项统计',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 11,
        serviceItem: 'KPI',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 12,
        serviceItem: '报表管理',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 13,
        serviceItem: '消息订阅',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 14,
        serviceItem: '模块定制开发',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'b', // 标准版
        advanced: 'b', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 15,
        serviceItem: '自定义报表',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'b', // 标准版
        advanced: 'b', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 16,
        serviceItem: 'API开放',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'b', // 标准版
        advanced: 'b', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 17,
        serviceItem: '第三方平台接入',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'b', // 标准版
        advanced: 'b', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 18,
        serviceItem: 'KPI',
        basic: '1', // 基础版a代表对号，b代表x
        standard: '5', // 标准版
        advanced: '10', // 高级版
        customization: 'more' // 定制版
      },
      {
        id: 19,
        serviceItem: '现场安装',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 20,
        serviceItem: '现场安装指导',
        basic: 'b', // 基础版a代表对号，b代表x
        standard: 'a', // 标准版
        advanced: 'a', // 高级版
        customization: 'a' // 定制版
      },
      {
        id: 20,
        serviceItem: '其他服务',
        basic: '详情请咨询', // 基础版a代表对号，b代表x
        standard: '400-660-6579', // 标准版
        advanced: '', // 高级版
        customization: '' // 定制版
      }]
    }
  },
  methods: {
    systemPre () { // 返回上一步
      this.step.stepOne = true
      this.step.stepTwo = false
    },
    systemNext () { // 下一步
      if (this.edition === null) {
        alert('请选择版本')
      } else {
        this.step.stepTwo = false
        this.step.stepThree = true
      }
    },
    systemClick (id, index) { // 版本选择
      this.edition = id
      this.$store.dispatch('changeEdition', id)
      this.i = index
    }
  }
}
</script>

<style lang="stylus" scoped>
.change-title
  margin 50px 0
  text-align center
  font-size 16px
.industries
  display flex
  flex-flow: row wrap
  justify-content space-between
  .btnActive
    background #164283
    color #fff
  li
    border 2px solid rgb(22, 66, 131)
    width 540px
    height 240px
    margin-bottom 20px
    box-shadow: 0 2px 12px 0 rgba(22, 66, 131, 0.8)
    text-align center
    cursor: pointer
    line-height 240px
    color #164283
  li:hover
    background #164283
    color #fff
.button
  display flex
  justify-content space-around
  margin-bottom 20px
  .pre-next
    background url(../../../assets/images/button.png)
    background-repeat no-repeat
    background-size cover
    color #fff
    width 180px
    height 35px
    line-height 35px
    text-align center
    cursor pointer
.editionDesc
  display flex
  justify-content flex-end
  margin-bottom 20px
  button
    cursor pointer
    background #164283
    color #fff
    width 100px
    height 30px
    text-align center
    box-shadow: 0 2px 12px 0 rgba(22, 66, 131, 1)
</style>
