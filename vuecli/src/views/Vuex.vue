<template>
    <div>
        vuex
        {{
        $store.state.count
        }}
        __
        {{count}}

        <button @click="$store.commit('add',5)">++</button>
        <button @click="add(6)">++</button>
        <h2>count的值{{count}}</h2>
        <h2>count2的值{{$store.state.count2}}</h2>
        <h2>
      sum的值为 ： {{$store.getters.sum}}
    </h2>
    <h2>sum的值为{{sum}}</h2>

    </div>
</template>

<script>
import { mapState ,mapMutations, mapGetters} from  "vuex"
import axios from 'axios'

    export default {
        computed:{
            ...mapState(['count']),
            ...mapGetters(['sum'])
        },
        methods:{
            ...mapMutations(['add'])
        },
        created(){
           this.$store.dispatch('getMovieList');
        }
    }
</script>

<style lang="scss" scoped>

</style>