<template>
  <div>
    <book-detail-nav></book-detail-nav>
    <Row class="book-content" id="book-content">
        <h3 class="book-detail-title">{{ book_title }}</h3>
        <Col :xs="{ span: 2}" :lg="{ span: 4}">&nbsp;</Col>
        <Col :xs="{ span: 20}" :lg="{ span: 16}" class="book-content-child">
          <tbody v-html="content">{{ content }}</tbody>
        </Col>
        <Col :xs="{ span: 2}" :lg="{ span: 4}">&nbsp;</Col>

        <BackTop :height="100" :bottom="74">
          <div class="top" @click="backTop">
            <Icon type="ios-arrow-up"  style="margin-top: -7px;margin-left: -9px;"/>
          </div>
        </BackTop>
    </Row>
    <Row class="book-floor" id="book-floor">
      <Col :xs="{ span: 5, offset: 1 }" :lg="{ span: 5, offset: 6  }" class="book-page">
        <Button type="info" @click="sPage()">上一章</Button>
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
        <Button type="info" @click="xPage()">下一章</Button>
      </Col>
    </Row>
    <Drawer title="全部章节" placement="left" :closable="false" v-model="value1">
      <div class="drawer-icons" @click="dataReverse"><Icon type="md-swap" /></div>
      <a class="book-left-list" v-for="(item,index) in list" :key="index" @click="jumpBookDetail(item.id, item.link)">{{ item.name }}</a>
    </Drawer>
    <Drawer title="设置" :closable="false" v-model="value2">
      <b class="book-latel">背景主题</b>
      <Row>
        <div @click="changeBookColor(1, '#fff8f1', '#feecdc')">
          <Col class="book-color" span="6" style="background-color: #fff8f1;" id="book-color-1">
            <div class="book-color-div"><img :src="imgUrl_require" alt=""></div>
          </Col>
        </div>
        <div @click="changeBookColor(2, '#fdf6b2', '#e2db92')">
          <Col class="book-color" span="6" style="background-color: #fdf6b2;" id="book-color-2"></Col>
        </div>
        <div @click="changeBookColor(3, '#f3faf7', '#c5f1de')">
          <Col class="book-color" span="6" style="background-color: #f3faf7;" id="book-color-3"></Col>
        </div>
        <div @click="changeBookColor(4, '#edfafa', '#b1e0e0')">
          <Col class="book-color" span="6" style="background-color: #edfafa;" id="book-color-4"></Col>
        </div>
        <div @click="changeBookColor(5, '#ebf5ff', '#b4d1ef')">
          <Col class="book-color" span="6" style="background-color: #ebf5ff;" id="book-color-5"></Col>
        </div>
        <div @click="changeBookColor(6,'#f0f5ff', '#bdccea')">
          <Col class="book-color" span="6" style="background-color: #f0f5ff;" id="book-color-6"></Col>
        </div>
        <div @click="changeBookColor(7, '#f6f5ff', '#c9c7e2')">
          <Col class="book-color" span="6" style="background-color: #f6f5ff;" id="book-color-7"></Col>
        </div>
        <div @click="changeBookColor(8, '#838192', '#9d9ab1')">
          <Col class="book-color" span="6" style="background-color: #838192;" id="book-color-8"></Col>
        </div>
      </Row>
      <b class="book-latel1">字体样式</b>
      <Row>
        <Col span="3">&nbsp;</Col>
        <Col span="6" class="book-font-style"  id="book-font-style-0" ><font @click="changeFontamilyFont('Microsoft YaHei', 0)">默认</font></Col>
        <Col span="6" class="book-font-style1" id="book-font-style-1"><font @click="changeFontamilyFont('PZH', 1)">样式二</font></Col>
        <Col span="6" class="book-font-style2" id="book-font-style-2"><font @click="changeFontamilyFont('XWXKT', 2)">样式三</font></Col>
        <Col span="3">&nbsp;</Col>
      </Row>
      <b class="book-latel1">字体大小</b>
      <Row>
        <Col span="3">&nbsp;</Col>
        <Col span="6" class="book-font-style"><b @click="changeBookFontSizeSub(font_size)">A-</b></Col>
        <Col span="6" class="book-font-style1">{{ font_size }}</Col>
        <Col span="6" class="book-font-style2"><b @click="changeBookFontSizeAdd(font_size)">A+</b></Col>
        <Col span="3">&nbsp;</Col>
      </Row>
      <b class="book-latel1">字体行高</b>
      <Row>
        <Col span="3">&nbsp;</Col>
        <Col span="6" class="book-font-style"><b @click="changeBookFontHighSub(font_high)">H-</b></Col>
        <Col span="6" class="book-font-style1">{{ font_high }}</Col>
        <Col span="6" class="book-font-style2"><b @click="changeBookFontHighAdd(font_high)">H+</b></Col>
        <Col span="3">&nbsp;</Col>
      </Row>
      <b class="book-latel1">字体颜色</b>
      <Row>
        <Col span="9">&nbsp;</Col>
        <Col span="8">
          <ColorPicker v-model="color6" @on-change="setFontColor()" />
        </Col>
      </Row>
    </Drawer>
  </div>
