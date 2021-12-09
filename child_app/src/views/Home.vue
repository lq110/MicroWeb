<template>
  <div>
    <h1 class="home">Home页</h1>
    <button @click="handleClick">修改全局状态</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  methods: {
    handleClick() {
      this.$store.state.globalInstan.setGlobalState({
        name: "子组件修改",
      });
    },
  },
};
</script>
