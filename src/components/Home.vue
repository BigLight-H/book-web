<template>
  <div>
    <Row>
      <Icon type="ios-contact" class="book-user" size="24" @click="jumpLogin()" />
      <Icon type="ios-book" class="book-user1" size="24" @click="jumpBookshelf()" />
    </Row>
    <div class="home">
      <Row type="flex" justify="center" class="code-row-bg">
        <Col :sm="1" :md="4"></Col>
        <Col :sm="14" :md="8" class="tracking-in-contract book-title">Shine Books</Col>
        <Col :sm="1" :md="4"></Col>
      </Row>
      <Row type="flex" justify="center" class="code-row-bg">
        <Col :sm="1" :md="2"></Col>
        <Col :sm="14" :md="12" style="padding: 3rem 0;" class="book-search bounce-in-bottom">
          <Input size="large" @on-search="jumpBooks" v-model="book" search enter-button="搜索" placeholder="搜小说、作者" />
        </Col>
        <Col :sm="1" :md="2"></Col>
      </Row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Home.vue",
      data () {
        return {
          msg: 'Welcome to Your Vue.js App',
          book: ''
        }
      },
      methods: {
        jumpLogin () {
          this.$router.push({ path:'/login' })
        },
        jumpBookshelf() {
          this.$router.push({ path:'/bookshelf' })
        },
        jumpBooks() {
          if (this.book){
            sessionStorage.setItem("book_name", this.book);
            this.$router.push({ path:'/list' })
          }
        }
      }
    }
</script>

<style scoped>
  .book-search >>> .ivu-input-search {
    background: #808695 !important;
    border-color: #808695 !important;
  }

  .home {
    position: absolute;
    left: 0;
    right: 0;
    top: 18%;
  }
  @keyframes tracking-in-contract {
    0% {
      letter-spacing: 1em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      letter-spacing: normal;
      opacity: 1;
    }
  }
  .tracking-in-contract {
    animation: tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }
  .book-title {
    text-align: center;
    line-height: 8rem;
    font-size: 4rem;
    font-family: fantasy;
  }
  .bounce-in-bottom {
    animation: bounce-in-bottom 1.1s both;
  }
  @keyframes bounce-in-bottom {
    0% {
      transform: translateY(500px);
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      transform: translateY(0);
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      transform: translateY(65px);
      animation-timing-function: ease-in;
    }
    72% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    81% {
      transform: translateY(28px);
      animation-timing-function: ease-in;
    }
    90% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
    95% {
      transform: translateY(8px);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translateY(0);
      animation-timing-function: ease-out;
    }
  }
  .book-user {
    font-size: 2.6rem !important;
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
  }
  .book-user1 {
    font-size: 2.6rem !important;
    position: absolute;
    right: 4.5rem;
    top: 1.58rem;
  }


</style>
