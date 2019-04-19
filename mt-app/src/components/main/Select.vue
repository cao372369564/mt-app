<template>
    <div class="select">
        <div v-for='(items,index) in provinceList' :key='items + index'>
            <div class="province" 
                v-document-listener='blur'
                @click='choose'     
            >
            {{province}}
            </div>
            <div class="province-list" v-if='showProvince' @click='choose' >
                <h2>{{items.name}}</h2>
                <div class='list'>
                    <p v-for='(item,index) in items.provinceArr' :key='item + "_" +  index'>
                        <span v-for='(value,index) in item'  :key='value + index'
                            @click='changeInner(value)'
                            :class="{'active' : value == active}"
                        >
                            {{value}}
                        </span>
                        
                    </p>
                    
                </div>
        </div>        
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            // showProvince: false
        }
    },
    props: ['provinceList','showProvince','province','active'],
    methods:{
        choose(e){
            e.stopPropagation();
            this.$emit('change_active',true)
            
        },
        blur(){
            // console.log('自定义指令')
            this.$emit('change_active',false);
            
        },
        changeInner(inner){
            // console.log(inner);
            this.$emit('changeInner',inner)
        }
    }
}
</script>

<style lang="scss">
@import '@/assets/components/main/select.scss';
</style>
