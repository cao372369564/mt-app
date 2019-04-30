<template>
    <el-breadcrumb separator-class="el-icon-arrow-right" class='crumb'>
        <el-breadcrumb-item :to="{ path: '/' }">{{$store.state.position}}美团</el-breadcrumb-item>
        <el-breadcrumb-item>{{$route.params.name}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script>
export default {
    
}
</script>

<style>
    .crumb{
        font-size: 12px;
        color: #222;
    }
</style>

