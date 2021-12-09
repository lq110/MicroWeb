<template>
  <div class="wrap">
    <h1>state:{{$store.state.globalState.name}}</h1>
 
    <button @click="handleInfo">操作</button>
    <main id="app1" class="main"></main>
  </div>
</template>
<script>
import actions from "./plugin/state";
export default {
 
 
  methods: {
    handleInfo() {
      actions.setGlobalState({
        name: "lq123",
      });
  
    },
  },
 
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.wrap {
  width: 100vw;
  height: 100vh;
}

.main {
  width: 50vw;
  height: 50vh;
  border: 1px solid green;
}
</style>
