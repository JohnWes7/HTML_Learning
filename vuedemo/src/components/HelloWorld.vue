<template>
  <div class="hello">
    <p>hello,{{ name }}</p>
    <p>{{ alink }}</p>
    <p v-html="alink"></p>

    <!-- v-if指令 -->
    <p v-if="age >= 18">R18 mode</p>
    <p v-else>safe mode</p>

    <!-- 列表渲染 -->
    <ul>
      <li v-for="(item,index) in list" :key="index">{{index}} {{item}}</li>
    </ul>

    <!-- 事件处理 v-on可以替换为@ -->
    <button v-on:click="clickHandle">click</button>
    <button @click="clickHandle">click</button>
    <!-- 传递参数事件 -->
    <ul>
      <li @click="clickHandle1(item)" v-for="(item,index) in list" :key="index">{{index}} {{item}}</li>
    </ul>

    <!-- 双向数据绑定 -->
    <dir>
      <input type="text" v-model="msg">
      <p>{{msg}}</p>
    </dir>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "johnwest",
      alink: "<a href='https://www.bilibili.com/'>pilipili</a>",
      age: 18,
      list: [10,22,35,68,9],
      msg:""
    };
  },
  methods:{
    clickHandle(){
      this.list.push("johnwest");
    },
    clickHandle1(item){
      console.log(item);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
