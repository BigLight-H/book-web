<template>
  <div>
    <book-nav></book-nav>
    <Row>
      <Col :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 5 }"  class="book-list-title">
        <Col :xs="24" :lg="5" class="book-list-img">
          <Col :xs="10" :lg="24">
            <img src="http://r.m.kuxiaoshuo.com/files/article/image/2/2715/2715s.jpg" alt="">
          </Col>
        </Col>
        <Col :xs="24" :lg="19" class="book-list-synopsis">
          <div>
            <h3>哈哈哈</h3>
            <p>作者：辰东</p>
          </div>
          <hr>
          <div>
            在破败中崛起，在寂灭中复苏。
            沧海成尘，雷电枯竭，那一缕幽雾又一次临近大地，世间的枷锁被打开了，一个全新的世界就此揭开神秘的一角……
          </div>
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
          <Col :xs="{ span: 24}" :lg="{ span: 8}" class="book-list-name-child">
            <a href="">第一章:哈哈哈哈</a>
          </Col>
          <Col :xs="{ span: 24 }" :lg="{ span: 8}" class="book-list-name-child">
            <a href="">第一章:哈哈哈哈</a>
          </Col>
          <Col :xs="{ span: 24 }" :lg="{ span: 8}" class="book-list-name-child">
            <a href="">第一章:哈哈哈哈</a>
          </Col>
        </Row>
        <Row class="book-list-name">
          <Col :xs="{ span: 24 }" :lg="{ span: 8}" class="book-list-name-child">
            <a href="">第一章:哈哈哈哈</a>
          </Col>
          <Col :xs="{ span: 24 }" :lg="{ span: 8}" class="book-list-name-child">
            <a href="">第一章:哈哈哈哈</a>
          </Col>
          <Col :xs="{ span: 24 }" :lg="{ span: 8}" class="book-list-name-child">
            <a href="">第一章:哈哈哈哈</a>
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
        link: this.$route.params.link,
        id: this.$route.params.id,
      }
    },
    created() {
      // axios.get('http://127.0.0.1:8088/home/'+this.name).then((res) => {
      //   res = res.data;
      //   if (res.errno === ERR_OK) {
      //     this.themeList=res.data;
      //   }
      // }).catch((error) => {
      //   console.warn(error)
      // })
      var data = JSON.parse(sessionStorage.getItem('signoutShow'));//获取session
      sessionStorage.removeItem('signoutShow');//删除session
      axios.post('http://127.0.0.1:8088/book/list',this.$qs.stringify(data)).then(response => {
        alert(response.data)
      }, response => {
        alert("出错啦！")
      })
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
