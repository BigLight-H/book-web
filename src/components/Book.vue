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
      <a class="book-left-list">Some contentsd11111ddddddddddd111111</a>
      <a class="book-left-list">Some contents...</a>
      <a class="book-left-list">Some contents...</a>
      <a class="book-left-list">Some contents...</a>
      <a class="book-left-list">Some contents...</a>
      <a class="book-left-list">Some contents...</a>
    </Drawer>
    <Drawer title="设置" :closable="false" v-model="value2">
      <b class="book-latel">背景主题</b>
      <Row>
        <Col class="book-color" span="6" style="background-color: #feecdc;" id="book-color-1" @onclick="changeBookColor(1)">
          <div class="book-color-div"><Icon type="ios-checkmark" size="33" style="margin-top: 2px;"/></div>
        </Col>
        <Col class="book-color" span="6" style="background-color: #fdf6b2;"></Col>
        <Col class="book-color" span="6" style="background-color: #f3faf7;"></Col>
        <Col class="book-color" span="6" style="background-color: #edfafa;"></Col>
        <Col class="book-color" span="6" style="background-color: #ebf5ff;"></Col>
        <Col class="book-color" span="6" style="background-color: #f0f5ff;"></Col>
        <Col class="book-color" span="6" style="background-color: #f6f5ff;"></Col>
        <Col class="book-color" span="6" style="background-color: #838192;"></Col>
      </Row>
      <b class="book-latel1">字体样式</b>
      <Row>
        <Col span="24" style="padding-left: 1rem;">
          <RadioGroup v-model="button1" type="button">
            <Radio label="北京"></Radio>
            <Radio label="上海"></Radio>
            <Radio label="深圳"></Radio>
          </RadioGroup>
        </Col>
      </Row>
      <b class="book-latel1">字体大小</b>
      <Row>
        <Col span="3">&nbsp;</Col>
        <Col span="6" class="book-font-style">111</Col>
        <Col span="6" class="book-font-style1">111</Col>
        <Col span="6" class="book-font-style2">111</Col>
        <Col span="3">&nbsp;</Col>
      </Row>
      <b class="book-latel1">字体行高</b>
      <Row>
        <Col span="3">&nbsp;</Col>
        <Col span="6" class="book-font-style">111</Col>
        <Col span="6" class="book-font-style1">111</Col>
        <Col span="6" class="book-font-style2">111</Col>
        <Col span="3">&nbsp;</Col>
      </Row>
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
        value2: false,
        button1: '北京',
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
      },
      changeBookColor(n) {
        for (let i = 1; i <9 ; i++) {
          document.getElementById('book-color-'+i).innerText='';
        }
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
  .book-left-list {
    border-bottom: 1px dashed #bdbdbd;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    color: #808695;
  }
  .book-color {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 1rem;
    margin-top: .5rem;
    position: relative;
  }
  .book-font-style {
    border-left: 1px solid;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-radius: 5px 0 0 5px;
    text-align: center;
    height: 2rem;
    line-height: 1.8rem;
  }
  .book-font-style1 {
    border: 1px solid;
    text-align: center;
    height: 2rem;
    line-height: 1.8rem;
  }
  .book-font-style2 {
    border-right: 1px solid;
    border-top: 1px solid;
    border-bottom: 1px solid;
    border-radius: 0 5px 5px 0;
    text-align: center;
    height: 2rem;
    line-height: 1.8rem;
  }
  .book-latel {
    font-size: 1rem;
    font-weight: bold;
  }
  .book-latel1 {
    font-size: 1rem;
    font-weight: bold;
    margin: .6rem 0;
    display: block;
  }
  .book-color-div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #ff000000;
    border-radius: 50%;
  }
</style>

