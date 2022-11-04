Vue.createApp({
  data() {
    return {
      name: '',
      upperName: ''
    };
  },
  created() {
    this.delayFunc = _.debounce(this.getUpper, 2000);
    // watchオプションの代わり$watchメソッドでもいい↓
    // this.unwatch = this.$watch(
    //   'name', (newValue, oldValue) => this.delayFunc()
    // )
  },
  watch: {
    name(newValue, oldValue) {
      this.delayFunc();
    }
  },
  methods: {
    getUpper() {
      this.upperName = this.name.toUpperCase();
    }
  }
}).mount('#app');
