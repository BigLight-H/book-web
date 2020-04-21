<template>
  <Row>
    <Col :xs="2" :lg="8">&nbsp;</Col>
    <Col :xs="20" :lg="8" class="room-search">
      <Input v-model="book" icon="ios-search" placeholder="搜索书籍..." style="padding: 1.2rem 0;"  @keyup.enter.native="searchBook()"/>
    </Col>
    <Col :xs="2" :lg="8">&nbsp;</Col>
  </Row>
</template>

<script>
    export default {
        name: "NavInput",
        data() {
          return {
            book: '',
          }
        },
      methods: {
        searchBook() {
          if (this.book){
            sessionStorage.setItem("book_name", this.book);
            this.$router.push({ path:'/list' })
          }
        }
      }
    }
</script>

<style scoped>
  .room-search >>> .ivu-input-default {
    height: 2.5rem;
  }
  .room-search >>> .ivu-icon-ios-search {
    font-size: 1.4rem;
    padding-top: .3rem;
  }
</style>
