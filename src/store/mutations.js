export default {
  changeToken (state, token) { // token存储
    state.token = token
    try {
      localStorage.token = token
    } catch (e) {}
  },
  changeActiveName (state, val) { // 解决问题页面选项卡
    state.activeName = val
  },
  changePathDetail (state, val) { // 详情页面包屑导航
    state.pathDetail = val
  },
  changeNameDetail (state, val) { // 详情页导航名称
    state.nameDetail = val
  },
  changeIdDetail (state, val) { // 详情页id
    state.idDetail = val
  },
  changeIndustrySystem (state, val) { // 免费体验选择行业系统的编号
    state.industrySystem = val
  },
  changeEdition (state, val) { // 免费体验选择版本编号
    state.edition = val
  },
  changeEquipment (state, val) { // 免费体验问答题
    state.equipment = val
  }
}
