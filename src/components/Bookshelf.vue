<template>
  <div>
    <book-nav></book-nav>
    <Row style="margin-top: 3rem;">
      <Col span="24" class="book-my-bookshelf tracking-in-expand-fwd">My Bookshelf</Col>
    </Row>
    <Row class="bookshelf-box">
      <Col :xs="{ span: 22, offset: 1 }" :lg="{ span: 20, offset: 2 }">
          <Col :xs="{ span: 7,  offset: 1, pull:1}" :lg="{ span: 3,  offset: 1, pull:1}" style="position: relative;margin-bottom: 1rem;" v-for="(item,index) in data" :key="index" @click.native="bookshelfJump(item.HubId, item.Link, item.Domain, item.Status, item.NewRenew)">
            <p v-if="item.Status > 0" class="bookshelf-title-num">有更新</p>
            <p v-if="close > 0" class="bookshelf-title-del" @click="delBooks(item.Domain, $event)">
              <Icon type="ios-close-circle-outline" />
            </p>
            <img v-if="item.Img" :src="item.Img" class="demo-badge">
            <img v-if="! item.Img" src="http://www.vipzw.com/files/article/image/41/41902/41902s.jpg" class="demo-badge">
            <p class="bookshelf-title">{{ item.BookName }}</p>
          </Col>
      </Col>
    </Row>
    <Button v-if="close == 0" type="dashed" class="bookshelf-edit" @click="editBook">编辑</Button>
    <Button v-if="close == 1" type="dashed" class="bookshelf-edit" @click="editBookOk">完成</Button>
  </div>
</template>

<script>
  import axios from 'axios'
  axios.defaults.baseURL="/api";
  import qs from 'qs';
  import BookNav from "./BookNav";
    export default {
        name: "Bookshelf",
        components: {BookNav},
        data() {
          return{
            data:{},
            close:0
          }
        },
        created() {
          let token = sessionStorage.getItem('book_login_token');//获取token
          if (token) {
            axios({
              method: 'get',
              url:'/user/books',
              headers:{
                'Authorization':'Bearer '+token
              }
            }).then((res)=>{
              this.data = res.data
            });
          } else {
            this.$Message.error({
              content: '登录后可以进入书架!',
              duration: 3
            });
            this.$router.push({ path:'/login' });
          }
        },
        methods: {
          bookshelfJump(hub_id, link, domain, status, newRenew) {
            if (status) {
              this.changeBooksRenewTime(domain, newRenew)
            }
            let infos = {link: link, id: hub_id};
            sessionStorage.setItem("book_content",JSON.stringify(infos));
            this.$router.push({ path:'/book' })
          },
          changeBooksRenewTime(domain, new_renew) {
            let token = sessionStorage.getItem('book_login_token');//获取token
            if (token){
              let postData = qs.stringify({
                domain:domain,
                new_renew:new_renew,
              });
              axios({
                method: 'post',
                url:'/user/books/renew/time',
                data:postData,
                headers:{
                  'Authorization':'Bearer '+token
                }
              }).then((res)=>{
                console.log(res)
              });
            }
          },
          editBook() {
            this.close = 1;
          },
          editBookOk() {
            this.close = 0;
          },
          delBooks(domain,event) {
            event.stopPropagation();//禁止穿透
            let token = sessionStorage.getItem('book_login_token');//获取token
            if (token){
              let postData = qs.stringify({
                domain:domain,
              });
              axios({
                method: 'post',
                url:'/user/books/del',
                data:postData,
                headers:{
                  'Authorization':'Bearer '+token
                }
              }).then((res)=>{
                this.$router.go(0);//刷新
              });
            }
          }
        }
    }
</script>

<style scoped>
  .book-my-bookshelf {
    text-align: center;
    padding: 1rem 0;
    font-size: 3.3rem;
    margin-bottom: 1rem;
    font-family: SMT;
  }
  .demo-badge{
    width: 100%;
    height: 100%;
    background: #eee;
    border-radius: 6px;
    display: inline-block;
  }

  .bookshelf-title {
    text-align: center;
    font-size: 12px;
    padding: .3rem 0;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }

  .bookshelf-title-num {
    width: 100%;
    height: 2rem;
    background: #fd494994;
    position: absolute;
    text-align: center;
    line-height: 1.9rem;
    font-weight: bold;
    bottom: 2.1rem;
    color: white;
    border-radius: 0 0 5px 5px;
  }
  .bookshelf-title-del {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 1.65rem;
    background: #69616194;
    text-align: center;
    line-height: 8rem;
    z-index: 2;
    font-size: 3rem;
    color: white;
  }
  .bookshelf-edit {
    position: fixed;
    bottom: 3rem;
    right: 2rem;
    z-index: 3;
  }

  .bookshelf-box {
    padding-left: 5%;
  }
  .bookshelf-box .ivu-badge {
    margin-bottom: 1rem;
  }
  .swing-in-bottom-bck {
    -webkit-animation: swing-in-bottom-bck 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) ;
    animation: swing-in-bottom-bck 1s cubic-bezier(0.175, 0.885, 0.320, 1.275) ;
  }
  @-webkit-keyframes swing-in-bottom-bck {
    0% {
      -webkit-transform: rotateX(-70deg);
      transform: rotateX(-70deg);
      -webkit-transform-origin: bottom;
      transform-origin: bottom;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      -webkit-transform-origin: bottom;
      transform-origin: bottom;
      opacity: 1;
    }
  }
  @keyframes swing-in-bottom-bck {
    0% {
      -webkit-transform: rotateX(-70deg);
      transform: rotateX(-70deg);
      -webkit-transform-origin: bottom;
      transform-origin: bottom;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0);
      transform: rotateX(0);
      -webkit-transform-origin: bottom;
      transform-origin: bottom;
      opacity: 1;
    }
  }
  .tracking-in-expand-fwd {
    -webkit-animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
    animation: tracking-in-expand-fwd 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }
  @-webkit-keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px);
      transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand-fwd {
    0% {
      letter-spacing: -0.5em;
      -webkit-transform: translateZ(-700px);
      transform: translateZ(-700px);
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
      opacity: 1;
    }
  }

</style>
