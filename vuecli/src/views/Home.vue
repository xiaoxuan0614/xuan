<template>
    <div>
        我是首页
        <!-- {{$route.params.id}}
        <router-link to="/home/a">A</router-link>
        <router-link to="/home/b">B</router-link>
        <router-view></router-view> -->
         {{$route.query.id}}
         ___
        {{id}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id:this.$route.query.id
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>