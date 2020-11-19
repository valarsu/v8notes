<template>
  <van-nav-bar
    title="V8"
    left-text="返回"
    left-arrow
  />
  <van-collapse v-model="activeName" accordion>
    <van-collapse-item title="运行时环境" name="1">
      <van-cell title="栈溢出">
        <template #right-icon>
          <van-icon name="play-circle-o" class="icon" color="#ff5252" @click="runDemo1"/>
        </template>
      </van-cell>
      <van-cell title="栈结构">
        <template #right-icon>
          <van-icon name="play-circle-o" class="icon" color="#ff5252" @click="runDemo2"/>
        </template>
      </van-cell>
    </van-collapse-item>
    <van-collapse-item title="标题2" name="2">内容</van-collapse-item>
    <van-collapse-item title="标题3" name="3">内容</van-collapse-item>
  </van-collapse>
</template>
<script>
import { ref, isRef } from "vue";
export default {
  data() {
    return {
      activeName: '1',
    }
  },
  setup(props, context) {
    let count = ref('');
    // 栈溢出
    const runDemo1 = (num) => {
      try {
        function factorial(n){
          if(n === 1) {return 1;}
            return n*factorial(n-1);
        }
        console.log(factorial(50000))
      } catch (e) {
        console.log(e)
      }
    }
    const runDemo2 = (num) => {
      try {
        var x = 1
        function show_x(){
            console.log(x)
        }
        function bar(){
          show_x（）
        }
        bar()
      } catch (e) {
        console.log(e)
      }
    }
    return {
      count, // ref返回的是一个响应式的对象
      runDemo1,
      runDemo2,
    };
  },
};
</script>
<style>
.icon {
  font-size: 16px;
  line-height: inherit;
}
</style>

