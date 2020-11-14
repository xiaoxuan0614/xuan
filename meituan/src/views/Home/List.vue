<template>
  <div>
    <!-- 我是列表 -->
    <div class="store-list">
      <p>附近商家</p>
    </div>
    <ul class="liststore-box" v-for="obj in list" :key="obj.id"
    @click="$router.push({path:'/detail',query:{id:obj.id}})"
    >
      <li class="list">
        <img :src="obj.img" alt="" />
        <div class="store-content">
          <h2 class="con-name">{{ obj.name }}</h2>
          <div>
            <Star :num="parseFloat(obj.score)"> </Star>
            <p class="con-store">评分:{{ obj.score }}</p>
          </div>
          <p class="con-minute">配送时间:{{ obj.minute }}min</p>
        </div>
      </li>
    </ul>
    <img class="loading" v-show="isShow" src="@/assets/images/loading.gif" alt="">
  </div>
</template>

<script>
import axios from "axios";
import Star from "@/components/Star";
export default {
  components: {
    Star
  },
  data() {
    return {
      list: [],
      pageNum: 0,
      isShow: true,
      isFinished: false,
    };
  },
  methods: {
    getdata() {
      axios
        .get(
          "http://admin.gxxmglzx.com/tender/test/get_store?current=" +
            this.pageNum +
            "&size=10"
        )
        .then((res) => {
          // console.log(res.data.data.list)
          this.list = [...this.list, ...res.data.data.list];
          this.pageNum++;
          this.isShow=false;
          if(this.list.length == res.data.data.total){
              this.isFinished=true
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getdata();
    window.onscroll = () => {
      let scrollTop = document.documentElement.scrollTop;
      let clientHeight = document.documentElement.clientHeight;
      let scrollHeight = document.documentElement.scrollHeight;

      if ((scrollTop + clientHeight == scrollHeight) && !this.isFinished) {
          this.isShow=true
        this.getdata();
      }
    };
  },
};
</script>

<style lang="scss" scoped>
.store-list {
  margin: 0.2rem;
  font-size: 20px;
  text-align: center;
}
.liststore-box {
  padding: 0.2rem 0 0 0.2rem;
  // padding-right: 0;
  // padding-bottom: 0;
  .list {
    width: 90%;
    display: flex; //弹性盒模型
    padding-top: 0.2rem;
    border-top: 1px solid gainsboro;
  }
  .store-content {
    padding-left: 0.1rem;
    flex: 1;
  }
  .con-name {
    font-size: 0.3rem;
  }
  .con-store {
    font-size: 0.1rem;
  }
  .con-minute {
    font-size: 0.1rem;
  }
  .list img {
    width: 30%;
  }
  
}
.loading {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 1.4rem;
    height: 1.4rem;
  }
</style>