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
    <Row class="book-floor" id="book-floor">
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
        <div @click="changeBookColor(1, 'color-1', '#dec9b7')">
          <Col class="book-color" span="6" style="background-color: #feecdc;" id="book-color-1">
            <div class="book-color-div"><img :src="imgUrl_require" alt=""></div>
          </Col>
        </div>
        <div @click="changeBookColor(2, 'color-2', '#e2db92')">
          <Col class="book-color" span="6" style="background-color: #fdf6b2;" id="book-color-2"></Col>
        </div>
        <div @click="changeBookColor(3, 'color-3', '#c5f1de')">
          <Col class="book-color" span="6" style="background-color: #f3faf7;" id="book-color-3"></Col>
        </div>
        <div @click="changeBookColor(4, 'color-4', '#b1e0e0')">
          <Col class="book-color" span="6" style="background-color: #edfafa;" id="book-color-4"></Col>
        </div>
        <div @click="changeBookColor(5, 'color-5', '#b4d1ef')">
          <Col class="book-color" span="6" style="background-color: #ebf5ff;" id="book-color-5"></Col>
        </div>
        <div @click="changeBookColor(6,'color-6', '#bdccea')">
          <Col class="book-color" span="6" style="background-color: #f0f5ff;" id="book-color-6"></Col>
        </div>
        <div @click="changeBookColor(7, 'color-7', '#c9c7e2')">
          <Col class="book-color" span="6" style="background-color: #f6f5ff;" id="book-color-7"></Col>
        </div>
        <div @click="changeBookColor(8, 'color-8', '#9d9ab1')">
          <Col class="book-color" span="6" style="background-color: #838192;" id="book-color-8"></Col>
        </div>
      </Row>
      <b class="book-latel1">字体样式</b>
      <Row>
        <Col span="3">&nbsp;</Col>
        <Col span="6" class="book-font-style">111</Col>
        <Col span="6" class="book-font-style1">111</Col>
        <Col span="6" class="book-font-style2">111</Col>
        <Col span="3">&nbsp;</Col>
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
        imgUrl_require: require('.././assets/img/ok.png')
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
      },
      changeBookColor(n, color, str) {//修改主题
        for (let i = 1; i < 9 ; i++) {
          document.getElementById('book-color-'+i).innerHTML='';
        }
        let html = '<div class="book-color-div"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXUlEQVRYR2NkGGDAOMD2M4w6YDQERkNgeIZA6yytsN9//qxkYWF+XpN2XQpfWUP1EGido9nBzccWLacsLHP9wvM31cnXRenmgJa5mpsFBDlMpeQFxR/cfPPu65efq2vTbmbQxQHNszVuiEnySohK8vK/fPrx59tX30/XpFyzJVTUE4yChukaCqwsDJt///6n05B1C0N9wxxtIeZ/fy9LKQiKCwpzMn98953hyb33zxl/M1rW5Fx/SLEDmmaovZCUFxT//fPP/3dvvp6tSblhCjO0YaqGFQs74wo5JUFZHn4Ohn9//zFcOfP0P+N/Juf67Jv7CVkOkscbAg2TVRxYudnWa+pLCIAUP7n3/ufH999u1abd1GuYop7EzsVcJ6ciLM/JzQq268aF559///hXWJ99cy4xlhN0QMt0NWkBcZ4jUvICCjADnz78+Ondq89POLlYeeRVReRY2ZjBUvdvvvn8/cuvhTVpN3KJtZygA0AK2udpr+MT5PCXlONnghn88uknBnEpPnj4fXz7neHpo4+HalKu2ZNiOVEOaGhgYGKV1boqoyigwcvPgWH+z++/Ge5df/3k979/hg3pt95Q3QEgAxsmq2kwszOd1jaW5EFPNpdPPfn7n4HBqiHz1ilSLScqBOApfpq6HzMr40ptIyl4MFw/9/z7z1+/U5uy7ywlx3KSHABS3DpPq4ebhy1LTlmI8/WLz5/fvvg8vyr5Rj65lpPsAEii1DrAws6s9evH3+vVyaQnOnTHEiwJsfmucZp6aH3WzdWU+BymlywHUMPiUQeMhsBoCAyaEAAAAcXOIetGxVwAAAAASUVORK5CYII=" alt=""></div>';
        document.getElementById('book-color-'+n).innerHTML = html;
        document.getElementById('book-floor').style.background = str;
        document.getElementsByTagName('body')[0].className = color; //设置为新的
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
    background: #feecdc;
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
    text-align: center;
    padding-top: 3px;
  }
  .color-1 {
    background: #feecdc;
  }
  .color-2 {
    background: #fdf6b2;
  }
  .color-3 {
    background: #f3faf7;
  }
  .color-4 {
    background: #edfafa;
  }
  .color-5 {
    background: #ebf5ff;
  }
  .color-6 {
    background: #f0f5ff;
  }
  .color-7 {
    background: #f6f5ff;
  }
  .color-8 {
    background: #838192;
  }
</style>

