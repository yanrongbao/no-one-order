<template>
  <div id="cart">
    <div class="cart_content">

      <div class="cart_info">

        <h2>购物车</h2>

        <div class="p_number">
          <div class="p_number_left">
            <p>用餐人数:2人</p>
            <p>备注:无</p>
          </div>
          <div class="p_number_right">
            <img src="../assets/images/edit.png" />
            <p>修改</p>
          </div>

        </div>

        <div class="cart_p_num">

          <p>购物车中总共有6个菜</p>

          <p>合计：<span class="price">¥58</span></p>
        </div>
      </div>

      <div class="cart_list">

        <ul>
          <li class="item">
            <div class="left_food">
              <img src="../assets/images/1.jpg" />
              <div class="food_info">
                <p>老干妈炒肥肠</p>
                <p class="price">¥48</p>
              </div>

            </div>

            <div class="right_cart">
              <div class="cart_num">
                <div class="input_left">-</div>
                <div class="input_center">
                  <input
                    type="text"
                    readonly="readonly"
                    value="1"
                    name="num"
                    id="num"
                  />
                </div>
                <div class="input_right">+</div>
              </div>
            </div>

          </li>

          <li class="item">
            <div class="left_food">
              <img src="../assets/images/1.jpg" />
              <div class="food_info">
                <p>老干妈炒肥肠</p>
                <p class="price">¥48</p>
              </div>

            </div>

            <div id="right_cart">
              <div class="cart_num">
                <div class="input_left">-</div>
                <div class="input_center">
                  <input
                    type="text"
                    readonly="readonly"
                    value="1"
                    name="num"
                    id="num"
                  />
                </div>
                <div class="input_right">+</div>
              </div>
            </div>

          </li>

          <li class="item">
            <div class="left_food">
              <img src="../assets/images/1.jpg" />
              <div class="food_info">
                <p>老干妈炒肥肠</p>
                <p class="price">¥48</p>
              </div>

            </div>

            <div id="right_cart">
              <div class="cart_num">
                <div class="input_left">-</div>
                <div class="input_center">
                  <input
                    type="text"
                    readonly="readonly"
                    value="1"
                    name="num"
                    id="num"
                  />
                </div>
                <div class="input_right">+</div>
              </div>
            </div>

          </li>
        </ul>
      </div>

      <div class="hot_food">

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

    <nav-footer></nav-footer>
    <div
      id="footer_book"
      class="footer_book"
    >
      <img src="../assets/images/menu.png" />
      <p>菜单</p>
    </div>

    <div
      id="footer_cart"
      class="footer_cart"
    >
      <img src="../assets/images/cart.png" />
      <p>购物车</p>
    </div>

  </div>
</template>
<script>
import NavFooter from './public/NavFooter'
export default {
  data () {
    return {

    }
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