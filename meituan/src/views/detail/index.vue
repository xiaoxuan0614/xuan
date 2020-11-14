<template>
  <div class="bs-wrapper">
    <div class="bs-content">
      <detailHeader></detailHeader>
      <van-tabs v-model="active" animated sticky color="#ffb000">
        <van-tab :title="'点餐'">
            <order></order>
        </van-tab>
        <van-tab :title="'评价'">
          <comment></comment>
        </van-tab>
        <van-tab :title="'商家'">
          <store></store>
        </van-tab>
      </van-tabs>
      <!-- {{$route.query.id}} -->
    </div>
    <!-- 我是详情页 -->
  </div>
</template>

<script>
import order from "../order/order"
import BetterScroll from "better-scroll";
import store from "../store/store";
import detailHeader from "./detailHeader";
import comment from "../comment/comment";
export default {
  data() {
    return {
      active: 0,
    };
  },
  components: {
    detailHeader,
    comment,
    store,
    order
  },
  mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bs-wrapper", {
        // movable: true,
        // zoom: true,
        bounce:false,
        click:true
      });
    },1000);
  },
};
</script>

<style lang="scss" scoped>
.bs-wrapper {
  height: 100vh;
  overflow: hidden;
}
</style>