<template>
  <div id="app">
    <h1>子应用</h1>
    <h1
      @click="() => handClick(item)"
      v-for="item in ['Home', 'About']"
      :key="item"
    >
      {{ item }}
    </h1>
    <router-view />
  </div>
</template>
<script>
export default {
  methods: {
    handClick(item) {
      console.log(this.$route);

      if (item == this.$route.name) return;
      this.$router.push({
        name: item,
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
