<template>
  <div id="app">
      <tab></tab>
     <router-view></router-view>
  </div>
</template>

<script>
import Tab from 'components/common/tab/tab';
export default {
  name: 'App',
   components:{
      Tab,
         
  },
}
</script>

<style lang="less" scoped>
@import '~common/style/index.less';
</style>
