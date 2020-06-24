<!-- 第七屏，合作伙伴 -->
<template>
  <div>
    <div class="wapper">
      <div class="title animated slideOutLeft">合作伙伴&nbsp;/&nbsp;Cooperative&nbsp;Partner</div>
      <ul class="con-logo animated slideOutRight">
        <li class="logoImg"
          v-for="(item, index) of cooperativePartnerList"
          :key='index'
        >
          <img :src="urlPublic + item.pictureUrl"/>
        </li>
      </ul>
      <div class="desc-button animated slideOutUp">
        <router-link to='/partner'>查看更多</router-link>
      </div>
    </div>
    <com-footer class="animated slideOutUp"></com-footer>
  </div>
</template>

<script>
import ComFooter from '@/commen/Com_Footer.vue'
export default {
  name: 'SectionSeven',
  components: {
    ComFooter
  },
  props: {
    options: Object,
    cooperativePartnerList: Array,
    urlPublic: String
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
  .wapper
    padding 60px 200px
    color #fff
    .title
      font-size 20px
      text-align center
    .con-logo
      display flex
      flex-flow row wrap
      margin-top 120px
      .logoImg
        width 20%
        border 1px solid #fff
        box-sizing border-box
        padding 10px
        margin-right -1px
        margin-top -1px
        cursor pointer
        img
          margin auto
          width 100%
          height 100%
    .desc-button
      color #164283
      border 1px solid #164283
      width 80px
      text-align center
      line-height 26px
      float right
      margin-top 20px
      cursor pointer
      a
        color #164283

</style>
