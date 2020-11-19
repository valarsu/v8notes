<template>
  <van-collapse v-model="activeName" accordion>
    <van-collapse-item title="运行时环境" name="1">
      <van-cell title="栈溢出">
        <template #right-icon>
          <van-icon name="play-circle-o" class="icon" color="#ff5252" @click="runDemo1" />
        </template>
      </van-cell>
      <van-cell title="栈结构">
        <template #right-icon>
          <van-icon name="play-circle-o" class="icon" color="#ff5252" @click="runDemo2" />
        </template>
      </van-cell>
    </van-collapse-item>
    <van-collapse-item title="堆栈" name="2">
      <van-cell title="setTimeout处理">
        <template #right-icon>
          <van-icon name="play-circle-o" class="icon" color="#ff5252" @click="runDemo3" />
        </template>
      </van-cell>
      <van-cell title="promise处理">
        <template #right-icon>
          <van-icon name="play-circle-o" class="icon" color="#ff5252" @click="runDemo4" />
        </template>
      </van-cell>
    </van-collapse-item>
    <van-collapse-item title="惰性解析" name="3">
      <van-cell title="惰性解析">
        <template #right-icon>
          <van-icon name="play-circle-o" class="icon" color="#ff5252" @click="runDemo5" />
        </template>
      </van-cell>
      <van-cell title="闭包对惰性解析的影响">
        <template #right-icon>
          <van-icon name="play-circle-o" class="icon" color="#ff5252" @click="runDemo6" />
        </template>
      </van-cell>
    </van-collapse-item>
  </van-collapse>
</template>
<script>
import { ref, isRef } from "vue";
export default {
  data() {
    return {
      activeName: "1",
    };
  },
  setup(props, context) {
    let count = ref("");
    // 栈溢出
    const runDemo1 = (num) => {
      try {
        function foo() {
          foo(); // 是否存在堆栈溢出错误?
        }
        foo();
      } catch (e) {
        console.log(e);
      }
    };
    const runDemo2 = (num) => {
      try {
        var x = 1;
        function show_x() {
          console.log(x);
        }
        function bar() {
          show_x();
        }
        bar();
      } catch (e) {
        console.log(e);
      }
    };
    // 栈溢出
    const runDemo3 = (num) => {
      try {
        function foo() {
          setTimeout(foo, 0); // 是否存在堆栈溢出错误?
        }
        foo();
      } catch (e) {
        console.log(e);
      }
    };
    const runDemo4 = (num) => {
      try {
        function foo() {
          Promise.resolve().then(foo); // 是否存在堆栈溢出错误?
        }
        foo();
      } catch (e) {
        console.log(e);
      }
    };
    const runDemo5 = (num) => {
      try {
        function foo(a, b) {
          var d = 100;
          var f = 10;
          return d + f + a + b;
        }
        var a = 1;
        var c = 4;
        console.log(foo(1, 5));
      } catch (e) {
        console.log(e);
      }
    };
    const runDemo6 = (num) => {
      try {
        function foo() {
          var d = 20;
          return function inner(a, b) {
            const c = a + b + d;
            return c;
          };
        }
        const f = foo();
        console.log(f(1, 5));
      } catch (e) {
        console.log(e);
      }
    };
    return {
      count, // ref返回的是一个响应式的对象
      runDemo1,
      runDemo2,
      runDemo3,
      runDemo4,
      runDemo5,
    };
  },
};
</script>
<style>
.icon {
  font-size: 16px !important;
  line-height: inherit !important;
}
</style>
