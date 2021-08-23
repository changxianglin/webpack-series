var vm = new MVVM({
  el: "#mvvm-app",
  data: {
    word: "Hello World!",
  },
  methods: {
    sayHi: function () {
      this.word = "Hi, everybody!";
    },
  },
});
