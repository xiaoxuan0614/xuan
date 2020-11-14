<template>
    <div class="title">
<!-- 我是产品分类 -->
<ul class="list-box">
    <li class="list" v-for="obj in cateList" :key="obj.id">
        <!-- 动态属性用: -->
        <img :src="obj.img" alt="">         
        <p>{{obj.name}}</p>

    </li>
</ul>
    
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data(){
            return {
                cateList:[]
            }
        },
        created(){
            axios.get('http://admin.gxxmglzx.com/tender/test/get_type')
            .then((res)=>{
                console.log(res.data)
                let result=res.data
                if(result.errcode=200){
                    this.cateList=result.data
                }
            }).catch((error)=>{
                console.log(error)
                })
        }
    }
</script>

<style lang="scss" scoped>
.list img{
    width: 60%; 
}
.list{
    width: 20%;
    text-align: center;
    margin-top: 0.3rem;
}
.list-box{
    display: flex;
    flex-wrap: wrap;
}

</style>