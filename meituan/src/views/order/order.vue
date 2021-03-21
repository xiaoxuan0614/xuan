<template>
  <div class="order-box">
    <div class="title">
      <ul>
        <li :class="{active:index == currentIndex,'cate-list':true}" v-for="(obj,index) in nav" @click="change(index)" :key="obj.id">{{ obj.name }}</li>
      </ul>
    </div>
    <div class="content">
      <div>
        <div class="pro-content" v-for="(obj, index) in goods" :key="index">
          <h2 class="con-name">{{ obj.name }}</h2>
          <ul>
            <li class="con-goods" v-for="prod in obj.content" :key="prod.id">
              <img class="con-img" :src="prod.img" alt="" />
              <div class="con-msg">
                <p class="prod-name">{{ prod.name }}</p>
                <p class="prod-info">{{ prod.info }}</p>
                <div class="num">
                  <p class="prod-num">月售{{ prod.num }}+</p>
                  <p class="prod-up">赞{{ prod.up }}</p>
                </div>
                <div class="add-prod">
                <h2 class="prod-price">￥{{ prod.price }}</h2>
                <button class="prod-button">+</button>
                </div>

              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      nav: [],
      goods: [],
      currentIndex:0,
      pos:[],
      scrollY:0
    };
  },
  methods:{
    change(index){
      let proContentList = document.getElementsByClassName("pro-content")
      console.log(proContentList[index]);
       // ele 元素
      this.contentScroll.scrollToElement(proContentList[index],300)
      this.currentIndex=index
    },
    getPos(){
      let proContentList = document.getElementsByClassName("pro-content")
      let H=0;
      for(let i=0;i<proContentList.length;i++){
        if(i==0){
          this.pos.push(0)
        }else{
          H += proContentList[i-1].offsetHeight
          this.pos.push(H)
        }
        console.log(this.pos)
      }

    }
  },
  created() {
    axios
      .get(
        `http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`
      )
      .then((res) => {
        console.log(res.data.data);
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;
        //渲染到页面后
        this.$nextTick(() => {
          this.titleScroll = new BetterScroll(".title", {
            click: true,
            bounce: false,
          });
          this.contentScroll = new BetterScroll(".content", {
            click: true,
            bounce: false,
            probeType:3
          });
          this.contentScroll.on("scroll",position=>{
            this.scrollY=Math.abs(position.y)
            console.log(this.scrollY)
          });
          this.getPos()
        });
      });
  },
  watch:{
    scrollY(val) {
      for(let index=0;index<this.pos.length;index++){
        let pos1=this.pos[index]
        let pos2=this.pos[index+1]
        if(val>= pos1 && val <pos2){
          //  console.log(index);
           this.currentIndex = index;
           let cateList = document.querySelectorAll('.cate-list');
           this.titleScroll.scrollToElement(cateList[index],300)
           break;
        }

      }
    }
  }
};
</script>

<style lang="scss" scoped>
.order-box {
  display: flex;
  padding-bottom: 50px;
  .title {
    flex: 1;
    height: calc(100vh - 94px);
    // width: 1.6rem;
    background: #f5f5f5;
    li {
      padding: 0.1rem 0.24rem 0.44rem;
      //    border-top: 1px solid #bbb;
      font-size: 13px;
      line-height: 18px;
      color: #666666;
      overflow: hidden;
      display: inline-block;
    }
    .active{
      background: white;
      color: red;

    }
  }
  .content {
    flex: 3;
    height: calc(100vh - 94px);
    text-overflow: ellipsis;
    // .con-name{

    // }
    .con-goods {
      display: flex;
      .con-img {
        height: 1.5rem;
        width: 1.5rem;
      }
      .num {
        display: flex;
      }
      .con-msg {
        padding-left: 0.2rem;
        flex: 1;
        width: 0;
        // .prod-info{
        //     overflow: hidden;
        //     white-space: nowrap;
        // }
        .prod-name {
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          font-family: "PingFangSC-Medium", "Hiragino Sans GB", Arial, Helvetica,
            "\5B8B\4F53", sans-serif;
        }
        .prod-info {
          color: #666666;
          font-size: 11px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .prod-price {
          font-size: 18px;
          color: #fb4e44;
        }
        .prod-up,
        .prod-num {
          color: #666666;
          font-size: 13px;
        }
        .prod-up {
          margin-left: 0.2rem;
        }
        .add-prod{
            display: flex;
        }
        .prod-button{
            height: 0.5rem;
            width: 0.5rem;
            // float: right;
            margin-left: 1.5rem;
            background: orange;
            border-radius: 50%;
            font-size: 20px;
            color: #3d3939;
            border: 1px solid rgb(105, 91, 91);
        }
      }
    }
  }
}
</style>