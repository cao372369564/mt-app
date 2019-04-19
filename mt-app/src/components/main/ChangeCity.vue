<template>
    <div class="change-city">
        
        <div class="province">
            <span>按省份选择：</span>
            <selection :showProvince="chooseProvince" 
                        @change_active='changeProvinceActive'
                        :provinceList='provinceList'
                        @changeInner='changeInner'
                        :province = 'province'
                        :active='province'
                        />
            <selection :showProvince='chooseCity' 
                        @change_active='changeCityActive'
                        :provinceList='cityList'
                        @changeInner='changeInner1'
                        :province = 'province1'
                        :active='province1'
                         />
            <span>直接搜索：</span>
 
            <el-autocomplete
                v-model="state"
                placeholder="请输入城市中文或拼音"
                :fetch-suggestions= 'remoteSearch'
            >
            </el-autocomplete>

        </div>
        <div class="hot-city">
            <h2>热门城市：</h2>
            <i v-for='item in hotCityList' :key='item'>{{item}}</i>
        </div>
        <div class="recent-visit">
            <h2>最近访问：</h2>
            <i v-for='item in hotCityList' :key='item'>{{item}}</i>
        </div>
        <div class="lookfor-city">
            <h2>按拼音首字母选择：</h2>
            <i v-for='item in letterList' :key='item'>
                <a :href=" '#' + item.toLowerCase() ">{{item}}</a>
            </i>
        </div>
        <div class="sort">
            <h2 id='a'>A</h2>
            <i>鞍山</i>
            <i>安庆</i>
            <i>安阳</i>
            <i>安顺</i>
            <i>安康</i>
            <i>安丘</i>
        </div>
        <div class="sort">
            <h2>B</h2>
            <i>鞍山</i>
            <i>安庆</i>
            <i>安阳</i>
            <i>安顺</i>
            <i>安康</i>
            <i>安丘</i>
        </div>
        <div class="sort">
            <h2>C</h2>
            <i>鞍山</i>
            <i>安庆</i>
            <i>安阳</i>
            <i>安顺</i>
            <i>安康</i>
            <i>安丘</i>
        </div>
        <div class="sort">
            <h2 id='d'>D</h2>
            <i>鞍山</i>
            <i>安庆</i>
            <i>安阳</i>
            <i>安顺</i>
            <i>安康</i>
            <i>安丘</i>
        </div>
        
    </div>
</template>

<script>
import Selection from '@/components/main/Select.vue'
export default {
    components:{
        Selection,
    },
    data(){
        return {
            letterList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            state: '',
            querySearch: ['郑州','焦作','新乡','开封','洛阳','平顶山','安阳'],
            chooseProvince: false,
            chooseCity: false,
            province: '省份',
            province1: '城市',
            hotCityList: ['郑州','焦作','新乡','开封','洛阳','平顶山','安阳','鹤壁','濮阳'],
            provinceList: [
                {name: '省份',
                provinceArr:[
                        ['安徽','澳门','湖南','河北','香港','辽宁','四川','宁夏','吉林','福建','湖北','广东'],
                        ['重庆','山西','江西','黑龙江','青海','河南','台湾','内蒙古','西藏','广西']
                    ]
                }
            ],
            cityList: [
                {name: '城市',
                provinceArr:[
                        ['郑州','焦作','新乡','开封','洛阳','平顶山','安阳','鹤壁','濮阳','许昌','漯河','三门峡'],
                        ['南阳','商丘','信阳','周口','驻马店','济源','伊川','偃师','登封','巩义','新郑','新密'],
                    ]
                }
            ]
                
                
        }
    },
    computed : {
        
    },
    
    methods: {
        changeProvinceActive(flag){
            this.chooseProvince = flag;
            if(flag){
                this.chooseCity = false;
            }
        },
        changeCityActive(flag){
            this.chooseCity = flag;
            if(flag){
                this.chooseProvince = false;
            }
        },
        changeInner(inner){
            this.province = inner
            this.chooseProvince = false;
            console.log(this.chooseProvince)
        },
        changeInner1(inner){
            this.province1 = inner;
            this.chooseCity = false;
        },


        remoteSearch(e){
            console.log(e)
            //请求后端接口
        },

        loadAll(){
            return ['北京','包头','保定','蚌埠','亳州','滨州','宝鸡','白城','霸州','巴彦淖尔','北海',
            '百色','巴中','毕节','保山','本溪','白银','白山','璧山','拜泉县','拜城县','宝应','北流','博爱','巴楚县',
            '宝丰','博兴','泌阳','彬县','巴彦县','博山','宾阳','泊头市','博罗县','博白县','北镇市','北安市','滨海',
            '北碚','博尔塔拉','巴州']
        },
        
        
    }
    
}
</script>

<style lang="scss">
@import '@/assets/components/main/changecity.scss';
</style>
