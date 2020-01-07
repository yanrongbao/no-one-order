<template>
  <div id="cart">
    <div class="cart_content">

      <div
        class="cart_info"
        v-if="totalNumber"
      >

        <h2>购物车</h2>

        <div class="p_number">
          <div class="p_number_left">
            <p>用餐人数:{{peopleList.p_num}}人</p>
            <p>备注:{{peopleList.p_mark?peopleList.p_mark:'无'}}</p>
          </div>
          <div class="p_number_right">
            <router-link to="/editpeopleinfo">
              <img src="../assets/images/edit.png" />
              <p>修改</p>
            </router-link>
          </div>

        </div>

        <div class="cart_p_num">

          <p>购物车中总共有{{totalNumber}}个菜</p>

          <p>合计：<span class="price">¥{{allPrice}}</span></p>
        </div>
      </div>

      <div
        class="cart_list"
        v-if="totalNumber"
      >

        <ul>
          <li
            class="item"
            v-for="(item,index) in list"
            :key="index"
          >
            <div class="left_food">
              <img :src="api+item.img_url" />
              <div class="food_info">
                <p>{{item.title}}</p>
                <p class="price">¥{{item.price}}</p>
              </div>

            </div>

            <div class="right_cart">
              <div class="cart_num">
                <div
                  class="input_left"
                  @click="decCount(item,index)"
                >-</div>
                <div class="input_center">
                  <input
                    v-model="item.num"
                    type="text"
                    readonly="readonly"
                    name="num"
                    id="num"
                  />
                </div>
                <div
                  class="input_right"
                  @click="incCount(item)"
                >+</div>
              </div>
            </div>

          </li>
        </ul>
      </div>

      <div
        class="hot_food"
        v-if="!totalNumber"
      >
        <h3>本店顾客最长点的菜</h3>
        <div class="item_list_outer">
          <ul class="item_list">
            <li>
              <div class="inner">
                <img src="../assets/images/1.jpg" />
                <p class="title">大蒜腊肉</p>
                <p class="price">¥26</p>
              </div>
            </li>

            <li>
              <div class="inner">
                <img src="../assets/images/2.jpg" />

                <p class="title">家乡扣肉</p>

                <p class="price">¥26</p>
              </div>

            </li>

            <li>
              <div class="inner">
                <img src="../assets/images/1.jpg" />
                <p class="title">大蒜腊肉</p>
                <p class="price">¥26</p>
              </div>
            </li>

            <li>
              <div class="inner">
                <img src="../assets/images/2.jpg" />

                <p class="title">家乡扣肉</p>

                <p class="price">¥26</p>
              </div>

            </li>

            <li>
              <div class="inner">
                <img src="../assets/images/2.jpg" />

                <p class="title">家乡扣肉</p>

                <p class="price">¥26</p>
              </div>

            </li>

          </ul>

        </div>

      </div>
    </div>
    <div
      v-if="!totalNumber"
      class="cart_empty"
    >您的购物车空空的，点击菜单开始点菜</div>
    <nav-footer></nav-footer>
    <div
      id="footer_book"
      class="footer_book"
    >
      <router-link to="/home">
        <img src="../assets/images/menu.png" />
        <p>菜单</p>
      </router-link>
    </div>

    <div
      id="footer_cart"
      class="footer_cart"
    >
      <img src="../assets/images/cart.png" />
      <p>下单</p>
    </div>

  </div>
