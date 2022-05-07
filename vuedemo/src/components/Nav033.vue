<template>
  <div class="top_nav">
    <div class="wrap">
      <ul>
        <li v-for="(item, index) in nav_list" :key="index">
          <a href="#">{{ item }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nav_list"],
};
</script>

<style scoped>
* {
    margin: 0px;
    padding: 0px;
}

ul {
    list-style-type: none;
}

.top_nav {
    width: 100%;
    height: 50px;
  background-color: cadetblue;
}

.wrap{
    width: 1000px;
    height: 50px;
    margin: 0px auto;
}

.wrap li {
  float: left;
}

.wrap a {
    display: block;
    width: 75px;
    height: 50px;
    line-height: 50px;
    color: black;
    text-decoration: none;
}

.wrap a:hover {
    background-color: aqua;
}
</style>