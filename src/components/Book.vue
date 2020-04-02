<template>
  <div>
    <book-nav></book-nav>
    <Row class="book-content" id="book-content">
        <Col :xs="{ span: 2}" :lg="{ span: 4}">&nbsp;</Col>
        <Col :xs="{ span: 20}" :lg="{ span: 16}" class="book-content-child" >
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
          <p>ddddddddddd</p>
        </Col>
        <Col :xs="{ span: 2}" :lg="{ span: 4}">&nbsp;</Col>
      </Row>
    <Row class="book-floor">
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 5, offset: 6  }" class="book-page">
        <Button type="info">上一章</Button>
      </Col>
      <Col :xs="{ span: 3, offset: 3 }" :lg="{ span: 1, offset: 0}" class="book-icon">
        <Icon type="md-list" size="18"  @click="value1 = true"/>
        <p  @click="value1 = true">目录</p>
      </Col>
      <Col :xs="{ span: 3, offset: 0 }" :lg="{ span: 1, offset: 0}" class="book-icon">
        <Icon type="ios-settings" size="18"  @click="value2 = true"/>
        <p  @click="value2 = true">设置</p>
      </Col>
      <Col :xs="{ span: 5, offset: 3 }" :lg="{ span: 5, offset: 4 }" class="book-page">
        <Button type="info">下一章</Button>
      </Col>
    </Row>
    <Drawer title="全部章节" placement="left" :closable="false" v-model="value1">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
    <Drawer title="设置" :closable="false" v-model="value2">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  </div>
</template>

<script>
  import BookNav from "./BookNav";
  export default {
    name: "Book",
    components: {BookNav},
    data () {
      return {
        value1: false,
        value2: false
      }
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
    },
    methods: {
      handleScroll: function () {
        let clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // 设备/屏幕高度
        let scrollObj = document.getElementById("book-content"); // 滚动区域
        let scrollTop = scrollObj.scrollTop; // div 到头部的距离
        // let scrollHeight = scrollObj.scrollHeight; // 滚动条的总高度
        //滚动条到底部的条件
        // if(scrollTop+clientHeight == scrollHeight){
        //   // div 到头部的距离 + 屏幕高度 = 可滚动的总高度
        //   console.log(scrollHeight)
        // }
        if (scrollTop > 0) {
          document.getElementById('book-content-nav').style.display = 'none';
          document.getElementById('book-content').style.top = '0';
        } else {
          document.getElementById('book-content-nav').style.display = 'block';
          document.getElementById('book-content').style.top = '3rem';
        }
        console.log(scrollTop)
      }
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);   //  离开页面清除（移除）滚轮滚动事件
    }
  }
</script>

<style>
  html,body {
    background-color: #fff8f1;
  }
  .book-floor {
    position: absolute !important;
    bottom: 0 !important;
    right: 0 !important;
    left: 0 !important;
    height: 3rem !important;
    background: #feecdc !important;
  }
  .book-page {
    padding: 7px 0;
  }
  .book-icon {
    text-align: center;
    padding: 5px 0 0 0;
  }
  .book-content {
    position: absolute !important;
    right: 0 !important;
    left: 0 !important;
    top:3rem;
    bottom: 3rem !important;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .book-content::-webkit-scrollbar {
    display: none !important;
  }
</style>

