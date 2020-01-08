<template>
  <div id="start">
    <div class="start_content">

      <header class="start_header edit">
        <img src="../assets/images/canju.png" /> 修改用餐人数
      </header>

      <p class="notice">请选择正确的用餐人数</p>

      <div class="content">
        <ul class="user_list">
          <li
            :class="{active:item===p_num}"
            v-for="item in p_list"
            :key="item"
            @click="p_num = item"
          >
            <span>{{item}}人</span>
          </li>
        </ul>
        <div class="mark_input">
          <input
            type="text"
            v-model="p_mark"
            placeholder="请输入您的口味要求(可不填)"
          >
        </div>
        <ul class="mark_list">
          <li
            v-for="(item,index) in mark_list"
            :key="index"
            @click="selectKouwei(item)"
            :class="{active:item.select}"
          >
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>

    </div>
    <div
      id="start_cancel"
      class="start_cancel"
      @click="addPeopleInfo"
    >
      <router-link to="/cart">
        <span>
          取消
        </span>
      </router-link>
    </div>
    <div
      id="start_ok"
      class="start_ok"
      @click="addPeopleInfo"
    >
      <span>
        确定修改
      </span>

    </div>
  </div>
</template>
<script>
import config from '../model/config'
import storage from '../model/storage'
export default {
  data () {
    return {
      api: config.api,
      p_list: 12,
      p_num: 2,
      mark_list: [
        { text: '打包带走', select: false },
        { text: '不要放辣椒', select: false },
        { text: '微辣', select: false }
      ],
      peopleList: {},
      p_mark: '',
      p_mark_list: []
    }
  },
  computed: {
  },
  methods: {
    addChangeEvent () {
      const that = this;
      const lis = document.querySelectorAll('.user_list li')
      for (let i = 0; i < lis.length; i++) {
        lis[i].onclick = function () {
          for (let j = 0; j < lis.length; j++) {
            lis[j].className = ''
          }
          this.className = 'active'
          that.p_num = this.querySelector('span').innerHTML.trim()
        }
      }
    },
    selectKouwei (item) {
      item.select = !item.select
      if (item.select) {
        this.p_mark_list.push(item.text)
      } else {
        this.p_mark_list = this.p_mark_list.filter(elem => elem !== item.text)
      }
      this.p_mark = this.p_mark_list.join(' ')
    },
    addPeopleInfo () {
      const uid = storage.get('roomId')
      this.$http.post(`${this.api}api/addPeopleInfo`, {
        uid,
        p_num: this.p_num,
        p_mark: this.p_mark,
      }).then(resp => {
        if (resp.body.success) {
          this.$router.push({
            path: 'cart'
          })
        }
      }, (err => {

      }))
    },
    getPeopleInfoList () {
      const uid = storage.get('roomId')
      this.$http.get(`${this.api}api/peopleInfoList?${uid}`).then(resp => {
        this.p_num = resp.body.result[0].p_num;
        this.p_mark = resp.body.result[0].p_mark;
      }, err => {

      })
    }
  },
  mounted () {
    this.getPeopleInfoList()
  }
}
</script>
<style lang="scss" scoped>
.start_content {
  .start_header {
    &.edit {
      width: 12rem;
    }
    height: 3.2rem;

    line-height: 3.2rem;
    background: #000;

    color: #fff;

    width: 10rem;

    margin: 5rem auto 0rem auto;

    border-radius: 0.5rem;

    img {
      height: 2.2rem;

      line-height: 2.2rem;
      position: relative;

      top: 0.5rem;
      margin-left: 1rem;
    }
  }

  .notice {
    color: red;
    //
    text-align: center;

    margin: 1rem 0rem;
  }
  .mark_input {
    padding: 1rem;
    input {
      height: 3rem;
      line-height: 3rem;
      width: 100%;
      border: 1px solid #eee;
    }
  }
  .user_list,
  .mark_list {
    display: flex;

    flex-wrap: wrap;
    padding: 0.5rem;

    li {
      width: 25%;
      padding: 0.5rem;
      box-sizing: border-box; /*盒子的宽度=盒子本身宽度    默认 盒子的宽度=盒子的宽度+padding+border*/

      span {
        display: block;

        width: 100%;
        height: 3.2rem;

        line-height: 3.2rem;
        text-align: center;
        background: #fff;
        border-radius: 0.5rem;
        border: 1px solid #ccc;
      }
      &.active {
        span {
          background: red;
          color: #fff;
          border: 1px solid red;
        }
      }
    }
  }
}

.start {
  position: fixed;

  bottom: 5rem;

  left: 50%;
  margin-left: -3rem;

  width: 6rem;

  height: 6rem;

  border-radius: 50%;

  background: red;
  color: #fff;

  span {
    display: block;

    width: 2.5rem;

    margin: 0 auto;

    position: relative;

    top: 1.5rem;
  }
}
.start_cancel {
  position: fixed;

  bottom: 4rem;

  left: 4rem;

  width: 6rem;

  height: 6rem;

  border-radius: 50%;

  background: red;
  a {
    color: #fff;
  }

  span {
    display: block;

    width: 2.5rem;

    margin: 0 auto;

    position: relative;

    top: 2rem;
  }
}
.start_ok {
  position: fixed;

  bottom: 4rem;

  right: 6rem;

  width: 6rem;

  height: 6rem;

  border-radius: 50%;

  background: red;
  color: #fff;

  span {
    display: block;

    width: 2.5rem;

    margin: 0 auto;

    position: relative;

    top: 1.5rem;
  }
}
</style>