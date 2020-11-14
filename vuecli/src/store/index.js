import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    count2: 1,
    list: []
  },
  mutations: {
    add(state,num){
      state.count +=num
    },
    //修改state中list
    addList(state,arr){
      state.list=arr

    }
  },
  getters:{
    sum(state){
      return state.count + state.count2
    }
  },
  actions: {
    getMovieList({ commit }){
      console.log("调用了")
      axios.get('https://bird.ioliu.cn/v1?url=https://frodo.douban.com/api/v2/subject_collection/movie_showing/items?start=0&count=10&apiKey=054022eaeae0b00e0fc068c0c0a2102a')
      // 请求的地址
      .then((res)=>{
        console.log(res.data.subject_collection_items);
        commit('addList',res.data.subject_collection_items)
      }).catch((error)=>{
        console.log(error)
      })
    }
  },
  modules: {
  }
})
