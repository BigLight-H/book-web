<template>
  <div>
      <Row>
        <Col :xs="2" :lg="8">&nbsp;</Col>
        <Col :xs="20" :lg="8" class="room-search">
          <Input icon="ios-search" placeholder="搜索书籍..." style="padding: 1.2rem 0;" />
        </Col>
        <Col :xs="2" :lg="8">&nbsp;</Col>
      </Row>
      <Row>
        <Col span="24" class="room-con-list">
          <Col :xs="2" :lg="8">&nbsp;</Col>
          <Col :xs="20" :lg="8" class="room-content">
            <p class="room-con-nav">
              <font>热门书籍</font>
              <a>更多</a>
            </p>
            <Row>
              <Col span="24">
                <Col :xs="8" :lg="6" style="min-height: 153px">
                  <img src="http://r.m.kuxiaoshuo.com/cover/aHR0cDovL3FpZGlhbi5xcGljLmNuL3FkYmltZy8zNDk1NzMvMTAxMDg2ODI2NC8xODA=" alt="" style="width: 100%">
                </Col>
                <Col :xs="16" :lg="18" style="padding-left: .5rem">
                  <h3>诡异之主</h3>
                  <p>作者:哈哈哈</p>
                  <div class="room-mark">蒸汽与机械的浪潮中，谁能触及非凡？历史和黑暗的迷雾里，又是谁在耳语？我从诡秘中醒来，睁眼看见这个世界：枪械，大炮，巨舰，飞空艇，差分机；魔药，占卜，诅咒，倒吊...</div>
                </Col>
              </Col>
            </Row>
            <Row>
              <List>
                <ListItem>
                  <font>┇ 玄幻 ┇</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta title="书名:我要飞升啊啊啊啊" description="作者:哈哈哈哈" />
                </ListItem>
                <ListItem>
                  <font>┇ 玄幻 ┇</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta title="书名:我要飞升啊啊啊啊" description="作者:哈哈哈哈" />
                </ListItem>
                <ListItem>
                  <font>┇ 玄幻 ┇</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta title="书名:我要飞升啊啊啊啊" description="作者:哈哈哈哈" />
                </ListItem>
                <ListItem>
                  <font>┇ 玄幻 ┇</font>&nbsp;&nbsp;&nbsp;&nbsp;<ListItemMeta title="书名:我要飞升啊啊啊啊" description="作者:哈哈哈哈" />
                </ListItem>
              </List>
            </Row>
          </Col>
          <Col :xs="2" :lg="8">&nbsp;</Col>
        </Col>
      </Row>
      <Row class="room-nav">
        <Col :xs="0" :lg="4">&nbsp;</Col>
        <Col :xs="24" :lg="16">
          <Col :xs="6" :lg="6" class="room-nav-div">
            <Icon type="md-home" />
            <font class="room-nav-font">首页</font>
          </Col>
          <Col :xs="6" :lg="6" class="room-nav-div">
            <Icon type="ios-keypad" />
            <font class="room-nav-font">分类</font>
          </Col>
          <Col :xs="6" :lg="6" class="room-nav-div">
            <Icon type="md-barcode" />
            <font class="room-nav-font">排行</font>
          </Col>
          <Col :xs="6" :lg="6" class="room-nav-div">
            <Icon type="ios-bookmarks" />
            <font class="room-nav-font">完本</font>
          </Col>
        </Col>
        <Col :xs="0" :lg="4">&nbsp;</Col>
      </Row>
  </div>
</template>

<script>
    export default {
        name: "StackRoom",
        data () {
          return {

          }
        },
        created(){
          document.getElementsByTagName('body')[0].style.background= '#ffffff'; //设置为新的
        },
    }
</script>

<style scoped>
  .room-search >>> .ivu-input-default {
    height: 2.5rem;
  }
  .room-search >>> .ivu-icon-ios-search {
    font-size: 1.4rem;
    margin-top: 2px;
  }
  .room-nav {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    line-height: 3.5rem;
    text-align: center;
    background: #f5f5f5;
    height: 4rem;
    border-top: 1px solid #c1c1c1;
  }
  .room-nav-font {
    position: absolute;
    bottom: -1.3rem;
    right: 0;
    left: 0;
  }
  .room-nav-div {
    position: relative;
  }
  .room-nav-div i {
    font-size: 2rem;
  }
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
