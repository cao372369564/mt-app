<template>
    <div class="product-list">
        <el-row class='crumb-nav'>
            <crumb />
        </el-row>
        <el-row class='product-category'>
            <el-col :span='19'>
                    <dl class="category">
                        <dt>分类</dt>
                        <dt class='prechoose'>全部</dt>
                        <dd>
                            <category-tag :list='categoryList' 
                                            />
                        </dd>
                    </dl>
                    <dl class="category">
                        <dt>分类</dt>
                        <dt class='prechoose'>全部</dt>
                        <dd>
                            <category-tag :list='categoryList' 
                                            />
                        </dd>
                    </dl>
                <div class="sort-style">
                    <div class="sort-style-nav">
                        <span :class='{"price-sort" : item =="价格排序",active: index== sortChoose}'
                            v-for='(item,index) in sortNavList' :key='item + index'
                             @click='showActive(index)'
                            >{{item}}</span>
                        <!-- <span class='price-sort'>价格排序</span>
                        <span>人气最高</span>
                        <span>评价最高</span> -->
                    </div>
                    <div class="sort-content">
                        <i class='order-number'>1</i>
                        <img src="//p1.meituan.net/travel/865151ba4876dca868eccc1290107392389255.jpg@220w_125h_1e_1c" alt="">
                        <div class="content">
                            <div class="title">青岛星空3D艺术展怪屋</div>
                            <div class="think">
                                <ul class="star">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                                <span>很好 5分</span>
                                <span>4059人评论</span>
                            </div>
                            <div class="position">
                                <i>展览馆</i>
                                <i>市南区山东路9号深业大厦</i>
                                <a href="#" class='see-map'>
                                    <i class='el-icon-location'></i>
                                    查看地图
                                </a>
                            </div>
                            <div class="sale-price">
                                <span>￥<i>35</i>起</span>
                                <div class="price-describe">
                                    <span class='color-orange'>随买随用</span>
                                    <span class='color-blue'>公益商家</span>
                                </div>
                            </div>
                            <div class="intro-detail">
                                <div class="row1">
                                    <span>门票</span>
                                    <span>多景点联票25元起</span>
                                </div>
                                <div class="row2">
                                    <span>跟团</span>
                                    <span>八大关景区、栈桥、青岛中山公园等纯玩2日跟团游*青岛、崂山深度二日游308元起，蓬莱阁景区、栈桥、青岛天主</span>
                                </div>
                                <div class="row3">
                                    <span>景酒</span>
                                    <span>汇泉王朝大饭店+信号山公园+双人自助早餐509元，汇泉王朝大饭店+八大关景区+双人自助早餐589元</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </el-col>
            <el-col :span='5'>
                <div class="tencent-position">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555931021569&di=ce8264af2c726a84d840f6039671826f&imgtype=0&src=http%3A%2F%2Fimg.pe168.com%2Fimg%2F201312%2F21%2F02-21-36-13-7208528.jpg" alt="">
                </div>
                <div class="guess-your-like">
                    猜你喜欢
                    <div class="simple-intro">
                        <img src="//p0.meituan.net/shopmainpic/ab03ef94c1ca32a8d7b8b3f218dc54b79223879.jpg@190w_106h_1e_1c" alt="">
                        <div class="title">荣港一号度假SPA</div>
                        <ul class='star'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span>12119个评价</span>
                        <i>￥<em>38.0</em>起</i>
                    </div>
                    <div class="simple-intro">
                        <img src="//p0.meituan.net/shopmainpic/ab03ef94c1ca32a8d7b8b3f218dc54b79223879.jpg@190w_106h_1e_1c" alt="">
                        <div class="title">荣港一号度假SPA</div>
                        <ul class='star'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span>12119个评价</span>
                        <i>￥<em>38.0</em>起</i>
                    </div>

                    <div class="simple-intro">
                        <img src="//p0.meituan.net/shopmainpic/ab03ef94c1ca32a8d7b8b3f218dc54b79223879.jpg@190w_106h_1e_1c" alt="">
                        <div class="title">荣港一号度假SPA</div>
                        <ul class='star'>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <span>12119个评价</span>
                        <i>￥<em>38.0</em>起</i>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>    
</template>

<script>
import Crumb from '@/components/main/ProductCrumb.vue';
import CategoryTag from '@/components/main/CategoryTag.vue';
export default {
    components: {
        Crumb,
        CategoryTag
    },
    data(){
        return {
            isShow: false,
            sortChoose : '',
            categoryList: ['美食','酒店住宿','周边游','休闲娱乐','生活服务',
            '宴会','时尚购','旅游','丽人','运动健身','母婴亲子','宠物','榛果民宿'],
            sortNavList: ['智能排序','价格排序','人气最高','评价最高']
        }
    },
    methods: {
        showActive(index){
            console.log(index)
            this.sortChoose = index;
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/components/main/productlist.scss';
</style>
