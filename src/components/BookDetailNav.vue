<template>
  <Row style="background: white;height: 3rem;" id="book-content-nav">
    <Col :xs="{ span: 6, offset: 1 }" :lg="{ span: 2, offset: 3 }" style="padding-top: .7rem;">
      <Icon type="ios-arrow-back" size="25" @click="back"/>
    </Col>
    <Col :xs="{ span: 6, offset: 11 }" :lg="{ span: 2, offset: 16 }" style="padding-top: .7rem;display: flex;">
      <Icon type="ios-book" size="25" style="margin-top: .1rem;" @click="bookshelf"/>
      &nbsp;&nbsp;
      <Icon type="md-home" size="25" @click="home"/>
    </Col>
  </Row>
</template>

<script>
    export default {
        name: "BookDetailNav",
        methods:{
          back(){
            this.confirm();
          },
          home(){
            this.$router.push({ path:'/' })
          },
          bookshelf(){
            this.$router.push({ path:'/bookshelf' })
          },
          confirm () {
            this.$Modal.confirm({
              title: 'Title',
              content: '<p>Content of dialog</p><p>Content of dialog</p>',
              onOk: () => {
                this.$router.go(-1);//返回上一层
              },
              onCancel: () => {
                this.$router.go(-1);//返回上一层
              }
            });
          }
        }
    }
</script>

<style scoped>

</style>
