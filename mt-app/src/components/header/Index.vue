<template>
    <div class="index">
        <el-row>
            <top-bar />
        </el-row>
        <el-row>
            <search-bar />
        </el-row>
    </div>
</template>

<script>
import TopBar from '@/components/header/TopBar.vue'
import SearchBar from '@/components/header/SearchBar.vue'
export default {
    components: {
        TopBar,
        SearchBar,
    }
}
</script>

<style lang="scss">
    @import '@/assets/components/header/index.scss';
</style>





