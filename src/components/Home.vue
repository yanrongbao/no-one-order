<template>
  <div id="home">
    <header class="index_header">

      <div class="hlist">
        <img src="../assets/images/rexiao.png" />
        <p>热销榜</p>
      </div>

      <div class="hlist">
        <img src="../assets/images/caidan.png" />
        <p>点过的菜</p>
      </div>
      <div class="hlist">

        <img src="../assets/images/sousuo.png" />
        <p>搜你喜欢</p>
      </div>

    </header>

    <aside
      class="left_cate"
      id="left_cate"
    >
      <ul>
        <li
          v-for="(item,index) in list"
          @touchend="scrollList(index)"
          :key="index"
        >{{item.title}}</li>
      </ul>

      <div
        id="nav_cate"
        class="nav_cate"
      >
        <img src="../assets/images/nav.png" />
        <p>菜单</p>
      </div>

    </aside>

    <div class="content">

      <div
        class="item"
        v-for="(item,index) in list"
        :key="index"
      >

        <h3 class="item_cate">{{item.title}}</h3>

        <ul class="item_list">
          <li
            v-for="(food,index) in item.list"
            :key="index"
          >
            <div class="inner">
              <router-link :to="'/pcontent?id='+food._id">
                <img :src="api+food.img_url" />
                <p class="title">{{food.title}}</p>
                <p class="price">¥{{food.price}}</p>
              </router-link>

            </div>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="bg"
      id="bg"
    >

    </div>
    <nav-footer></nav-footer>
    <div
      id="footer_cart"
      class="footer_cart"
    >
      <router-link to="/cart">
        <img src="../assets/images/cart.png" />
        <p>购物车</p>
      </router-link>
      <span
        class="num"
        v-if="cartNum"
      >{{cartNum}}</span>
    </div>
  </div>
</template>
<script>
//引入nav
import NavFooter from './public/NavFooter'
import config from '../model/config'
import storage from '../model/storage'
export default {
  data () {
    return {
      list: [],
      api: config.api,
      cartNum: 0
    }
  },
  sockets: {
    addcart: function () {
      this.getCartCount()
    },
  },
  methods: {
    asideDomInit () {
      //按钮
      var navCate = document.getElementById('nav_cate');
      //分类
      var leftCate = document.getElementById('left_cate');

      //背景			  		
      var bg = document.getElementById('bg');

      var flag = true;

      bg.onclick = navCate.onclick = function () {

        if (flag) {

          flag = false;
          leftCate.style.transform = 'translate(0,0)';

          bg.style.display = 'block';

        } else {

          flag = true;
          leftCate.style.transform = 'translate(-100%,0)';

          bg.style.display = 'none';
        }

      }
    },
    requestData () {
      this.$http.get(`${this.api}api/productlist`).then(resp => {
        this.list = resp.body.result
      }, error => {

      })
    },
    scrollList (index) {
      const itemCatesDom = document.querySelectorAll('.item_cate')
      document.documentElement.scrollTop = itemCatesDom[index].offsetTop

      //分类
      var leftCate = document.getElementById('left_cate');

      //背景			  		
      var bg = document.getElementById('bg');
      leftCate.style.transform = 'translate(-100%,0)';

      bg.style.display = 'none';
    },
    getCartCount () {
      const uid = storage.get('roomid')
      this.$http.get(`${this.api}api/cartCount?uid=${uid}`).then(resp => {
        this.cartNum = resp.body.result
      }, error => {

      })
    }
  },
  mounted () {
    this.asideDomInit()
    this.requestData()
    this.getCartCount()
  },
  components: {
    NavFooter
  }
}
</script>
<style lang="scss" scoped>
.index_header {
  width: 96%;

  margin: 0 auto;

  height: 4.4rem;

  background: #fff;
  margin-top: 1rem;

  display: flex;
  border-radius: 0.5rem;

  .hlist {
    flex: 1;
    text-align: center;
    padding-top: 0.2rem;
    border-right: 1px solid #eee;

    img {
      width: 2rem;
      height: 2rem;
      margin: 0 auto;
    }

    &:last-child {
      border-right: none;
    }
  }
}

/*列表*/
.item {
  .item_cate {
    text-align: center;

    padding: 0.5rem;
  }

  .item_list {
    display: flex;

    flex-wrap: wrap;

    padding: 0px 0.5rem;

    li {
      width: 33.3%;
      padding: 0.5rem;

      box-sizing: border-box;

      .inner {
        background: #fff;
        width: 100%;
        border-radius: 0.5rem;
        overflow: hidden;
        a {
          color: #666;
        }
        img {
          width: 100%;
          height: 6rem;
        }
        p {
          padding: 0.2rem 0.5rem;
        }

        .title {
          font-weight: bold;
        }
      }
    }
  }
}

/*侧边栏*/

.left_cate {
  /*css3运动  加过渡效果*/
  transition: all 0.3s;

  transform: translate(-100%, 0);

  z-index: 2;

  width: 7rem;

  height: 100%;

  position: fixed;

  background: #eee;
  top: 0px;
  left: 0px;

  ul {
    position: absolute;

    height: 100%;
    padding: 0.5rem;

    z-index: 3;

    background: #eee;
    li {
      line-height: 4.4rem;
    }
  }

  .nav_cate {
    position: absolute;

    right: -3.5rem;

    background: rgba(132, 128, 128, 0.9);
    top: 42%;

    width: 5rem;

    height: 4.5rem;
    text-align: center;

    border-radius: 0rem 50% 50% 0rem;

    z-index: 2;
    img {
      width: 1.8rem;

      height: 1.8rem;

      margin-left: 1rem;

      margin-top: 0.4rem;
    }
    p {
      color: #fff;
      margin-left: 1rem;

      margin-top: -0.3rem;
    }
  }
}

/*透明层*/

.bg {
  position: fixed;

  width: 100%;
  height: 100%;

  background: rgba(132, 128, 128, 0.4);

  left: 0px;

  top: 0px;
  z-index: 1;

  display: none;
}
</style>