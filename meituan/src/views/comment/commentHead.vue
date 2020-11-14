<template>
    <div class="container">
        <!-- 我是评价页 -->
        <div class="store-score">
            <p class="num">{{list.delivery}}</p>
            <p class="contain">商家评分</p>
        </div>
        <div class="store-star">
            <div class="kouwei">口味 
                <Star :num="list.flavor"></Star>
                {{list.flavor}}分</div>
            <div class="baozhuang">包装 
                <Star :num="list.packing"></Star>
                {{list.packing}}分</div>
        </div>
        <div class="post-score">
            <p class="num">{{list.score}}</p>
            <p class="contain">配送评分</p>
        </div>
    </div>
</template>

<script>
import Star from "@/components/Star"
    export default {
         props:['list'],
     components:{
        
         Star
     }   
    }
</script>

<style lang="scss" scoped>
.container{
    display: flex;
    padding: 0.1rem;
    .post-score,.store-score{
        width: 1.86rem;
        text-align: center;
        font-size: 0.28rem;
        .num{
            font-weight: bold;
            font-size: 0.54rem;
            line-height: 0.54rem;
        }
        // .contain{
        //     font-size: 0.28rem;
        //     font-weight: 500;
        // }

    }
    // .kouwei{
    //     display: flex;
    // }
    .store-score .num{
        color: #ffb000;
    }
    .post-score .num{
        color: #999;
    }
    .store-star{
        text-align: center;
        line-height: 0.54rem;
        flex: 1;
        font-size: 0.18rem;
    }
    .post-score{
        border-left: 1px solid #999;
    }
}

</style>