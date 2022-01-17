new Vue({
  el: "#app",
  data: {
    todo: [
      {
        text: "fare i compiti",
        done: false,
      },
      {
        text: "fare la spesa",
        done: true,
      },
      {
        text: "fare il bucato",
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
