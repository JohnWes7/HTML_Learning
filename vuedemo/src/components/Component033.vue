<template>
    <div>
        <h3>{{content}}</h3>
        <button @click="SendMsg2Parent">发送数据给父级</button>
    </div>
</template>

<script>
// 数据传递接收数据 父传子 props
export default {
    props:["content"],
    data(){
        return{
            msg033a:"发送给父级的数据a",
            msg033b:"发送给父级的数据b"
        }
    },
    methods:{
        SendMsg2Parent(){
            // 数据子传父 自定义事件 onEvent是key
            this.$emit("onEvent", this.msg033a, this.msg033b)
        }
    }
}
</script>

<style scoped>

</style>