<template>
    <div class="quality-life">
        <dl class='life-nav' @mouseover='over'>
            <dt>有格调</dt>
            <dd :class='{active : curType == "all"}' data-type='all'>全部</dd>
            <dd :class='{active : curType == "food"}' data-type='food'>约会聚餐</dd>
            <dd :class='{active : curType == "spa"}' data-type='spa'>丽人SPA</dd>
            <dd :class='{active : curType == "movie"}' data-type='movie'>电影演出</dd>
            <dd :class='{active : curType == "travel"}' data-type='travel'>品质出游</dd>
        </dl>
        <div class="life-area" style='height:560px;'>
            <a v-for='(items,index) in resultsObj[curType]' :key='items + index'>
                <el-card href="#">
                    <img :src="items.image" alt="image">
                    <div class="img_info">
                        <span class="title">{{items.title}}</span>
                        <span clss='sub_title' style='display:block;'>{{items.subTitle}}</span>
                        <ul class='tag-info' v-if='items.tagInfo'>
                            <li>新客超值优惠</li>
                            <li>麻将房</li>
                            <li>房量充足</li>
                            <li>发票推荐</li>
                        </ul>
                        <div class="price-info">￥<i class='price'>{{items.price}}</i>/起</div>
                        <div class="position" v-if='items.address'>{{items.address}}</div>
                    </div>
                </el-card>
            </a>
            
        </div>

    </div>
</template>

<script>
import api from '@/api/index.js';
export default {
    data(){
        return {
            curType: 'all',
            resultsObj: {},
            qualityList: [],
        }
    },
    mounted(){
        api.getQualityLifeList().then( (res)=>{
            this.resultsObj = res.data.data;
            
        } )
    },
    methods:{
        over(e){
            let type = e.target.dataset.type;
            // console.log(type)
            if(type){
                this.curType = type
            }
            
        }
    }

}
</script>

<style lang="scss">
    @import '@/assets/components/main/qualitylife.scss';
</style>

