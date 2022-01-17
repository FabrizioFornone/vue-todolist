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
      //pusho nell'array
      this.todo.push(this.temporaryItem);
      //svuoto dopo il push
      this.temporaryItem = "";
    },
    removeItem: function (index) {
      console.log("Rimuovo l'elemento di indice: ", index);
      this.todo.splice(index, 1);
    },
  },
});
