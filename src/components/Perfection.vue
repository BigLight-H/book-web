<template>
  <div>
    <nav-input></nav-input>
    <Row v-if="lists.length > 0">
      <Col :xs="2" :lg="8">&nbsp;</Col>
      <Col :xs="20" :lg="8">
        <List>
          <ListItem v-for="(item,index) in lists" :key="index" @click.native="jumpBookCon(item.book_name_link)">
            <font>{{ item.book_type }}</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta :title="item.book_name" :description="'作者:'+item.book_author" />
          </ListItem>
        </List>
      </Col>
      <Col :xs="2" :lg="8">&nbsp;</Col>
    </Row>
    <Row class="type-page-div">
      <Col :xs="2" :lg="8">&nbsp;</Col>
      <Col :xs="20" :lg="8" class="type-page">
        <Button type="info" @click="getPageList(pages.book_first_page,1)" v-if="pages.book_first_page !== ''">首页&nbsp;&nbsp;&nbsp;</Button>
        <Button type="info" @click="getPageList(pages.book_previous,2)" href="" v-if="pages.book_previous !== ''">上一页&nbsp;&nbsp;&nbsp;</Button>
        <Button type="info" @click="getPageList(pages.book_next_page,3)" href="" v-if="pages.book_next_page !== ''">下一页&nbsp;&nbsp;&nbsp;</Button>
        <Button type="info" @click="getPageList(pages.book_last_page,4)" href="" v-if="pages.book_last_page !== ''">尾页</Button>
      </Col>
      <Col :xs="2" :lg="8">&nbsp;</Col>
    </Row>
    <room-nav :list="4"></room-nav>
    <back-home></back-home>
  </div>
</template>

<script>
  import axios from 'axios'
  axios.defaults.baseURL="/api";
  import RoomNav from "./RoomNav";
  import NavInput from "./NavInput";
  import BackHome from "./BackHome";
  export default {
    name: "Perfection",
    components: {
      RoomNav,
      NavInput,
      BackHome,
    },
    data() {
      return {
        lists:{},
        pages:[],
        p_id:''
      }
    },
    created(){
      axios.get('/book/source/book/end?time='+new Date().getTime()).then((res) => {
        this.lists = res.data.list;
        this.pages = res.data.page;
      }).catch((error) => {
        console.warn(error)
      });
    },
    mounted() {
      document.getElementsByTagName('body')[0].style.background= '#ffffff'; //设置为新的
      document.getElementById('app').style.background= '#ffffff'; //设置为新的
    },
    beforeDestroy() {
      document.getElementById('app').style.background= '#e0e0e0'; //设置为新的
      document.getElementsByTagName('body')[0].style.background= '#e0e0e0'; //设置为新的
    },
    methods: {
      getTypeLists(domain) {
        axios.get('/book/source/book/end?link='+ domain +'&time='+new Date().getTime()).then((res) => {
          this.lists = res.data.list;
          this.pages = res.data.page;
          if(res.data.page.book_next_page) {
            if (this.p_id == 4) {
              this.pages.book_first_page = this.pages.book_next_page
              this.pages.book_next_page='';
            }
          }
        }).catch((error) => {
          console.warn(error)
        });
      },
      getPageList(str, id) {
        this.p_id = id;
        this.getTypeLists(str);
      },
      jumpBookCon(link) {
        let infos = {link: link, id: 1};
        sessionStorage.setItem("signoutShow",JSON.stringify(infos));
        this.$router.push({ path:'/book_list' })
      }
    }
  }
</script>

<style scoped>
  .type-page {
    text-align: center;
    margin-left: -11px;
  }
  .type-page-div {
    padding-bottom: 4rem;
    padding: 2rem 0;
  }
</style>


