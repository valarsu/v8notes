<template>
  <h1>运行时环境</h1>
  <div>
    栈溢出：<button @click="runDemo1">运行</button>
    {{count}}
  </div>
</template>
<script>
import { ref, isRef } from "vue";
export default {
  setup(props, context) {
    let count = ref('');
    console.log(count.value); //0 ，  内部获取时需要用.value来获取
    console.log(isRef(count)); //true   //isRef() 用来判断是不是ref对象 
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
    return {
      count, // ref返回的是一个响应式的对象
      runDemo1,
    };
  },
};
</script>
<style>
</style>

