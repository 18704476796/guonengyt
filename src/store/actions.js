export default {
  changeToken (ctx, token) { // 存储用户token
    ctx.commit('changeToken', token)
  },
  changeActiveName (ctx, val) { // 解决问题选项卡
    ctx.commit('changeActiveName', val)
  },
  changePathDetail (ctx, val) { // 详情页面包屑导航
    ctx.commit('changePathDetail', val)
  },
  changeNameDetail (ctx, val) { // 详情页导航名称
    ctx.commit('changeNameDetail', val)
  },
  changeIdDetail (ctx, val) { // 详情页id
    ctx.commit('changeIdDetail', val)
  },
  changeIndustrySystem (ctx, val) { // 免费体验选择行业系统的编号
    ctx.commit('changeIndustrySystem', val)
  },
  changeEdition (ctx, val) { // 免费体验选择版本编号
    ctx.commit('changeEdition', val)
  },
  changeEquipment (ctx, val) { // 免费体验问答题
    ctx.commit('changeEquipment', val)
  }
}
