<template>
  <div>
      <nav-input></nav-input>
      <Row>
        <Col span="24" class="room-con-list">
          <Col :xs="2" :lg="8">&nbsp;</Col>
          <Col :xs="20" :lg="8" class="room-content">
            <p class="room-con-nav">
              <font>{{ info[0] && info[0].title }}</font>
              <a>更多</a>
            </p>
            <Row>
              <Col span="24" @click.native="jumpBookCon(info[0] && info[0].book_name_link)">
                <Col :xs="8" :lg="6" style="min-height: 153px">
                  <img :src="info[0] && info[0].img" alt="" style="width: 100%">
                </Col>
                <Col :xs="16" :lg="18" style="padding-left: .5rem">
                  <h3>{{ info[0] &&info[0].book_name }}</h3>
                  <p>作者:{{ info[0] && info[0].book_author }}</p>
                  <div class="room-mark">{{ info[0] && info[0].book_mark }}</div>
                </Col>
              </Col>
            </Row>
            <Row>
              <List>
                <ListItem v-for="(item,index) in list_nav" :key="index" @click.native="jumpBookCon(item.list_book_name_link)">
                  <font>{{ item.list_type_name }}</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta :title="item.list_book_name" :description="'作者:'+item.list_book_author" />
                </ListItem>
              </List>
            </Row>
          </Col>
          <Col :xs="2" :lg="8">&nbsp;</Col>
        </Col>
      </Row>
      <Row>
        <Col span="24" class="room-con-list">
          <Col :xs="2" :lg="8">&nbsp;</Col>
          <Col :xs="20" :lg="8" class="room-content">
            <p class="room-con-nav">
              <font>{{ info[1] && info[1].title }}</font>
              <a>更多</a>
            </p>
            <Row>
              <Col span="24" @click.native="jumpBookCon(info[1] && info[1].book_name_link)">
                <Col :xs="8" :lg="6" style="min-height: 153px">
                  <img :src="info[1] && info[1].img" alt="" style="width: 100%">
                </Col>
                <Col :xs="16" :lg="18" style="padding-left: .5rem">
                  <h3>{{ info[1] && info[1].book_name }}</h3>
                  <p>作者:{{ info[1] && info[1].book_author }}</p>
                  <div class="room-mark">{{ info[1] && info[1].book_mark }}</div>
                </Col>
              </Col>
            </Row>
            <Row>
              <List>
                <ListItem v-for="(item,index) in list_nav2" :key="index" @click.native="jumpBookCon(item.list_book_name_link)">
                  <font>{{ item.list_type_name }}</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta :title="item.list_book_name" :description="'作者:'+item.list_book_author" />
                </ListItem>
              </List>
            </Row>
          </Col>
          <Col :xs="2" :lg="8">&nbsp;</Col>
        </Col>
      </Row>
      <Row>
        <Col span="24" class="room-con-list">
          <Col :xs="2" :lg="8">&nbsp;</Col>
          <Col :xs="20" :lg="8" class="room-content">
            <p class="room-con-nav">
              <font>{{ info[2] && info[2].title }}</font>
              <a>更多</a>
            </p>
            <Row>
              <Col span="24" @click.native="jumpBookCon(info[2] && info[2].book_name_link)">
                <Col :xs="8" :lg="6" style="min-height: 153px">
                  <img :src="info[2] && info[2].img" alt="" style="width: 100%">
                </Col>
                <Col :xs="16" :lg="18" style="padding-left: .5rem">
                  <h3>{{ info[2] && info[2].book_name }}</h3>
                  <p>作者:{{ info[2] && info[2].book_author }}</p>
                  <div class="room-mark">{{ info[2] && info[2].book_mark }}</div>
                </Col>
              </Col>
            </Row>
            <Row>
              <List>
                <ListItem v-for="(item,index) in list_nav3" :key="index" @click.native="jumpBookCon(item.list_book_name_link)">
                  <font>{{ item.list_type_name }}</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta :title="item.list_book_name" :description="'作者:'+item.list_book_author" />
                </ListItem>
              </List>
            </Row>
          </Col>
          <Col :xs="2" :lg="8">&nbsp;</Col>
        </Col>
      </Row>
      <Row>
        <Col span="24" class="room-con-list">
          <Col :xs="2" :lg="8">&nbsp;</Col>
          <Col :xs="20" :lg="8" class="room-content">
            <p class="room-con-nav">
              <font>{{ info[3] && info[3].title }}</font>
              <a>更多</a>
            </p>
            <Row>
              <Col span="24" @click.native="jumpBookCon(info[3] && info[3].book_name_link)">
                <Col :xs="8" :lg="6" style="min-height: 153px">
                  <img :src="info[3] && info[3].img" alt="" style="width: 100%">
                </Col>
                <Col :xs="16" :lg="18" style="padding-left: .5rem">
                  <h3>{{ info[3] && info[3].book_name }}</h3>
                  <p>作者:{{ info[3] && info[3].book_author }}</p>
                  <div class="room-mark">{{ info[3] && info[3].book_mark }}</div>
                </Col>
              </Col>
            </Row>
            <Row>
              <List>
                <ListItem v-for="(item,index) in list_nav4" :key="index" @click.native="jumpBookCon(item.list_book_name_link)">
                  <font>{{ item.list_type_name }}</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta :title="item.list_book_name" :description="'作者:'+item.list_book_author" />
                </ListItem>
              </List>
            </Row>
          </Col>
          <Col :xs="2" :lg="8">&nbsp;</Col>
        </Col>
      </Row>
      <Row style="margin-bottom: 4rem">
        <Col span="24" class="room-con-list">
          <Col :xs="2" :lg="8">&nbsp;</Col>
          <Col :xs="20" :lg="8" class="room-content">
            <p class="room-con-nav">
              <font>{{ info[4] && info[4].title }}</font>
              <a>更多</a>
            </p>
            <Row>
              <Col span="24" @click.native="jumpBookCon(info[4] && info[4].book_name_link)">
                <Col :xs="8" :lg="6" style="min-height: 153px">
                  <img :src="info[4] && info[4].img" alt="" style="width: 100%">
                </Col>
                <Col :xs="16" :lg="18" style="padding-left: .5rem">
                  <h3>{{ info[4] && info[4].book_name }}</h3>
                  <p>作者:{{ info[4] && info[4].book_author }}</p>
                  <div class="room-mark">{{ info[4] && info[4].book_mark }}</div>
                </Col>
              </Col>
            </Row>
            <Row>
              <List>
                <ListItem v-for="(item,index) in list_nav5" :key="index" @click.native="jumpBookCon(item.list_book_name_link)">
                  <font>{{ item.list_type_name }}</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta :title="item.list_book_name" :description="'作者:'+item.list_book_author" />
                </ListItem>
              </List>
            </Row>
          </Col>
          <Col :xs="2" :lg="8">&nbsp;</Col>
        </Col>
      </Row>
      <room-nav :list="1"></room-nav>
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
        name: "StackRoom",
        components: {
          RoomNav,
          NavInput,
          BackHome,
        },
        data () {
          return {
            info:{},
            list_nav:{},
            list_nav2:{},
            list_nav3:{},
            list_nav4:{},
            list_nav5:{},
          }
        },
        created(){
          axios.get('/book/source?time='+new Date().getTime()).then((res) => {
            this.info = res.data.info;
            this.list_nav = res.data.list;
            this.list_nav2 = res.data.list2;
            this.list_nav3 = res.data.list3;
            this.list_nav4 = res.data.list4;
            this.list_nav5 = res.data.list5;
          }).catch((error) => {
            console.warn(error)
          });
        },
        mounted() {
          document.getElementById('app').style.background= '#ffffff'; //设置为新的
        },
        beforeDestroy() {
          document.getElementById('app').style.background= '#e0e0e0'; //设置为新的
        },
        methods: {
          jumpBookCon(link) {
            let infos = {link: link, id: 1};
            sessionStorage.setItem("signoutShow",JSON.stringify(infos));
            this.$router.push({ path:'/book_list' })
          }
        }
    }
</script>

<style scoped>
  .room-con-nav {
    margin-bottom: .5rem;
  }
  .room-con-nav font {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .room-con-nav a {
    font-weight: bold;
    display: block;
    float: right;
  }
  .room-mark {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
  }
  .room-con-list {
    margin-bottom: 2rem;
  }
</style>
