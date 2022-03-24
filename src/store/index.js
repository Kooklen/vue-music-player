import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  //歌曲生成周期
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],

  state: {
    //搜索关键字
    songkeyworks: "",
    //歌曲搜索总数
    songcount: "",
    // i登录状态
    islogin: 1,
    // 用户信息
    userinfo: [],
    useravatar: "",
    userlist: [],

    audioInfo: [
      {
        name: "Daisy",
        artist: "STEREO DIVE FOUNDATION",
        url: "https://sound-ks1.cdn.missevan.com/aod/202103/06/4e0afafd500b0a063b2f0f25ff56c0106f185049.m4a",
        cover: "https://p1.music.126.net/YF4U3T8KAdSp7LiJ0s_7Sg==/109951163914073982.jpg",
        lrc: "https://cdn.moefe.org/music/lrc/kyoukiranbu.lrc",
      }],
  },
  //mutations用于修改state
  //Async 异步
  mutations: {
    addsong(state, adds) {
      state.audioInfo.push({
        name: adds.amount1,
        artist: adds.amount2,
        url: adds.amount3,
        cover: adds.amount4,
        lrc: adds.amount5,
      })
    },
    // 关键字
    stokeywork(state, stokw) {
      state.songkeyworks = stokw
    },
    // 搜索总数
    searchcount(state, count) {
      state.songcount = count
    },
    // 登录
    adduserinfo(state, userdata) {
      state.userinfo = userdata
    },
    //注销
    userlogout(state) {
      state.userinfo = []
      state.userlist = []
      state.useravatar = ""

    },
    adduseravatar(state, ava) {
      state.useravatar = ava
    },
    adduserlist(state, addlist) {
      state.userlist = addlist
    },

    // 登录状态
    setislogin(state, sta) {
      state.islogin = sta
    }
  },
  //actions专门用来做异步处理
  actions: {

  },

})