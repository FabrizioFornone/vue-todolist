/* MILESTONE 1
Stampare all’interno di una lista, un item per ogni todo.
 Se la proprietà done è uguale a true, visualizzare il testo
  del todo sbarrato.
MILESTONE 2
Visualizzare a fianco ad ogni item ha una “x”: cliccando su
 di essa, il todo viene rimosso dalla lista.
MILESTONE 3
Predisporre un campo di input testuale e un pulsante 
“aggiungi”: cliccando sul pulsante, il testo digitato viene
 letto e utilizzato per creare un nuovo todo, che quindi viene
  aggiunto alla lista dei todo esistenti.
  Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER
 per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà
 done del todo corrispondente
 (se done era uguale a false, impostare true e viceversa) */

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
      //pusho nell'array l'oggetto
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
    changeStatus: function (item) {
      item.done = !item.done;
    },
  },
});
