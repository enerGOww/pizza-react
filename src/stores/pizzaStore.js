import axios from "axios"
import {action, computed, decorate, observable} from "mobx";

class PizzaStore {
  pizzaData = {
    items: [],
    isLoading: true
  }

  get getPizzaData() {
    return this.pizzaData
  }

  setItems(items) {
    this.pizzaData.items = items
    this.pizzaData.isLoading = false
  }

  fetchItems() {
    return axios.get('http://localhost:3000/db.json')
  }

  updateItems() {
    this.fetchItems().then(({data}) => {
      this.setItems(data.pizzas)
    })
  }
}

decorate(PizzaStore, {
  setItems: action,
  pizzaData: observable,
  getPizzaData: computed,
})

export default PizzaStore