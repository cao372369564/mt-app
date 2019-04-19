<template>
    <div class="quality-life">
        <dl class='life-nav' @mouseover='over'>
            <dt>有格调</dt>
            <dd :class='{active : curType == "all"}' data-type='all'>全部</dd>
            <dd :class='{active : curType == "eat-together"}' data-type='eat-together'>约会聚餐</dd>
            <dd :class='{active : curType == "spa"}' data-type='spa'>丽人SPA</dd>
            <dd :class='{active : curType == "movie"}' data-type='movie'>电影演出</dd>
            <dd :class='{active : curType == "quality-tour"}' data-type='quality-tour'>品质出游</dd>
        </dl>
        <div class="life-area">
            <a href="#">
                <el-card>
                    <img src="//p0.meituan.net/tdchotel/e25a0fb673081464e5091ca32ecff8b8129548.jpg@368w_208h_1e_1c" alt="image">
                    <div class="img_info">
                        <span class="title">仟那精品酒店</span>
                        <span clss='sub_title'></span>
                        <ul class='tag-info'>
                            <li>新客超值优惠</li>
                            <li>麻将房</li>
                            <li>房量充足</li>
                            <li>发票推荐</li>
                        </ul>
                        <div class="price-info">￥<i class='price'>158</i>/起</div>
                        <div class="position">郑州大学</div>
                    </div>
                </el-card>
            </a>
            <a href="#">
                <el-card>
                    <img src="//p0.meituan.net/tdchotel/e25a0fb673081464e5091ca32ecff8b8129548.jpg@368w_208h_1e_1c" alt="image">
                    <div class="img_info">
                        <span class="title">仟那精品酒店</span>
                        <ul class='tag-info'>
                            <li>新客超值优惠</li>
                            <li>麻将房</li>
                            <li>房量充足</li>
                            <li>发票推荐</li>
                        </ul>
                        <div class="price-info">￥<i class='price'>158</i>/起</div>
                        <div class="position">郑州大学</div>
                    </div>
                </el-card>
            </a>
            <a href="#">
                <el-card>
                    <img src="//p0.meituan.net/tdchotel/e25a0fb673081464e5091ca32ecff8b8129548.jpg@368w_208h_1e_1c" alt="image">
                    <div class="img_info">
                        <span class="title">仟那精品酒店</span>
                        <ul class='tag-info'>
                            <li>新客超值优惠</li>
                            <li>麻将房</li>
                            <li>房量充足</li>
                            <li>发票推荐</li>
                        </ul>
                        <div class="price-info">￥<i class='price'>158</i>/起</div>
                        <div class="position">郑州大学</div>
                    </div>
                </el-card>
            </a>
            <a href="#">
                <el-card>
                    <img src="//p0.meituan.net/tdchotel/e25a0fb673081464e5091ca32ecff8b8129548.jpg@368w_208h_1e_1c" alt="image">
                    <div class="img_info">
                        <span class="title">仟那精品酒店</span>
                        <ul class='tag-info'>
                            <li>新客超值优惠</li>
                            <li>麻将房</li>
                            <li>房量充足</li>
                            <li>发票推荐</li>
                        </ul>
                        <div class="price-info">￥<i class='price'>158</i>/起</div>
                        <div class="position">郑州大学</div>
                    </div>
                </el-card>
            </a>
            <a href="#">
                <el-card>
                    <img src="//p0.meituan.net/tdchotel/e25a0fb673081464e5091ca32ecff8b8129548.jpg@368w_208h_1e_1c" alt="image">
                    <div class="img_info">
                        <span class="title">仟那精品酒店</span>
                        <ul class='tag-info'>
                            <li>新客超值优惠</li>
                            <li>麻将房</li>
                            <li>房量充足</li>
                            <li>发票推荐</li>
                        </ul>
                        <div class="price-info">￥<i class='price'>158</i>/起</div>
                        <div class="position">郑州大学</div>
                    </div>
                </el-card>
            </a>
            <a href="#">
                <el-card>
                    <img src="//p0.meituan.net/tdchotel/e25a0fb673081464e5091ca32ecff8b8129548.jpg@368w_208h_1e_1c" alt="image">
                    <div class="img_info">
                        <span class="title">仟那精品酒店</span>
                        <ul class='tag-info'>
                            <li>新客超值优惠</li>
                            <li>麻将房</li>
                            <li>房量充足</li>
                            <li>发票推荐</li>
                        </ul>
                        <div class="price-info">￥<i class='price'>158</i>/起</div>
                        <div class="position">郑州大学</div>
                    </div>
                </el-card>
            </a>
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            curType: ''
        }
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

