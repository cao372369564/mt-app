<template>
    <div>
        <div class="category-tag" v-for='(item,index) in list' :key='item + index'>
            <em @mouseenter='enter(index)' @mouseleave='leave(index)'>{{item}}</em>
            <dl v-show='curIndex == index' @mouseover='over' @mouseleave='leave(index)'>
                <dt>{{item}}</dt>
                <dd>全部</dd>
                <dd>景点</dd>
                <dd>海洋馆</dd>
                <dd>景点套餐</dd>
            </dl>
        </div>
    </div>
</template>

<script>
export default {
    props:['list'],
    data(){
        return {
            curIndex : null,
            timer : null
        }
    },
    methods: {
        enter(index){
            clearTimeout(this.timer)
            this.curIndex = index
        },
        leave(index){
            this.timer = setTimeout( ()=>{
                this.curIndex = null;
            },200 )
        },
        over(){
            clearTimeout(this.timer)
        }
    }
}
</script>

<style lang="scss">
    @import '@/assets/components/main/categorytag.scss';
</style>
