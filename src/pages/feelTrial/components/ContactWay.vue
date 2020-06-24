<!-- 填写联系方式 -->
<template>
  <div class="contact">
    <div class="change-title">填写联系方式</div>
    <div class="information">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" :hide-required-asterisk='hide'>
        <el-form-item label="姓名" prop="contantName">
          <el-input v-model="ruleForm.contantName" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="firmName">
          <el-input v-model="ruleForm.firmName" placeholder="请输入公司名称"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="contact">
          <el-input v-model="ruleForm.contact" placeholder="请输入联系方式"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="邮箱">
          <el-input v-model="ruleForm.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="ruleForm.address" placeholder="请输入地址"></el-input>
        </el-form-item>
        <el-form-item label="备注" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc" placeholder="填写备注"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="button">
            <div class="pre-next" @click="informationPre()">上一步</div>
            <div class="pre-next" @click="submitForm('ruleForm')">提交</div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContactWay',
  props: {
    step: Object
  },
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
      hide: false,
      ruleForm: {
        contantName: '', // 姓名
        firmName: '', // 公司名称
        contact: '', // 联系方式
        address: '', // 地址
        email: '', // 邮箱
        desc: '' // 备注
      },
      rules: {
        contantName: [
          { required: true, message: '请输入姓名', trigger: 'blur' }
        ],
        firmName: [
          { required: true, message: '请输入公司名称', trigger: 'blur' }
        ],
        contact: [
          { required: true, message: '请输入联系方式', trigger: 'blur' },
          {validator: checkPhone, message: '请输入正确的联系方式', trigger: 'blur'}
        ],
        address: [
          { required: true, message: '请输入地址', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) { // 提交
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.requestInfo()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    informationPre () { // 返回上一步
      this.step.stepFour = false
      this.step.stepThree = true
    },
    requestInfo () { // 请求提交接口
      let equipment = this.$store.state.equipment
      let equipmentJson = JSON.stringify(equipment)
      axios({
        method: 'post',
        url: '/api/user/saveSysUser.htm',
        data: {
          roleId: 2, // 角色id
          realName: this.ruleForm.contantName, // 姓名
          phoneNum: this.ruleForm.contact, // 电话
          email: this.ruleForm.email, // 邮箱
          unitName: this.ruleForm.firmName, // 公司名称
          contactAddress: this.ruleForm.address, // 地址
          about: this.ruleForm.desc, // 备注
          edition: this.$store.state.edition, // 版本号
          industrySystem: this.$store.state.industrySystem, // 行业系统
          equipment: equipmentJson // 问答题
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
        } else if (res.status === '1008') {
          console.log('提交异常')
        }
      }).catch(function (error) {
        console.error(error)
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
.contact
  .change-title
    margin 50px 0
    text-align center
    font-size 16px
  .information
    width 1000px
    margin auto
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
