<template>
  <ButtonGroup vertical style="position: fixed;right: 2.3rem;bottom: 7rem;" @click.native="goBookRoom()">
    <Button icon="ios-home"></Button>
  </ButtonGroup>
</template>

<script>
    export default {
        name: "BackHome",
        methods: {
          goBookRoom() {
            this.$router.push({ path:'/' })
          }
        }
    }
</script>

<style scoped>

</style>
