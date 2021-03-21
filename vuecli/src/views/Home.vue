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
        <div>密码:
            <input type="password" v-model="password">
        </div>
        <button :disabled="!password">阿牛</button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id:this.$route.query.id,
                password:''
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>