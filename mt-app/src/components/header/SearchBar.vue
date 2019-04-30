<template>
    <div class="search-bar">
        <el-row>
            <el-col :span='5'>
                <a href="#">
                    <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/logo.png" alt="美团">
                </a>
            </el-col>
            <el-col :span='19'>
                <div class="search">
                    <el-input v-model="input" placeholder="搜索商家或地点" @focus='focus' @blur='blur' @input='oninput'></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                </div>
                <div class="suggest" v-show='isFocus'>
                    <div class="hot-search" v-show='noValue' >热门搜索</div>
                    <ul v-show='noValue'>
                        <li v-for='(item,index) in hotWordsList' :key='index'>
                            <router-link v-if='index <= 4'
                                :to="{name:'search',params:{name:item}}"
                                @click.native='submitInput(item)'
                            >{{item}}</router-link>
                        </li>
                    </ul>
                    <dl v-show='hasValue'>
                        <dd v-for='(item,index) in searchList' :key='index'>
                            <router-link :to="{name:'search',params:{name:item}}"
                                @click.native='submitInput(item)'
                            >
                                {{item}}
                            </router-link>
                        </dd>
                    </dl>
                </div>
                <div class="hotword">
                    <dl v-for='(item,index) in hotPlaceList' :key='index'>
                        <dd> <router-link :to="{name:'search',params:{name:item}}">{{item}}</router-link> </dd>
                    </dl>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import api from '@/api/index.js';
export default {
    data(){
        return {
            isFocus: false,
            input: '',
            hotPlaceList: [],
            hotWordsList: [],
            searchList: []
        }
    },
    created(){
        api.getHotList().then( (res)=>{
            
            this.hotPlaceList = res.data.data;
            this.hotWordsList = res.data.data;
        })

    },

    computed: {
        noValue : function (){
            return this.isFocus && !this.input;
        },
        hasValue : function (){
            return this.isFocus && this.input;
        }
    },
    methods:{
        focus (){
            this.isFocus = true;
        },
        blur(){
            setTimeout( ()=>{
                this.isFocus = false;
            },200 )
        },

        submitInput(item){
            this.input = item
            
        },
        oninput(item){
            var input = this.input;
            api.getSearchList().then( (res)=>{
                
                this.searchList = res.data.data.list.filter( (item,index)=>{
                    return item.indexOf(input) != -1;
                } )
            })

        }
    }
}
</script>

<style lang="scss">
@import '@/assets/components/header/searchbar.scss';

</style>



