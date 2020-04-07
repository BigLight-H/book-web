<template>
  <div>
    <book-nav></book-nav>
    <Row style="margin-top: 3rem;">
      <Col span="24" class="book-my-bookshelf tracking-in-expand-fwd">My Bookshelf</Col>
    </Row>
    <Row class="bookshelf-box">
      <Col :xs="{ span: 22, offset: 1 }" :lg="{ span: 20, offset: 2 }">
        <Col :xs="{ span: 7}" :lg="{ span: 3}" style="position: relative;margin-bottom: 1rem;">
          <p class="bookshelf-title-num">3</p>
          <img src="http://www.vipzw.com/files/article/image/41/41902/41902s.jpg" alt="" class="demo-badge">
          <p class="bookshelf-title">hahah22222222222222222222222222222222222222222222222</p>
        </Col>
        <Col :xs="{ span: 1}" :lg="{ span: 1}">&nbsp;</Col>
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
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    padding: .3rem 0;
  }

  .bookshelf-title-num {
    width: 1.5rem;
    height: 1.5rem;
    background: #f74848;
    position: absolute;
    right: -9px;
    top: -9px;
    border-radius: 50%;
    text-align: center;
    line-height: 1.5rem;
    font-weight: bold;
    color: #fff;
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
