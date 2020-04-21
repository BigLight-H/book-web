<template>
  <ButtonGroup vertical style="position: fixed;right: 2.3rem;bottom: 7rem;" >
    <Button icon="ios-bookmarks-outline" @click="goBookRoom" style="background: rgba(212, 212, 212, 0.30196078431372547);"></Button>
    <Button icon="ios-arrow-up" @click="backTop" style="background: rgba(212, 212, 212, 0.30196078431372547);"></Button>
  </ButtonGroup>
</template>

<script>
    export default {
        name: "BackHome",
        data() {
          return {
            scrollTop: ''
          }
        },
        methods: {
          handleScroll() {
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          },
          goBookRoom() {
            this.$router.push({ path:'/' })
          },
          backTop() {
            let timer = null,
              _that = this;
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(function fn() {
              if (_that.scrollTop > 0) {
                _that.scrollTop -= 100;
                document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
                timer = requestAnimationFrame(fn)
              } else {
                cancelAnimationFrame(timer);
              }
            })
          }
        },
        mounted() {
          window.addEventListener('scroll', this.handleScroll);
        },
        destroyed() {
          window.removeEventListener('scroll', this.handleScroll)
        }
    }
</script>

<style scoped>

</style>
