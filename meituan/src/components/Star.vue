<template>
    <div class="star-container">
        <ul>
            <!-- <li class="active"></li>
            <li class="half-active"></li>
            <li class="non-active"></li> -->
            <li
            v-for="i in 5"
            :key="i"
            :class="{
               'active':i<=num,
               'half-active':(((i-num)>0) && (i-num)<1),
               'non-active':i> Math.ceil(num)
            }"

            ></li>
        </ul>

    </div>
</template>

<script>
    export default {
        props:{
            num:{
                //  type:Number,
            default:5
            }
        }
    }
</script>

<style lang="scss" scoped>
.star-container{
    display: inline-block;
}
ul{
    display: flex;
    li{
        width: 12px;
        height: 12px;
        background-size: 12px 12px;
    }
    .active{
        background-image: url(./images/star-active.png);
    }
    .half-active{
        background-image: url(./images/star-half.png);
    }
    .non-active{
        background-image: url(./images/star.png);
    }
}
</style>