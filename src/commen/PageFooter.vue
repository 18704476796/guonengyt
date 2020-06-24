<!-- 子页页脚 -->
<template>
  <div class="pageFooter">
    <div class="con-center">
      <ul class="info">
        <li class="info-left">
          <div class="title">
            联系我们
          </div>
          <ul class="left-bottom">
            <li>{{infoList.name}}</li>
            <li>地址：{{infoList.webId}}</li>
            <li>电话：{{infoList.tel}}</li>
            <li>邮编：{{infoList.icpNumb}}</li>
          </ul>
        </li>
        <li class="info-right">
          <div class="title">
            加入我们
          </div>
          <el-form
            ref="form"
            :model="form"
            :rules="rules"
            label-width="60px"
            size="mini"
            :hide-required-asterisk='asterisk'
            >
            <ul class="right-top">
              <li>
                <el-form-item label="姓名:" prop="name">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="电话:" prop="phone">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
              </li>
              <li>
                <el-form-item label="邮箱:" prop="email">
                  <el-input v-model="form.email"></el-input>
                </el-form-item>
              </li>
            </ul>
            <div class="right-bottom">
              <el-form-item label="内容:">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
            </div>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">提交</el-button>
            </el-form-item>
          </el-form>
        </li>
      </ul>
    </div>
    <div class="footer">
      <div>{{infoList.recordNumber}}</div>
      <div>技术支持：{{infoList.publicNetworkSecurity}}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'PageFooter',
  data () {
    var checkPhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        console.log(reg.test(value))
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }
    return {
      infoList: {}, // 公司信息
      asterisk: true,
      form: { // 加入我们用户信息
        name: '',
        phone: '',
        email: '',
        desc: ''
      },
      rules: { // 表单验证.
        name: [{required: true, message: '请输入姓名', trigger: 'blur'}], // 名称
        phone: [{validator: checkPhone, trigger: 'blur'}], // 电话校验
        email: [
          {required: true, message: '请输入邮箱地址', trigger: 'blur'},
          {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
        ]
      }
    }
  },
  mounted () {
    this.inint()
  },
  methods: {
    onSubmit () { // 编辑解决问题
      this.$refs.form.validate((valid) => {
        if (valid) { // 表单验证通过
          this.submitInfo()
        } else {
          return false // 表单验证不通过
        }
      })
    },
    inint () { // 初始化数据
      let _this = this
      axios({
        method: 'post',
        url: '/api/company/aboutusUs.htm',
        data: {
        },
        withCredentials: true, // 默认的
        timeout: 8000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          _this.infoList = res.company[0]
          console.log(res)
        } else if (res.status === '1006') {
          console.log('必填参数为空')
        } else if (res.status === '1008') {
          console.log('提交异常')
        }
      }).catch(function (error) {
        console.error(error)
      })
    },
    submitInfo () { // 初始化数据
      axios({
        method: 'post',
        url: '/api/user/saveJoinUs.htm',
        data: {
          roleId: 3,
          realName: this.form.name,
          phoneNum: this.form.phone,
          email: this.form.email,
          about: this.form.desc
        },
        withCredentials: true, // 默认的
        timeout: 8000, // 请求超时时间
        responseType: 'json'
      }).then(function (respones) {
        let res = respones.data
        if (res.status === '1000') {
          alert('提交成功！')
          console.log(res)
        } else if (res.status === '1006') {
          console.log('必填参数为空')
        }
      }).catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.pageFooter>>>.el-button--primary
  background #164283
  border-color #164283
  margin-top 20px
  float right
.pageFooter>>>.el-form-item__label
  color #FFFFFF
  font-size 12px
.pageFooter>>>.el-input__inner
  background #000
  color #FFFFFF
  border none
  margin-top -4px
.pageFooter>>>.el-textarea__inner
  background #000
  color #FFFFFF
  border none
  resize: inherit
.pageFooter
  background #000000
  color #fff
  .con-center
    width 1200px
    padding 30px 0
    margin auto
    .info
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
        width 800px
        .title
          margin-bottom 40px
          font-size 16px
        .right-top
          display flex
          justify-content space-between
          li
            border 1px solid #FFFFFF
            width 240px
            height 28px
            line-height 28px
        .right-bottom
          border 1px solid #FFFFFF
          height 70px
          margin-top 15px
  .footer
    color #FFFFFF
    line-height 30px
    text-align center
    width 100%
    padding 20px
    border-top 1px solid #FFFFFF
    font-size 12px
</style>
