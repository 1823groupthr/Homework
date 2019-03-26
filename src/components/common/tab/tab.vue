<template>
     <div class='tabs'>
        <div class='my-tab'>
         <router-link tag="div" to="/workpage"  active-class='sel'>
            作业
        </router-link>
         <router-link tag="div" to="/grouppage"  active-class='sel'>
           群组
        </router-link>
        <router-link tag="div" to="/homepage"  active-class='sel'>
            主页
        </router-link>
         <router-link tag="div" to="/publishpage"  active-class='sel'>
             发布
        </router-link>
         <router-link tag="div" to="/mypage"  active-class='sel'>
             我的
        </router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
<style lang="less" scoped>
@import '~common/style/index.less';
.tabs{
    width:100%;
    .h(60);
    position: fixed;
    .bottom(0);
    background: antiquewhite;
    .my-tab{
      display: flex;
      justify-content: space-around;
     .l_h(60);
     font-size: @fontSize-m
    }
    

}
</style>
