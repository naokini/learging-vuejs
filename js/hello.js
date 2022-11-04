Vue.createApp({
  data: function() {
    return {
      message: 'Hello.',
      url: 'https://jp.vuejs.org/index.html',
      flag: true,
      email: 'Hoge-Fuga@example.com'
    }
  },
  computed: {
    localEmail: function() {
      return this.email.split('@')[0].toLowerCase();
    }
  },
  methods: {
    localEmailMethod: function() {
      return this.email.split('@')[0].toLowerCase();
    }
  }
}).mount('#hello')

Vue.createApp({
  data: function() {
    return {
      current: new Date().toLocaleString()
    };
  },
  computed: {
    randomc: function() {
      return Math.random();
    }
  },
  methods: {
    onclick: function() {
      this.current = new Date().toLocaleString();
    },
    randomm: function() {
      return Math.random();
    }
  }
}).mount('#method')

const circle = function(radius) {
  return radius * radius * Math.PI;
};
// 全部同じ↓
//
// const circle = (radius) => {
//   return radius * radius * Math.PI;
// }
//
// const circle = (radius) => radius * radius * Math.PI;
//
// const circle = radius => radius * radius * Math.PI;
// 引数ない場合は()省略不可
// const show = () => console.log('Hello.');
//
// ただし一般的にdata, computed, methods, ライフサイクルフックではアロー関数は使わない
