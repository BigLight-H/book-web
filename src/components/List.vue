<template>
  <div>
    <book-nav></book-nav>
    <Row style="margin-top: 3rem;">
      <Col :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 5 }" class="book-list-search">
        <Input size="large" @on-search="searchBooks" search enter-button="搜索" placeholder="搜小说、作者" v-model="name" />
      </Col>
    </Row>
    <Row>
      <Col :xs="{ span: 22, offset: 1 }" :lg="{ span: 14, offset: 5 }">
        <p class="book-list-p">关键词为 “{{ name }}” 的搜索小说结果：</p>
        <div class="book-list-list">
          <Col span="24" v-for="(item,index) in dataList" :key="index">
            <Col :xs="{ span: 16}" :lg="{ span: 20}" style="margin-top: 2rem;">
              <div @click="jumpBookLists(item.id, item.link)">
                <h4>{{item.name}}</h4>
                <p class="book-list-zj" v-if="item.new_list">最新章节:{{item.new_list}}</p>
                <p>作者:{{item.uname}}</p>
                <p class="book-list-come">来源:{{item.link}}</p>
              </div>
            </Col>
            <Col :xs="{ span: 8}" :lg="{ span: 4}" >
              <img v-if="item.img" :src="item.img" alt="" class="book-list-images">
              <img v-if="! item.img" src="http://www.vipzw.com/files/article/image/41/41902/41902s.jpg" alt="" class="book-list-images">
            </Col>
          </Col>
        </div>
      </Col>
    </Row>
    <BackTop :height="100" :bottom="15">
      <div class="top">
        <Icon type="ios-arrow-up"  style="margin-top: -7px;margin-left: -9px;"/>
      </div>
    </BackTop>
  </div>
</template>

<script>
  import axios from 'axios'
  axios.defaults.baseURL="/api";
  import BookNav from "./BookNav";
  export default {
    name: "List",
    components: {BookNav},
    data () {
      return {
        name: '',
        dataList:[]
      }
    },
    created() {
      let book_name = sessionStorage.getItem('book_name')
      this.name = book_name
      axios.get('/home/'+book_name+'?time='+new Date().getTime()).then((res) => {
        if (res.data.data.length > 0) {
          this.dataList=res.data.data;
          // sessionStorage.removeItem('book_name');//删除session
        }
      }).catch((error) => {
        console.warn(error)
      });
    },
    mounted() {
      document.getElementsByTagName('body')[0].style.background= '#e0e0e0'; //设置为新的
      document.getElementById('app').style.background= '#e0e0e0'; //设置为新的
    },
    methods:{
      searchBooks() {
        if (this.name) {
          axios.get('/home/'+this.name+'?time='+new Date().getTime()).then((res) => {
            if (res.data.data.length > 0) {
              sessionStorage.setItem("book_name", this.name);
              this.dataList=res.data.data;
            }
          }).catch((error) => {
            console.warn(error)
          })
        }
      },
      jumpBookLists(id, str) {
        let info = {link: str, id: id};
        sessionStorage.setItem("signoutShow",JSON.stringify(info));
        this.$router.push({ path:'/book_list' })
      }
    }
  }
</script>

<style scoped>
  .book-list-search >>> .ivu-input-search {
    background: #808695 !important;
    border-color: #808695 !important;
  }
  .book-list-search {
    padding: 2% 0 2% 0;
  }
  .book-list-p {
    font-size: 12px;
    color: #929292;
  }
  .book-list-list div {
    background: #fff;
    padding: .5rem;
    font-size: 1rem;
    border-radius: 6px;
    margin: .5rem 0 1rem 0;
  }
  .book-list-come {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 24px;
  }
  .book-list-zj {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    height: 24px;
  }
  .book-list-images {
    width: 100%;
    margin-top: 1rem;
  }
  .top{
    padding: 10px;
    background: rgba(134, 135, 136, 0.7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
    width: 3rem;
    height: 2.7rem;
  }

</style>
