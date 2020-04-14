<template>
  <Row style="background: white;height: 3rem;" id="book-content-nav">
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
  import axios from 'axios'
  axios.defaults.baseURL="/api";
  import qs from 'qs';
    export default {
        name: "BookDetailNav",
        data() {
          return {
            logout:0
          }
        },
        created(){
          let token = localStorage.getItem('book_login_token');//获取token
          if (token) {
            this.logout = 1
          }
        },
        methods:{
          back(){
            let token = localStorage.getItem('book_login_token');//获取token
            let data = JSON.parse(sessionStorage.getItem('bookshelf_data'));//获取session
            if (token && data) {
              this.examineBook(token, data['domain'])
            } else {
              this.$router.go(-1);//返回上一层
            }
          },
          home(){
            this.$router.push({ path:'/' })
          },
          bookshelf(){
            this.$router.push({ path:'/bookshelf' })
          },
          confirm () {
            this.$Modal.confirm({
              title: '友情提示',
              content: '<p>该书本未在书架中</p><p>是否加入书架?</p>',
              onOk: () => {
                this.addBookshelfList();
                this.$router.go(-1);//返回上一层
              },
              onCancel: () => {
                this.$router.go(-1);//返回上一层
              }
            });
          },
          examineBook(token, links) {
            axios.get('/user/verification/books?time='+new Date().getTime(),{
              params:{
                domain:links
              },
              headers:{
                'Authorization':'Bearer '+token
              }
            }).then((response)=>{
              if(response.data.Status){
                this.confirm();
              }else {
                this.$router.go(-1);//返回上一层
              }
            });

          },
          addBookshelfList() {
            let data = JSON.parse(sessionStorage.getItem('bookshelf_data'));//获取session
            let links = sessionStorage.getItem('bookshelf_data_links');//获取session
            let token = localStorage.getItem('book_login_token');//获取token
            if (token) {
              let postData = qs.stringify({
                id:data['id'],
                link:links,
                img:data['img'],
                domain:data['domain'],
                renew_time:data['renew_time'],
                writer:data['writer'],
                name:data['name']
              });
              axios({
                method: 'post',
                url:'/user/add/books',
                data:postData,
                headers:{
                  'Authorization':'Bearer '+token
                }
              }).then((res)=>{
                if (res.data.Status == -1) {
                  this.$Message.error({
                    content: '登录已过期,请重新登录!',
                    duration: 3
                  });
                  this.$router.push({ path:'/login' });
                } else if (res.data.Status == 1) {
                  this.$Message.success('添加成功!');
                } else {
                  this.$Message.warning(res.data.Msg);
                }
              });
            } else {
              this.$Message.error({
                content: '登录后可添加!',
                duration: 3
              });
              this.$router.push({ path:'/login' });
            }
          },
        }
    }
</script>

<style scoped>

</style>
