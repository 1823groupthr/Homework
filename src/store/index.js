  import Vue from 'vue'
  import Vuex from 'vuex'
  Vue.use(Vuex)
 import bang from './bang'
  const store=new Vuex.Store({
     modules:{
         bang
     }
  })
  export default store