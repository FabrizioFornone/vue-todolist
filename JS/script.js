new Vue({
  el: "#app",
  data: {
    todo: ["Fare i compiti", "Fare la spesa", "Fare il bucato"],
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
