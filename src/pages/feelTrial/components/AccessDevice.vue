<!-- 选择接入设备 -->
<template>
  <div>
    <div class="change-title">选择接入设备</div>
    <!-- 选题 -->
    <div class="testpaper">
      <el-form ref="form" :model="form">
        <el-form-item v-for="(item, index) in problemViewList" :key="item.newsDataId">
          <div v-if="item.moreAndOne === 0">
            <div class="question">{{index+1}}、{{item.title}}：</div>
            <el-radio-group v-model="item.answerArr" @change="handleChange">
              <el-radio :label="i.answerName" v-for="i in item.answer" :key="i.answerId">{{i.answerName}}</el-radio>
            </el-radio-group>
          </div>
          <div v-if="item.moreAndOne === 1">
            <div class="question">{{index+1}}、{{item.title}}：</div>
            <el-checkbox-group v-model="item.answerArr" @change="handleChange">
              <el-checkbox
              v-for="data in item.answer"
              :label="data.answerName"
              :key="data.answerId"
              >{{data.answerName}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="button">
            <div class="pre-next" @click="testpaperPre()">上一步</div>
            <div class="pre-next" @click="submitForm('form')">下一步</div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AccessDevice',
  props: {
    step: Object
  },
  data () {
    return {
      editioninput: '', // 设备其他输入
      typeinput: '', // 能源类型其他输入
      problemViewList: [], // 问答
      checkedEquipments: [], // 随意修改后的checked项（即要传到后台的变更数据）
      checkEquip: [ // 模拟后台获取的数据（各el-checkbox-group默认checked项）
      ],
      checkList: [],
      form: {
        circuit: '', // 多种线路
        type: [], // 能源类型
        edition: [], // 设备
        number: [] // 数量
      }
    }
  },
  methods: {
    handleChange (e) {
      this.$store.dispatch('changeEquipment', this.problemViewList)
    },
    inintQuestion () {
      let _this = this
      axios({
        method: 'post',
        url: '/api/news/findNewsData.htm',
        data: {
          menuType: 16
        },
        withCredentials: true, // 默认的
        timeout: 8000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          console.log(res)
          _this.problemViewList = res.problemViewList
          console.log(_this.problemViewList)
          for (let i = 0; i < _this.problemViewList.length; i++) {
            _this.$set(_this.problemViewList[i], 'answerArr', [])
          }
        } else if (res.status === '1006') {
          console.log('必填参数为空')
        } else if (res.status === '1008') {
          console.log('提交异常')
        }
      }).catch(function (error) {
        console.error(error)
      })
    },
    submitForm (formName) { // 下一步
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.step.stepThree = false
          this.step.stepFour = true
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    testpaperPre () { // 上一步
      this.step.stepThree = false
      this.step.stepTwo = true
    }
  },
  mounted () {
    this.inintQuestion()
  },
  created () {
  }
}
</script>

<style lang="stylus" scoped>
  .testpaper>>>.el-input
    font-size 12px
  .testpaper>>>.el-input__inner
    height 25px
    line-height 25px
  .change-title
    margin 50px 0
    text-align center
    font-size 16px
  .testpaper
    .question
      background #164283
      box-shadow: 0 2px 12px 0 rgba(22, 66, 131, 0.8)
      color #fff
      padding 0 10px
      box-sizing border-box
      margin-bottom 10px
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
</style>
