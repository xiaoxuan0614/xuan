<template>
    <div>
        <p>我是测试3</p>

        <!-- {{$route.params.id}} -->

        <!-- {{$route.params.name}} -->
        __
        <!-- {{name}} -->
        {{id}}
    </div>
</template>

<script>
    export default {
        data(){
            return {
                id:this.$route.params.id
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>