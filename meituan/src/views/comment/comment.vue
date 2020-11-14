<template>
    <div class="comment-wrapper">
        <div>
        <comment-head :list="list"></comment-head>
        <comment-container :list="list" @update="fn"></comment-container>
        </div>
        

    </div>
</template>

<script>
import axios from 'axios'
import BetterScroll from 'better-scroll'
import commentHead from './commentHead'
import commentContainer from './commentContainer'
    export default {
        data(){
            return{
                id:this.$route.query.id,
                list:{}
            }
        },
        components:{
            commentHead,
            commentContainer
        },
        created(){
            this.getData(1)
        },
        methods:{
            fn(id){
                this.getData(id)
            },
            getData(typeId){
                axios.get(`http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=${typeId}`)
        .then(res=>{
            console.log(res.data.data)
            this.list=res.data.data

            this.$nextTick(()=>{
                new BetterScroll(".comment-wrapper",{
                click:true,
                bounce:false
            })
            })
            });
        }
        }
        
        
    }
</script>

<style lang="scss" scoped>
.comment-wrapper{
    height: calc(100vh - 44px);
}

</style>