</template>

<script>
  import BookDetailNav from "./BookDetailNav";
  import axios from "axios";
  axios.defaults.baseURL="/api";
  import qs from 'qs';
  export default {
    name: "Book",
    components: {BookDetailNav},
    data () {
      return {
        value1: false,
        value2: false,
        imgUrl_require: require('.././assets/img/ok.png'),
        color6: '#000000',
        content:'',
        x_page:'',
        s_page:'',
        id:'',
        list:{},
        font_size:15,
        font_high:18,
        book_title:'',
        list_link:''
      }
    },
    created(){
      let data = JSON.parse(sessionStorage.getItem('book_content'));//获取session
      this.id = data['id'];
      sessionStorage.setItem("bookshelf_data_links",data['link']);
      axios.get('/book/detail?time='+new Date().getTime(),{
        params:{
          id:data['id'],
          link:data['link']
        }
      }).then((response)=>{
        let res = response.data;
        this.content = res.data[0].content;
        this.x_page = res.data[0].x_page;
        this.s_page = res.data[0].s_page;
        this.book_title = res.data[0].name;
        this.list_link = res.data[0].list;
        this.saveBookLinks(data['link'], res.data[0].list);
        axios.get('/book/list?time='+new Date().getTime(),{
          params:{
            id:this.id,
            link:res.data[0].list
          }
        }).then((response)=>{
          let res_ = response.data;
          this.list = res_.data;
        });
      });
    },
    mounted: function () {
        window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
        let book_color = JSON.parse(localStorage.getItem('book_color'));//获取已经设置的背景
        if (book_color) {
          if (book_color['n']) {
            this.changeBookColor(book_color['n'], book_color['color'], book_color['str']);
          }
        }
        let bk_font = localStorage.getItem('book_detail_font');//获取已经设置的字体颜色
        if (bk_font) {
          document.getElementById('book-content').style.color = bk_font;
          this.color6 = bk_font;
        }
        let book_detail_fonts_family = JSON.parse(localStorage.getItem('book_detail_fonts_family'));//获取已经设置的字体样式
        if (book_detail_fonts_family) {
          if (book_detail_fonts_family['n']) {
            this.changeFontamilyFont(book_detail_fonts_family['font'], book_detail_fonts_family['n']);
          }
        }
        let fontSize = localStorage.getItem('book_detail_fonts_size');//修改字体大小
        if (fontSize) {
          document.getElementById("book-content").style.fontSize = fontSize+'px';
          this.font_size = fontSize;
        }
        let fontHigh = localStorage.getItem('book_detail_fonts_high');//修改字体行高
        if (fontHigh) {
          document.getElementById("book-content").style.lineHeight = fontHigh+'px';
          this.font_high = fontHigh;
        }
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
          $('.ivu-back-top').css('display','block');
        } else {
          document.getElementById('book-content-nav').style.display = 'block';
          document.getElementById('book-content').style.top = '3rem';
          $('.ivu-back-top').css('display','none');
        }

      },
      changeBookColor(n, color, str) {//修改主题
        for (let i = 1; i < 9 ; i++) {
          document.getElementById('book-color-'+i).innerHTML='';
        }
        let html = '<div class="book-color-div"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACXUlEQVRYR2NkGGDAOMD2M4w6YDQERkNgeIZA6yytsN9//qxkYWF+XpN2XQpfWUP1EGido9nBzccWLacsLHP9wvM31cnXRenmgJa5mpsFBDlMpeQFxR/cfPPu65efq2vTbmbQxQHNszVuiEnySohK8vK/fPrx59tX30/XpFyzJVTUE4yChukaCqwsDJt///6n05B1C0N9wxxtIeZ/fy9LKQiKCwpzMn98953hyb33zxl/M1rW5Fx/SLEDmmaovZCUFxT//fPP/3dvvp6tSblhCjO0YaqGFQs74wo5JUFZHn4Ohn9//zFcOfP0P+N/Juf67Jv7CVkOkscbAg2TVRxYudnWa+pLCIAUP7n3/ufH999u1abd1GuYop7EzsVcJ6ciLM/JzQq268aF559///hXWJ99cy4xlhN0QMt0NWkBcZ4jUvICCjADnz78+Ondq89POLlYeeRVReRY2ZjBUvdvvvn8/cuvhTVpN3KJtZygA0AK2udpr+MT5PCXlONnghn88uknBnEpPnj4fXz7neHpo4+HalKu2ZNiOVEOaGhgYGKV1boqoyigwcvPgWH+z++/Ge5df/3k979/hg3pt95Q3QEgAxsmq2kwszOd1jaW5EFPNpdPPfn7n4HBqiHz1ilSLScqBOApfpq6HzMr40ptIyl4MFw/9/z7z1+/U5uy7ywlx3KSHABS3DpPq4ebhy1LTlmI8/WLz5/fvvg8vyr5Rj65lpPsAEii1DrAws6s9evH3+vVyaQnOnTHEiwJsfmucZp6aH3WzdWU+BymlywHUMPiUQeMhsBoCAyaEAAAAcXOIetGxVwAAAAASUVORK5CYII=" alt=""></div>';
        document.getElementById('book-color-'+n).innerHTML = html;
        document.getElementById('book-floor').style.background = str;
        document.getElementById('book-content').style.background = color; //设置为新的
        localStorage.setItem('book_color', JSON.stringify({n:n,color:color,str:str}));
      },
      setFontColor() {
        document.getElementById('book-content').style.color = this.color6;
        localStorage.setItem('book_detail_font', this.color6);
      },
      sPage() {
        if (this.s_page !== this.list_link) {
          this.saveBookLinks(this.s_page, this.list_link);
          sessionStorage.setItem("bookshelf_data_links",this.s_page);
          axios.get('/book/detail?time='+new Date().getTime(),{
            params:{
              id:this.id,
              link:this.s_page
            }
          }).then((response)=>{
            let res = response.data;
            this.content = res.data[0].content;
            this.x_page = res.data[0].x_page;
            this.s_page = res.data[0].s_page;
            this.book_title = res.data[0].name;
          });
          let info = {link: this.s_page, id: this.id};
          sessionStorage.setItem("book_content",JSON.stringify(info));
          let scrollObj = document.getElementById("book-content"); // 滚动区域
          scrollObj.scrollTop = 0; // div 到头部的距离
        } else {
          this.$Message.warning('这是第一页');
        }
      },
      xPage() {
        if (this.x_page !== this.list_link) {
          this.saveBookLinks(this.x_page, this.list_link);
          sessionStorage.setItem("bookshelf_data_links",this.x_page);
          axios.get('/book/detail?time='+new Date().getTime(),{
            params:{
              id:this.id,
              link:this.x_page
            }
          }).then((response)=>{
            let res = response.data;
            this.content = res.data[0].content;
            this.x_page = res.data[0].x_page;
            this.s_page = res.data[0].s_page;
            this.book_title = res.data[0].name;
            this.list_link = res.data[0].list;
          });
          let info = {link: this.x_page, id: this.id};
          sessionStorage.setItem("book_content",JSON.stringify(info));
          let scrollObj = document.getElementById("book-content"); // 滚动区域
          scrollObj.scrollTop = 0; // div 到头部的距离
        } else {
          this.$Message.warning('这是最后一页');
        }
      },
      jumpBookDetail(id, link) {
        this.saveBookLinks(link, this.list_link);
        sessionStorage.setItem("bookshelf_data_links",link);
        axios.get('/book/detail?time='+new Date().getTime(),{
          params:{
            id:id,
            link:link
          }
        }).then((response)=>{
          let res = response.data;
          this.content = res.data[0].content;
          this.x_page = res.data[0].x_page;
          this.s_page = res.data[0].s_page;
          this.book_title = res.data[0].name;
          this.list_link = res.data[0].list;
        });
        let info = {link: link, id: id};
        sessionStorage.setItem("book_content",JSON.stringify(info));
        this.value1 = false;
        let scrollObj = document.getElementById("book-content"); // 滚动区域
        scrollObj.scrollTop = 0; // div 到头部的距离
      },
      changeFontamilyFont(font, n) {
        for (let i = 0; i < 3; i++) {
          document.getElementById("book-font-style-"+i).style.background = '#fff';
        }
        document.getElementById("book-font-style-"+n).style.background = '#bfbfbf';
        document.getElementById("book-content").style.fontFamily = font;
        let info = {font:font,n:n};
        localStorage.setItem('book_detail_fonts_family', JSON.stringify(info));
      },
      changeBookFontSizeSub(font) {
        let size = Number(font)-1;
        document.getElementById("book-content").style.fontSize = size+'px';
        this.font_size = size;
        localStorage.setItem('book_detail_fonts_size', size);
      },
      changeBookFontSizeAdd(font) {
        let size = Number(font)+1;
        document.getElementById("book-content").style.fontSize = size+'px';
        this.font_size = size;
        localStorage.setItem('book_detail_fonts_size', size);
      },
      changeBookFontHighAdd(high) {
        let hight = Number(high)+1;
        document.getElementById("book-content").style.lineHeight = hight+'px';
        this.font_high = hight;
        localStorage.setItem('book_detail_fonts_high', hight);
      },
      changeBookFontHighSub(high) {
        let hight = Number(high)-1;
        document.getElementById("book-content").style.lineHeight = hight+'px';
        this.font_high = hight;
        localStorage.setItem('book_detail_fonts_high', hight);
      },
      saveBookLinks(link,domain) {
        let token = localStorage.getItem('book_login_token');//获取token
        if (token){
          let postData = qs.stringify({
            link:link,
            domain:domain,
          });
          axios({
            method: 'post',
            url:'/user/books/update?time='+new Date().getTime(),
            data:postData,
            headers:{
              'Authorization':'Bearer '+token
            }
          });
        }
      },
      backTop() {
        let scrollObj = document.getElementById("book-content"); // 滚动区域
        scrollObj.scrollTop = 0; // div 到头部的距离
      },
      dataReverse() {
        this.list.reverse();
      }
    },
    destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll, true);   //  离开页面清除（移除）滚轮滚动事件
    }
  }
