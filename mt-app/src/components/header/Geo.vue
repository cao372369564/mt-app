<template>
    <div class="geo">
        <i class='el-icon-location'>北京</i>
        <router-link :to="{name: 'ChangeCity'}" class='change-city'>切换城市</router-link>
        <span class='position'>[</span>
        <router-link to="/" class='position'>大厂回族自治县</router-link>
        <router-link to="/" class='position'>廊坊</router-link>
        <router-link to="/" class='position'>固安县</router-link>
        <span class='position'>]</span>
        <router-link to="/" id='sign-in'>立即登录</router-link>
        <router-link to="/" class='sign-up'>注册</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
    @import '@/assets/components/header/geo.scss';
    
    
</style>






