<template>
    <div class="product-list">
        <el-row class='crumb-nav'>
            <crumb />
        </el-row>
        <el-row class='product-category'>
            <el-col :span='19'>
                <div class="category"></div>
                <div class="sort-style"></div>
            </el-col>
            <el-col :span='5'>
                <div class="tencent-position"></div>
                <div class="guess-your-like"></div>
            </el-col>
        </el-row>
    </div>    
</template>

<script>
import Crumb from '@/components/main/ProductCrumb.vue';
export default {
    components: {
        Crumb,
    }
}
</script>

<style lang="scss">
    @import '@/assets/components/main/productlist.scss';
</style>
