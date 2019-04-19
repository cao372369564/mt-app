<template>
    <div class="default-page">
        <el-container>
            <el-header height='' style="padding:0px;">
                <mt-header />
            </el-header>
            <el-main height='' style='padding:0;background-color:#f8f8f8;'>
                <router-view></router-view>
            </el-main>
            <el-footer height='' style='padding:0'>
                <mt-footer />
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import Init from '@/assets/init.css'
import MtHeader from '@/components/header/Index.vue'
import MtFooter from '@/components/footer/Index.vue'
export default {
    components: {
        MtHeader,
        MtFooter
    }
}
</script>

<style>
    
    
</style>
