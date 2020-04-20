<template>
  <Row class="room-nav">
    <Col :xs="0" :lg="4">&nbsp;</Col>
    <Col :xs="24" :lg="16">
      <Col :xs="6" :lg="6" :class="list == 1 ? 'room-nav-div room-nav-div-s' : 'room-nav-div' ">
        <Icon type="md-home" />
        <font class="room-nav-font">首页</font>
      </Col>
      <Col :xs="6" :lg="6" :class="list == 2 ? 'room-nav-div room-nav-div-s' : 'room-nav-div' ">
        <Icon type="ios-keypad" />
        <font class="room-nav-font">分类</font>
      </Col>
      <Col :xs="6" :lg="6" :class="list == 3 ? 'room-nav-div room-nav-div-s' : 'room-nav-div' ">
        <Icon type="md-barcode" />
        <font class="room-nav-font">排行</font>
      </Col>
      <Col :xs="6" :lg="6" :class="list == 4 ? 'room-nav-div room-nav-div-s' : 'room-nav-div' ">
        <Icon type="ios-bookmarks" />
        <font class="room-nav-font">完本</font>
      </Col>
    </Col>
    <Col :xs="0" :lg="4">&nbsp;</Col>
  </Row>
</template>

<script>
    export default {
        name: "RoomNav",
        props: {
          list:Number
        },
    }
</script>

<style scoped>
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
  .room-nav-div-s {
    color: #4b9cf2;
  }
</style>
