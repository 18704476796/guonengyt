let defaultToken = ''
try {
  if (localStorage.token) {
    defaultToken = localStorage.token // 用户token
  }
} catch (e) {}

export default {
  // localStorage
  token: defaultToken, // 用户token，字符串类型 localStorage
  activeName: 'first', // 解决方案中tab卡选中的name
  pathDetail: '', // 详情页面包屑导航,
  nameDetail: '', // 详情页导航名称
  idDetail: null, // 详情id
  industrySystem: null, // 免费体验选择行业系统的编号
  edition: null, // 免费体验选择版本编号,
  equipment: '' // 免费体验问答题
}
