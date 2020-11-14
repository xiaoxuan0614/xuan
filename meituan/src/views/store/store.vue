<template>
    <div class="store-box">
        <!-- 我是商家页 -->
        <ul :list="list">
            <li class="address">
                <img class="add-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAMAAAA2a+hwAAAAV1BMVEUAAACrq6uqqqqrq6uvr6+qqqqsrKysrKyqqqqsrKyurq6tra2qqqqrq6urq6usrKyxsbGqqqqrq6urq6urq6uqqqqqqqqrq6urq6urq6urq6uqqqqqqqptythVAAAAHHRSTlMA9dHCCYNBTN4vGSPsj2hFD6lgd3Tly7Z6VDyiLLeTfQAAASlJREFUKM91UlGWgyAMJICAqK1WrdrO/c+5aXhK2WXnJy8ZMkwC6oR1gwlEwQzOqhJ27nGhnwvaM6Ub11nbuUYz7TM3AOae07sBhszRogosdLIz6GzLzYT5EzvCIYWx0US6SWYOUMdhw1tSFyAITtI3Nm4EReEA42P0BhA2Ejq1Y5JBAxolaBBEecKuDI5UMqcZk44dXAnczdC45vbQYhRBEUSEEE8yguQiDj3GOjmiZ722LtviyaYedUMPHsOn6vhnFMNadkVbW0KLlc/c8Kytz+D2Cc8UlM2Lzy0tEQtnlLUFeiy5UeN6/gmbLcgN0/fB4ZsbCqm4Ys/ZjLUrDSTLyehvgy+SNcrayFX+20M4+YsV9iaaXlXgCPtS7ZN7e6B/qX/Qal34/AGEtRT7yCXlzQAAAABJRU5ErkJggg==" alt="">
            {{list.address}}
            </li>
            <li class="psway">
                <img class="psway-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAe1BMVEUAAACsrKyrq6u8vLyrq6uqqqqurq6rq6uqqqqurq6rq6uqqqqrq6urq6urq6urq6urq6utra2qqqqrq6urq6urq6usrKyvr6+qqqqrq6urq6urq6uurq6rq6uqqqqqqqqqqqqrq6urq6uqqqqurq6rq6utra2tra2qqqpQWWHrAAAAKHRSTlMAa5UFpvkR9vIJxu3ey2FaSyrmiHNELxy1f2Y3INfQvq+ajHolUT0Y1wVGwAAAAV5JREFUOMt9k+l6gyAQRTGAu8bdqM2+nfd/whZJ22hMzg/9Zu6dEYQRE/K+Sr/EO77OWwxh7y6obh8CkTodfNCbdTBRg+tBg6cyaYL1RoOvavkrt8d50d0JgaJ0bfMCEucuply6LSRjk4rwIpYYYjLzXuEs6laZGzLVfDS0mlh+MqyA9IPh4tERu8sGd5X4oMQWorBbMHRAlOTiuvOA7NVQQ2k7yw1+u7CGHs6jrvBvz584mbwhhfzntcYfbELZHVWoR2tNIFwxsBOWnV3Kja2Nc+Jmo485WtpL4HEfCwvqMbHGA8zDHp5DaCsr9g8D+jQoIB8LzWHaVoVdjDyVZnfNqhrTJYl4kOI1Yk6Gvv0FR+J2pjcR1X8kQ+LpOAwRanLpE4r8Ka59DsF0LPZ4/V/DTqOkmBIoOLh2wkIoxSuOpqjN7/CJrmKJZgeq3sP+3fzKswdEqXhPe0zK2Wh/A7mFImCuxPBKAAAAAElFTkSuQmCC" alt="">
                配送服务：{{list.server}}
            </li>
            <li class="pstime" :list="list">
                <img class="pstime-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAS1BMVEUAAACsrKy1tbWqqqqrq6v///+rq6urq6urq6urq6urq6uurq6qqqqrq6usrKyqqqqrq6uqqqqqqqqrq6urq6uqqqqsrKywsLCqqqqPxk2bAAAAGHRSTlMAZQfy5wKLvamAUCrhcjmUQtbZokbKJg4RvoWNAAAA8ElEQVQoz4WTWZLDIAxEBWIxxgtekvT9TzqumQFFSRz3DxSvqiW0UJOfQlyZ1xgmT6+yo0OTG62m/QBwZ0rOxXQMDD2JfAKcsc3JOCD5RjsgKDs7A1vlCTD0IgOk/7hCNe9/jQaE9hhju84Y7HGMcBIXkPgO45GXO6wVFnvnaQLbz9gyJgroSGFRh0AR5gwbRFpRzvCOhRj5DGfwG75rrM1vQHg8m+vUHhvAxrfU6sfE8TBYSv1YK4uod0CpZWlFFdl0u9eitpaIpCV/DZ01kIZejcP1MJHfgPl9FL8P8oc12HPeZQ2ul0iv4MK8qBX8Aa70EZDD+3G4AAAAAElFTkSuQmCC" alt="">
                配送时间：{{list.delivery_time}}
            </li>
            <li class="attention">
                <img class="attention-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAATlBMVEUAAACYmJiYmJibm5uYmJiXl5ezs7OXl5eXl5eYmJiYmJiYmJiZmZmgoKCYmJiYmJiZmZmZmZmbm5ufn5+Xl5eYmJiZmZmYmJiampqXl5fFk318AAAAGXRSTlMAVKso+bYG6tzTS346FuW+cGgcEJKHW5sw6MqDlgAAAMFJREFUKM9909sSgyAMRdGDRGxFtF7b8/8/2po6iuPE/URYb2HAtfRqYNdUlGRqLRTWN/ou6AxdhBNM7skZJr/ICJMj2cPkmbLg4Djo4OdC6ygOBzs+0qrCLamR8fhkqedycdoHOWPQ7Ty5X58Zkd3K3uCREm4YLYc7rphu2LMFOjqD35x0z49/RThxQ/EAJuFWGTIeWkadgtea6ucH9+wC8vzqO6MfgatbD3q4su3KtivbXiqbTtawvaUk2I3ZF/wCwVMN845HN1gAAAAASUVORK5CYII=" alt="">
                餐品如有出现错餐漏餐等问题请电话联系商家！我们一定会让您满意哒！
            </li>
            <li class="serve">
                <img class="serve-img1" src="https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:9096d347/bc2175e8adc4beec375977e424b1f542.png" alt="">
                商家服务
                <div class="serve-pai">
                <img class="serve-img2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAPFBMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv+7rjL9AAAAE3RSTlMAQMCA75TQG7IwEGBwUAbgoN+J9CeHAQAAANBJREFUKM+tk42KxDAIhB2j5q/d7l7e/13PbOG4a9KWgx2QoB+jGJAeKu1Eog/SFOlEMX2ROD3lQo0u1P6N1zjBCyNz6PNeUkYcpIBrybSk1dMcD7gRGPHVmJOvbGGGqS0A98Acg/Y4wc8Q1GNwa2OXGpv6O2CGKxtIN5o2p71sz/7W0R1QhJuyL8bHxaQPLMBmMAPi0b0PDJaJefjU1HHFmhhvN/IfbMkTbm+p9um/cZHws82keU3rFd6kXLq9d+a6F23Agz6Cb87g5ohuTvAbKZUOJe5EpDUAAAAASUVORK5CYII=" alt="">
                该商户为品牌商户
                </div>  
                <div class="serve-fu">
                    <img class="serve-img3" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAP1BMVEUAAAAArv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arv8Arf8Arv8Arf8Arv9dh4GPAAAAFHRSTlMAQL+A8Q6ub6AmUOAwIJHQYM+GX0YPCd8AAACvSURBVCjPpdNBDsMgDARAg21wICRNyv/f2kbQqhEGDt0LkocVFwywOMpqyC1vJc+ghj0t4Dx04x0Q95kJMgySfzikT2nVOMc6NkdsOTiByhZblpgGzCQwYDxxNSV+E2PSjZkQbc22PK3FG7sTr3bQ2w+JiAB2Z/VtoofgdcupzKHMZPMKfyscj7XH5dhHDBK6XPInB9fntFuypuVcK5Kth4aVzHnykSdrMFmiyQq+AJ+LC5MukzlBAAAAAElFTkSuQmCC" alt="">
                该商户支持在线支付
                </div>
            </li>
            <li class="man">
            <img class="man-img" src="https://p0.meituan.net/activityconfig/6087b33fd42d14fd94e899084aaef56d1720.png" alt="">
            {{list.full}}
            </li>
            <li class="zhe">
            <img class="zhe-img" src="https://p0.meituan.net/activityconfig/3da2d9c7a4ddf89e4e71cfdfff168c391088.png" alt="">
            {{list.sales}}
            </li>
            <li class="fu">
            <img class="fu-img" src="https://p1.meituan.net/xianfu/32200c3060be7903f62c9076308619ee734.png" alt="">
            该商户支持在线支付

            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios"
    export default {
        data(){
            return{
                id:this.$route.query.id,
                list:{}
            }
        },
        created(){
            axios.get(`http://admin.gxxmglzx.com/tender/test/get_store_id?id=${this.$route.query.id}`)
            .then(res=>{
                console.log(res.data.data)
                this.list=res.data.data
            })
        }
        
        

    
        
    }
</script>

<style lang="scss" scoped>
.store-box{
    font-size: 14px;
    line-height: 20px;
    font-family: mtsi-font;
    li{
        padding: 0.1rem 0 0.2rem 0.1rem;
     
    }
    .serve{
        // display: flex;
    }
    .fu-img,.zhe-img,.man-img,.serve-img1,.serve-img2,.serve-img3,.attention-img,.pstime-img,.psway-img,.add-img{
        height: 16px;
        top: 1px;
    }
    .serve-pai,.serve-fu{
        padding-left: 1.6rem;
    }
    
    
}

</style>