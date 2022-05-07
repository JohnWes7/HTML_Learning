<template>
  <div class="tg">
    <ul>
      <li @click="ToggleClick(index)" v-for="(item, index) in times" v-bind:key="index" v-bind:class="{'active':SelectIndex === index}">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"ToggleGroup",
  data() {
    return {
      times: ["一个月", "三个月", "六个月", "一年"],
      SelectIndex: -1,
    };
  },
  methods: {
      ToggleClick(index){
          this.SelectIndex = index;
      }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

ul {
    list-style-type: none;
}

.tg {
    display: inline-block;
}

.tg ul li{
    display: inline-block;
    border: 1px solid #e3e3e3;
    border-radius: 4px;
    width: 70px;
    height: 25px;
    line-height: 25px;
    margin: 0 5px;

    cursor: pointer;  /* 鼠标指针变为可点击 */
    text-align: center;
}

.active {
    border-color: #4fc08d;
    background-color: #4fc08d;
    color: white;
}
</style>