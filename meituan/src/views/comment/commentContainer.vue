<template>
    <div class="container">
        <div class="title">
            <span :class="{active:obj.id==typeId}" v-for="obj in list.label" :key="obj.id" @click="change(obj.id)">{{obj.name}}({{obj.count}})</span>
          
        </div>
        <ul class="list-box">
            <li class="list" v-for="obj in list.rate" :key="obj.id">
                <img class="list-img" :src="obj.portrait" alt="">
                <div class="list-info">
                    <div class="info-name">{{obj.name}}</div>
                    <div class="info-msg">{{obj.content}} </div>
                </div>
            </li>

        </ul>
        
    </div>
</template>

<script>
    export default {
        props:["list"],
        data(){
            return{
                typeId:1
            }
        },
        created(){
            console.log(this.list)
        },
        methods:{
            change(id){
                this.$emit('update',id)
                this.typeId=id
            }
        }
        
        
    }
</script>

<style lang="scss" scoped>
.container{
    padding: 0.2rem;
    border-top: 0.2rem solid #f4f4f4;
    .title {
        padding-bottom: 0.3rem;
        span{
            padding: 0.1rem 0.24rem;
            border: 1px solid #bbb;
            border-radius: 0.28rem;
            margin-right: 0.2rem;
            display: inline-block;
            margin-bottom: 0.1rem;
            &.active{
                border: 1px solid #ffb000;
                background: #fffbf1;
            }
        }
        
    }
    .list-box{
        .list{
            display: flex;
            border-bottom: 1px solid #bbb;
            padding-bottom: 0.1rem;
            padding-left: 0.1rem;
            .list-img{
                width: 0.8rem;
                height: 0.8rem;
                border-radius: 50%;
            }
        }
    }
}


</style>