<template>
  <Row id="book-content-nav" class="book-nav-head">
    <Col :xs="{ span: 6, offset: 1 }" :lg="{ span: 2, offset: 3 }" style="padding-top: .7rem;">
      <Icon type="ios-arrow-back" size="25" @click="back"/>
    </Col>
    <Col :xs="{ span: 6, offset: 11 }" :lg="{ span: 2, offset: 16 }" style="padding-top: .7rem;display: flex;">
      <Icon v-if="logout > 0" type="ios-book" size="25" style="margin-top: .1rem;" @click="bookshelf"/>
      &nbsp;&nbsp;
      <Icon type="md-home" size="25" @click="home"/>
    </Col>
  </Row>
</template>

<script>
    export default {
        name: "BookNav",
        data() {
          return {
            logout:0
          }
        },
        created(){
          let token = sessionStorage.getItem('book_login_token');//获取token
          if (token) {
            this.logout = 1
          }
        },
        methods:{
          back(){
            this.$router.go(-1);//返回上一层
          },
          home(){
            this.$router.push({ path:'/' })
          },
          bookshelf(){
            this.$router.push({ path:'/bookshelf' })
          },
        }
    }
</script>

<style scoped>
  .book-nav-head {
    background: white;
    height: 3rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    right: 0;
  }
</style>