</script>

<style>
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
    font-family: Microsoft YaHei;
    font-size: 15px;
    line-height: 18px;
    background: #fff8f1;
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
    border-left: 1px solid #c5c5c5;
    border-top: 1px solid #c5c5c5;
    border-bottom: 1px solid #c5c5c5;
    border-radius: 5px 0 0 5px;
    text-align: center;
    height: 2rem;
    line-height: 1.8rem;
  }
  .book-font-style font {
    display: block;
  }
  .book-font-style b {
    display: block;
  }
  #book-font-style-0 {
    background: #bfbfbf;
  }
  .book-font-style1 {
    border: 1px solid #c5c5c5;
    text-align: center;
    height: 2rem;
    line-height: 1.8rem;
  }
  .book-font-style2 {
    border-right: 1px solid #c5c5c5;
    border-top: 1px solid #c5c5c5;
    border-bottom: 1px solid #c5c5c5;
    border-radius: 0 5px 5px 0;
    text-align: center;
    height: 2rem;
    line-height: 1.8rem;
  }
  .book-font-style2 font {
    display: block;
  }
  .book-font-style2 b {
    display: block;
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
  .book-detail-title {
    text-align: center;
    padding: 1rem;
  }
  .color-1 {
    background: #fff8f1;
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
  .top{
    padding: 10px;
    background: rgba(134, 135, 136, 0.7);
    color: #fff;
    text-align: center;
    border-radius: 2px;
    width: 3rem;
    height: 2.7rem;
  }
  .drawer-icons {
    position: fixed;
    background: #867f7f9e;
    right: 9rem;
    bottom: 2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 5px;
    text-align: center;
    line-height: 2rem;
    font-size: 1.2rem;
    color: #fff;
  }
</style>

