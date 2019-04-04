<template>
    <div class="default-page">
        <el-container>
            <el-header class='el-header'>
                <my-header />
            </el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
        </el-container>
    </div>
</template>

<script>
import Init from '@/assets/init.css'
import MyHeader from '@/components/header/Index.vue'
export default {
    components: {
        MyHeader,
    }
}
</script>

<style>
    .el-header{
        margin: 0;
        padding: 0;
    }
    
</style>
