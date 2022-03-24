<template lang="">
    <div class="main-container">
        <div class="main-header">
            <a class="menu-link-main" href="#">每日推荐</a>
            <div class="header-menu">
                <router-link to="/" active-class="is-active">专辑</router-link>
                <router-link to="/Leaderboard" active-class="is-active">排行榜</router-link>
                <router-link to="/singerlist" active-class="is-active">歌手</router-link>
                <router-link to="/dayrec" active-class="is-active">每日推荐</router-link>
            </div>
        </div>
        <div class="content-wrapper">
            <div class="content-wrapper-header">
                <div class="content-wrapper-header-padding">
                    <div class="content-wrapper-context">
                        <h3 class="img-content">
                            境界的彼方
                        </h3>
                        <div class="content-text">
                            《境界的彼方》是由鸟居奈古梦著作、鸭居知世插画的轻小说，于2012年6月9日，由KAESUMA文库文库（京都动画）发行。小说曾获得第2回京都动画大赏（小说部门）奖励赏。</div>
                        <button class="content-button">
                            <router-link class="content-button" :to="{ path:'/search',query:{keyworks:'境界的彼方'}}">试听专辑
                            </router-link>
                        </button>
                    </div>
                </div>
                <img class="content-wrapper-img" src="../../static/images/栗山未来.png" alt="">
            </div>
            <div style="display: flex;align-items: center;justify-content: center;" v-if="islogin==1">
                <h1>请先登录登陆</h1>
            </div>
            <div class="content-section" v-if="islogin==0">
                <div class="content-section-title">每日歌曲</div>
                <ul class="search_ul">
                    <li class="adobe-product" v-for="(item,index) in newmusic" @dblclick="runapi(item.id)">
                        <div class="products music-name ">{{item.name}}</div>
                        <span class="status" @click="flyawayar(item.ar[0].id)" style="cursor: pointer;">
                            <span class="status-circle green"></span> {{item.ar[0].name}}</span>
                        <!-- 歌曲时间 -->
                        <span class="status music-dt">{{item.dt}}</span>
                        <span class="status music-album">{{item.al.name}}</span>
                        <div class="button-wrapper">
                            <div class="clicksvg" @click="runapi(item.id)">
                                <svg t="1639295337775" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="2313" width="40" height="40">
                                    <path
                                        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0z m0 981.333333C253.866667 981.333333 42.666667 770.133333 42.666667 512S253.866667 42.666667 512 42.666667s469.333333 211.2 469.333333 469.333333-211.2 469.333333-469.333333 469.333333z"
                                        p-id="2314" fill="#e6e6e6"></path>
                                    <path
                                        d="M672 441.6l-170.666667-113.066667c-57.6-38.4-106.666667-12.8-106.666666 57.6v256c0 70.4 46.933333 96 106.666666 57.6l170.666667-113.066666c57.6-42.666667 57.6-106.666667 0-145.066667z"
                                        p-id="2315" fill="#e6e6e6"></path>
                                </svg>
                            </div>
                            <div class="clicksvg" v-if="item.mv!=0" @click="playMV(item.mv,item.id)">
                                <svg t="1639296179055" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" p-id="3387" width="40" height="40">
                                    <path
                                        d="M0 76.8h158.72v125.952H0V76.8z m209.92 0v870.4h606.208v-870.4H209.92z m147.456 193.536c5.12 0 10.24 1.024 14.336 4.096l153.6 108.544 153.6 108.544c12.288 8.192 15.36 26.624 8.192 39.936-2.048 4.096-5.12 7.168-8.192 9.216l-153.6 108.544-153.6 108.544c-12.288 8.192-27.648 4.096-34.816-9.216-3.072-5.12-4.096-10.24-4.096-15.36V299.008c0-15.36 10.24-27.648 24.576-28.672zM868.352 76.8H1024v125.952H868.352V76.8zM0 260.096h158.72V389.12H0V260.096z m868.352 0H1024V389.12H868.352V260.096zM0 447.488h158.72v129.024H0V447.488z m868.352 0H1024v129.024H868.352V447.488zM0 633.856h158.72v129.024H0V633.856z m868.352 0H1024v129.024H868.352V633.856zM0 820.224h158.72v125.952H0V820.224z m868.352 0H1024v125.952H868.352V820.224z"
                                        fill="#e6e6e6" p-id="3388"></path>
                                </svg>
                            </div>
                            <div class="clicksvg" @click="DownloadSong(item.id)">
                                <a :href="DownloadSongUrl" target="_blank" download>
                                    <svg t="1639296939929" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                        xmlns="http://www.w3.org/2000/svg" p-id="4288" width="40" height="40">
                                        <path
                                            d="M918.3 468.6c-18.8 0-34 15.2-34 34v309.6c0 6.6-14.4 18.7-38 18.7H190.2c-23.5 0-38-12.1-38-18.7V486c0-18.8-15.2-34-34-34s-34 15.2-34 34v326.3c0 24.8 12.8 48.4 35 64.7 19.4 14.2 44.6 22 71 22h656.1c26.4 0 51.6-7.8 71-22 22.2-16.3 35-39.9 35-64.7V502.6c0-18.7-15.3-34-34-34z"
                                            fill="#e6e6e6" p-id="4289"></path>
                                        <path
                                            d="M450.4 679.4c17.8 18 41.5 28 66.8 28.1h0.5c25.1 0 48.8-9.7 66.6-27.4l154.4-152.8c13.3-13.2 13.5-34.7 0.2-48.1-13.2-13.3-34.7-13.5-48.1-0.2L551.3 617.1c0.6-2.6 1-5.3 1-8.1V149.1c0-18.8-15.2-34-34-34s-34 15.2-34 34V609c0 3.2 0.5 6.3 1.3 9.3L345.9 477.1c-13.2-13.3-34.7-13.5-48.1-0.2-13.3 13.2-13.5 34.7-0.2 48.1l152.8 154.4z"
                                            fill="#e6e6e6" p-id="4290"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="content-section" v-if="islogin==0">
                <div class="content-section-title">每日歌单</div>
                <div class="apps-card">
                    <div class="block" v-for="item in indexsonglist" @click="openplaylist(item.id)">
                        <el-image class="songlistimg app-card" :src="item.picUrl"></el-image>
                        <h5 class="songlisttext">{{item.name}}</h5>
                    </div>
                </div>
                <!-- //分页 -->
                <div class="block">
                    <el-pagination v-if="count!=0" @current-change="handleCurrentChange"
                        :current-page.sync="currentPage" :page-size="10" layout="prev, pager, next, jumper"
                        :total="count" :background="true">
                    </el-pagination>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
    import { playMusicApi, getLyricApi, getdetailApi, getdaylist, getsongday, getstatus } from '../request/api.js'
    import { mapState } from "vuex";

    export default {
        data() {
            return {
                //歌单数据
                indexsonglist: [],
                //初始页
                currentPage: 1,
                count: "",
                //新歌曲推荐
                newmusic: [],
                // 歌曲数组
                musicList: [],
                // 歌曲地址
                musicUrl: "",
                DownloadSongUrl: "",
                activeName: 'second',
                //音乐地址
                songurladd: null,
                //歌词
                songlrc: "",

            }
        },
        created() {
            this.status()
            this.showsongList();
            this.newmusicc();
        },
        computed: {
            ...mapState(["islogin"]),
        },
        methods: {
            //分页
            handleCurrentChange: function (currentPage) {
                // console.log(`当前页: ${currentPage}`);
                this.currentPage = currentPage;
                // console.log(this.currentPage)
                this.showsongList(currentPage)
            },
            open4(messges) {
                this.$notify.error({
                    title: '错误',
                    message: `《${messges}》  该歌曲无版权，暂无法播放,或者重新点击播放！`
                });
            },
            //每日歌单
            showsongList(page = 1) {
                getdaylist({
                    limit: 15,
                    offset: (page - 1) * 15
                }).then(res => {
                    this.indexsonglist = res.data.recommend;
                    // console.log(this.indexsonglist);
                    this.count = res.data.total;

                })
            },
            //每日歌曲
            newmusicc() {
                getsongday({
                }).then(res => {
                    this.newmusic = res.data.data.dailySongs;
                    // console.log(this.newmusic);
                    //计算歌曲时间
                    for (let i = 0; i < this.newmusic.length; i++) {
                        let min = parseInt(this.newmusic[i].dt / 1000 / 60)
                        let sec = parseInt((this.newmusic[i].dt / 1000) % 60)
                        if (min < 10) {
                            min = '0' + min
                        }
                        if (sec < 10) {
                            sec = '0' + sec
                        }
                        this.newmusic[i].dt = min + ":" + sec;
                        // console.log(this.newmusic[i].song.duration)
                    }
                })
            },
            // playMusic(id) {
            //     playMusicApi({
            //         id: id
            //     }).then(res => {
            //         // console.log(id);
            //         this.songurladd = res.data.data[0].url;
            //     }),
            //         //获取歌词
            //         getLyricApi({
            //             id: id
            //         }).then(res => {
            //             this.songlrc = res.data.lrc.lyric;
            //         }),
            //         // 获取歌曲信息
            //         getdetailApi({
            //             id: id
            //         }).then(res => {
            //             if (this.songurladd != null) {
            //                 this.$store.commit("addsong", {
            //                     amount1: res.data.songs[0].name,
            //                     amount2: res.data.songs[0].ar[0].name,
            //                     amount3: this.songurladd,
            //                     amount4: res.data.songs[0].al.picUrl,
            //                     amount5: this.songlrc,
            //                 });
            //                 this.songurladd = null,
            //                 this.songlrc = ""
            //             } else {
            //                 this.open4(res.data.songs[0].name);
            //             }
            //         });
            // },

            //歌曲不同步
            //获取播放音乐链接
            playMusic(id) {
                return playMusicApi({
                    id
                })
            },
            getlr(id) {
                //获取歌词
                return getLyricApi({
                    id
                })
            },
            getdta(id) {
                // 获取歌曲信息
                return getdetailApi({
                    id
                })
            },


            runapi(id) {
                //歌曲不同步
                var _this = this;
                this.$axios.all([_this.playMusic(id), _this.getlr(id), _this.getdta(id)]).then(_this.$axios.spread(function (res1, res2, res3) {
                    let songurl = res1.data.data[0].url;
                    let songname = res3.data.songs[0].name
                    let songarname = res3.data.songs[0].ar[0].name
                    let songpicurl = res3.data.songs[0].al.picUrl
                    let musiclrc = res2.data.lrc.lyric;
                    // console.log("第一个" + res1);
                    // console.log("第二个" + res2);
                    // console.log("第三个" + res3);

                    if (songurl != null) {
                        _this.$store.commit("addsong", {
                            amount1: songname,
                            amount2: songarname,
                            amount3: songurl,
                            amount4: songpicurl,
                            amount5: musiclrc,
                        });
                        musiclrc = "",
                            songurl = null
                    } else {
                        _this.open4(songname);
                    }
                }))
            },

            DownloadSong(id) {
                playMusicApi({
                    id: id
                }).then(res => {
                    if (res.data.data[0].url != null) {
                        this.DownloadSongUrl = res.data.data[0].url;
                    } else {
                        alert("无版权，无法下载");
                    }
                });
            },
            playMV(mvid, page = 1) {
                //  this.$router.push({ path:'/search',query:{keyworks:this.searchvalue}})
                this.$router.push({ path: '/playmv', query: { mvid: mvid } })
            },
            openplaylist(playlistid) {
                this.$router.push({ path: '/Playlist', query: { playlistid: playlistid } })
            },
            flyawayar(id) {
                this.$router.push({ path: '/album', query: { sgingid: id } })
            },
            status() {
                getstatus().then(res => {
                    let fx = res.data.data.account
                    if (fx == null) {
                        this.$store.commit("setislogin", 1)
                    } else {
                        this.$store.commit("setislogin", 0)
                    }
                })
            }
        },

    };
</script>
<style lang="">

</style>