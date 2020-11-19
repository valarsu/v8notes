<template>
  <div class="app">
    <van-nav-bar
      title="V8"
      left-arrow
    />
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  setup(props) {
    const onClickLeft = () => {
      Toast('返回');
    }
    const onClickRight = () => {
      Toast('按钮');
    }
    return {
      onClickLeft,
      onClickRight,
    }
  }
}
</script>
