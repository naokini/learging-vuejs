Vue.createApp({
  data() {
    return {
      current: new Date()
    };
  },
  created() {
    this.timer = setInterval(() => {
      this.current = new Date;
    }, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },
  // renderTracked(e) {
  //   console.log('renderTracked');
  //   console.log(e);
  // },
  // renderTriggered(e) {
  //   console.log('renderTriggered');
  //   console.log(e);
  // }
}).mount('#app');

// ビューの更新は非同期らしい
Vue.createApp({
  data() {
    return {
      message: 'Hello.'
    };
  },
  mounted() {
    this.message = 'Nice to meet you.';
    this.$nextTick(() => {
      console.log(this.$el.textContent.includes(this.message));
    });
  }
}).mount('#async')
