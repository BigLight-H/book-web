<template>
  <div>
    <book-nav></book-nav>
    <Row v-for="(item,index) in title" :key="index">
      <Col :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 5 }"  class="book-list-title">
        <Col :xs="24" :lg="5" class="book-list-img">
          <Col :xs="10" :lg="24">
            <img :src="item.img" alt="">
          </Col>
        </Col>
        <Col :xs="24" :lg="19" class="book-list-synopsis">
          <div>
            <h3>{{ item.name }}</h3>
            <p>{{ item.writer }}</p>
          </div>
          <hr>
          <div>{{ item.synopsis }}</div>
          <div style="margin-top: .5rem">
            <Button type="info">加入书签</Button>
            &nbsp;&nbsp;
            <Button type="success">立即阅读</Button>
          </div>
        </Col>
      </Col>
    </Row>
    <Row>
      <Col :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 5 }"  class="book-list-title book-list">
        <h3>全部章节</h3>
        <Row class="book-list-name">
          <Col :xs="{ span: 24}" :lg="{ span: 8}" class="book-list-name-child" v-for="(item,index) in data" :key="index">
            <a @click="jumpBookContent(item.id, item.link)">{{ item.name }}</a>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
</template>

<script>
  import axios from 'axios'
  import BookNav from "./BookNav";
  export default {
    name: "BookList",
    components: {BookNav},
    data () {
      return {
        title:{},
        data:{}
      }
    },
    created() {
      let data = JSON.parse(sessionStorage.getItem('signoutShow'));//获取session
      axios.get('http://127.0.0.1:8088/book/list',{
        params:{
          id:data['id'],
          link:data['link']
        }
      }).then((response)=>{
        let res = response.data;
        this.data = res.data
      });
      axios.get('http://127.0.0.1:8088/book/synopsis',{
        params:{
          id:data['id'],
          link:data['link']
        }
      }).then((response)=>{
        let res1 = response.data;
        this.title = res1.data
      });
    },
    methods: {
      jumpBookContent(id, link) {
        let infos = {link: link, id: id};
        sessionStorage.setItem("book_content",JSON.stringify(infos));
        this.$router.push({ path:'/book' })
      }
    }
  }
</script>

<style scoped>
  .book-list-title {
    background: white;
    border-radius: 6px;
    margin-top: 1.5rem;
  }
  .book-list-img {
    padding: 4% 2% 4% 4%;
  }
  .book-list-img img {
    width: 100%;
  }
  .book-list-synopsis{
    padding: 6% 1rem;
    line-height: 2.1rem;
    font-size: 1.2rem;
  }
  .book-list {
    padding: 1rem;
  }
  .book-list .ivu-row .book-list-name-child{
    line-height: 3rem;
  }
  .book-list .ivu-row .book-list-name-child a{
    color: #707173;
  }
  .book-list-name .book-list-name-child {
    border-bottom:1px dashed #dadada;
  }

</style>