</template>
<script>
import NavFooter from './public/NavFooter'
import config from '../model/config'
export default {
  data () {
    return {
      api: config.api,
      list: [],
      peopleList: {}
    }
  },
  computed: {
    allPrice () {
      let allPrice = 0;
      this.list.forEach((elem, index) => {
        if (index !== 0) {
          allPrice += Number.parseFloat(elem.price * elem.num)
        }

      })
      return allPrice
    },
    totalNumber () {
      let totalNumber = 0;
      this.list.forEach((elem, index) => {
        if (index !== 0) {
          totalNumber += elem.num
        }

      })
      return totalNumber
    }
  },
  methods: {
    getCartData () {
      this.$http.get(`${this.api}api/cartlist?uid=a001`).then(resp => {
        this.list = resp.body.result
      }, err => {

      })
    },
    decCount (item, index) {
      this.$http.get(`${this.api}api/decCart?uid=a001&product_id=${item.product_id}&num=${item.num}`).then(resp => {

      }, err => {

      })
      if (item.num === 1) {
        this.list.splice(index, 1);
      } else {
        --item.num
      }
    },
    incCount (item) {
      this.$http.get(`${this.api}api/incCart?uid=a001&product_id=${item.product_id}&num=${item.num}`).then(resp => {

      }, err => {

      })
      ++item.num
    },
    getPeopleInfoList () {
      this.$http.get(`${this.api}api/peopleInfoList?uid=a002`).then(resp => {
        this.peopleList = resp.body.result[0];
      }, err => {

      })
    }
  },
  mounted () {
    this.getCartData()
    this.getPeopleInfoList()
  },
  components: {
    NavFooter
  }
}
</script>
<style lang="scss" scoped>
.cart_content {
  padding: 1rem;

  /*头部信息*/
  .cart_info {
    background: #fff;

    h2 {
      text-align: center;
      font-size: 1.8rem;
      padding: 0.8rem 0px;
      border-bottom: 1px solid #eee;
    }
    border-radius: 0.5rem;
    padding: 0.5rem;
    .p_number {
      display: flex;

      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;

      .p_number_left {
        flex: 1;

        p {
          line-height: 2;

          &:first-child {
            color: red;
          }
        }
      }

      .p_number_right {
        width: 4rem;
        height: 4rem;
        text-align: center;

        img {
          width: 1.8rem;
          height: 1.8rem;
          margin: 0 auto;
        }
      }
    }

    /*购物车总数量*/

    .cart_p_num {
      border-bottom: 1px solid #eee;
      p {
        line-height: 2;

        .price {
          font-size: 2.4rem;
          color: red;
        }
      }
    }
  }
  /*购物车列表*/

  .cart_list {
    margin-top: 1rem;

    padding: 0.5rem;

    background: #fff;

    border-radius: 0.5rem;

    display: flex;

    ul {
      width: 100%;

      .item {
        display: flex;
        width: 100%;

        border-bottom: 1px solid #eee;

        padding: 1rem 0px;
        .left_food {
          flex: 1;

          display: flex;
          img {
            width: 4rem;
            height: 4rem;
            border-radius: 10%;
            margin-right: 0.8rem;
          }

          .food_info {
            flex: 1;
          }
        }

        .right_cart {
          width: 10rem;
        }
      }
    }
  }

  /*最长点的菜*/

  .hot_food {
    background: #fff;

    margin-top: 1rem;

    border-radius: 0.5rem;

    margin-bottom: 4rem;

    h3 {
      font-size: 1.4rem;

      padding: 0.5rem 0px;
    }

    .item_list_outer {
      width: 100%;

      overflow-x: auto;
      .item_list {
        padding: 0px 0.5rem;
        width: 50rem;

        li {
          width: 8rem;
          padding: 0.5rem;
          box-sizing: border-box;
          float: left;

          .inner {
            background: #fff;
            width: 100%;
            border-radius: 0.5rem;
            overflow: hidden;

            img {
              width: 100%;
            }
          }
        }
      }
    }
  }
}

/*购车加减*/
.cart_num {
  width: 10rem;

  display: flex;
  margin-top: 0.8rem;

  .input_left,
  .input_right {
    flex: 1;

    width: 2.8rem;
    height: 2.8rem;

    line-height: 2.8rem;

    text-align: center;

    color: red;

    border: 1px solid #eee;

    font-size: 2.4rem;
  }

  .input_center {
    flex: 1;

    input {
      width: 2rem;
      text-align: center;
      width: 100%;
      height: 2.8rem;
      border: none;

      border-top: 1px solid #eee;

      border-bottom: 1px solid #eee;

      float: left;
    }
  }
}

/*购车空*/

.cart_empty {
  text-align: center;
  line-height: 3;

  h3 {
    font-size: 1.8rem;
  }
}
</style>