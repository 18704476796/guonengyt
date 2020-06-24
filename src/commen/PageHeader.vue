<!-- 子页导航 -->
<template>
  <div class="pagesHeader">
    <com-header></com-header>
  </div>
</template>

<script>
import ComHeader from '@/commen/Com_Header.vue'
export default {
  name: 'PageHeader',
  components: {
    ComHeader
  }
}
</script>

<style lang="stylus" scoped>
.pagesHeader
  background url(../assets/images/navBack.png)
  background-size cover
  background-repeat no-repeat
  height 400px
  margin-bottom 60px
</style>
