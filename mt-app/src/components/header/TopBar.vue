<template>
    <div class="top-bar">
        <el-col :span='10'>
            <geo />
        </el-col>
        <el-col :span='14'>
            <my-nav />
        </el-col>
    </div>
</template>

<script>
import Geo from './Geo.vue'
import MyNav from './Nav.vue'
export default {
    components: {
        Geo,
        MyNav,
    }
}
</script>

<style lang="scss">
    @import '@/assets/components/header/topbar.scss';
    
</style>

