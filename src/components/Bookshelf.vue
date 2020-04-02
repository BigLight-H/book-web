<template>
  <div>
    <book-nav></book-nav>
    <Row>
      <Col span="24" class="book-my-bookshelf tracking-in-expand-fwd">My Bookshelf</Col>
    </Row>
    <Row class="bookshelf-box">
      <Col :xs="{ span: 5 }" :md="{ span: 4}">
        <div>
          <Badge :count="3" class="swing-in-bottom-bck">
            <img src="https://bkimg.cdn.bcebos.com/pic/72f082025aafa40fdd59b789a464034f79f019c2?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg" alt="" class="demo-badge">
            <p class="bookshelf-title">hahah22222222222222222222222222222222222222222222222</p>
          </Badge>
        </div>
      </Col>
      <Col :xs="{ span: 5, offset: 1 }" :md="{ span: 4, offset: 2 }">
        <div>
          <Badge :count="3" class="swing-in-bottom-bck">
            <img src="https://bkimg.cdn.bcebos.com/pic/72f082025aafa40fdd59b789a464034f79f019c2?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg" alt="" class="demo-badge">
            <p class="bookshelf-title">hahah22222222222222222222222222222222222222222222222</p>
          </Badge>
        </div>
      </Col>
      <Col :xs="{ span: 5, offset: 1 }" :md="{ span: 4, offset: 2 }">
        <div>
          <Badge :count="3" class="swing-in-bottom-bck">
            <img src="https://bkimg.cdn.bcebos.com/pic/72f082025aafa40fdd59b789a464034f79f019c2?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg" alt="" class="demo-badge">
            <p class="bookshelf-title">hahah22222222222222222222222222222222222222222222222</p>
          </Badge>
        </div>
      </Col>
      <Col :xs="{ span: 5, offset: 1 }" :md="{ span: 4, offset: 2 }">
        <div>
          <Badge :count="3" class="swing-in-bottom-bck">
            <img src="https://bkimg.cdn.bcebos.com/pic/72f082025aafa40fdd59b789a464034f79f019c2?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg" alt="" class="demo-badge">
            <p class="bookshelf-title">hahah22222222222222222222222222222222222222222222222</p>
          </Badge>
        </div>
      </Col>
      <Col :xs="{ span: 5, offset: 0 }" :md="{ span: 4, offset: 0 }">
        <div>
          <Badge :count="3" class="swing-in-bottom-bck">
            <img src="https://bkimg.cdn.bcebos.com/pic/72f082025aafa40fdd59b789a464034f79f019c2?x-bce-process=image/resize,m_lfit,w_268,limit_1/format,f_jpg" alt="" class="demo-badge">
            <p class="bookshelf-title">hahah22222222222222222222222222222222222222222222222</p>
          </Badge>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
  import BookNav from "./BookNav";
    export default {
        name: "Bookshelf",
        components: {BookNav},
    }
</script>

<style scoped>
  .book-my-bookshelf {
    text-align: center;
    padding: 1rem 0;
    font-size: 3.3rem;
    font-family: fantasy;
    margin-bottom: 1rem;
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
    width: 347px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  @media screen and (max-width: 1024px) {
    .bookshelf-title {
      text-align: center;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      width: 160px;
    }
  }

  @media screen and (max-width: 768px) {
    .bookshelf-title {
      text-align: center;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      width: 121px;
    }
  }

  @media screen and (max-width: 414px) {
    .bookshelf-title {
      text-align: center;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      width: 80px;
    }
  }

  @media screen and (max-width: 375px) {
    .bookshelf-title {
      text-align: center;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      width: 72px;
    }
  }

  @media screen and (max-width: 320px) {
    .bookshelf-title {
      text-align: center;
      font-size: 12px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      width: 60px;
    }
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
