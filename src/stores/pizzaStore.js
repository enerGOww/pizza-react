import axios from "axios"
import {action, computed, decorate, observable} from "mobx"

class PizzaStore {
  pizzaData = {
    items: [],
    isLoading: true
  }

  sorter = {name: 'популярности', type: 'id'}
  category = null

  get getIsLoading() {
    return this.pizzaData.isLoading
  }

  get getFilteredAndSortedItems() {
    return this.pizzaData.items
      .sort((a, b) => this.compare(a, b))
      .filter(({category}) => this.category === null ? true : category === this.category)
  }

  setItems(items) {
    this.pizzaData.items = items
    this.pizzaData.isLoading = false
  }

  setSorter(sorter) {
    this.sorter = sorter
  }

  setCategory(category) {
    this.category = category
  }

  fetchItems() {
    return axios.get('http://localhost:3000/db.json')
  }

  updateItems() {
    this.fetchItems().then(({data}) => {
      this.setItems(data.pizzas)
    })
  }

  compare(a, b) {
    if (a[this.sorter.type] < b[this.sorter.type]) {
      return -1
    }
    if (a[this.sorter.type] > b[this.sorter.type]) {
      return 1
    }

    return 0
  }
}

decorate(PizzaStore, {
  pizzaData: observable,
  sorter: observable,
  category: observable,
  getIsLoading: computed,
  getFilteredAndSortedItems: computed,
  setSorter: action,
  setItems: action,
  setCategory: action,
})


export default PizzaStore