new Vue({
  el: "#app",
  data: {
    todo: [
      {
        text: "Fare i compiti",
        done: false,
      },
      {
        text: "Fare la spesa",
        done: true,
      },
      {
        text: "Fare il bucato",
        done: false,
      },
    ],
    temporaryItem: "",
  },
  methods: {
    addItem: function () {
      //pusho nell'array l'oogetto
      this.todo.push({
        text: this.temporaryItem,
        done: false,
      });
      //svuoto dopo il push
      this.temporaryItem = "";
    },
    removeItem: function (index) {
      this.todo.splice(index, 1);
    },
    changeStatus: function () {
      if (this.item.done === true) {
        this.item.done = false;
      } else {
        this.item.done = true;
      }
    },
  },
});
