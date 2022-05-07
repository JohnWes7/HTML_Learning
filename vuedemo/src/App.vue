<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <Nav033 v-bind:nav_list="nav_list" />

    <!-- “:” 是指令 “v-bind”的缩写，“@”是指令“v-on”的缩写；“.”是修饰符 -->
    <!-- 数据传递发数据 父传子 -->
    <Component03 :content="h1" @onEvent="GetChildMessage" />
    <!-- 子传父 -->

    <ToggleGroup034 />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Component03 from "./components/Component033.vue";
import Nav033 from "./components/Nav033.vue";
import ToggleGroup034 from "./components/ToggleGroup034.vue";

export default {
  data() {
    return {
      h1: "第1个组件数据",
      h2: "第B个组件数据",
      nav_list: ["CV", "BB", "DD", "CL", "CA", "SS"],
    };
  },
  name: "App",
  components: {
    HelloWorld,
    Component03,
    Nav033,
    ToggleGroup034,
  },
  methods: {
    GetChildMessage(data_a, data_b) {
      console.log(data_a + " " + data_b);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0px;
  padding: 0px;
}
</style>
