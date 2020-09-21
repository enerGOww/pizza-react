import axios from "axios"
import {action, computed, decorate, observable} from "mobx"

class PizzaStore {
  constructor() {
    this.updateItems()
  }

  items = []
  isLoading = true

  sorter = {name: 'популярности', type: 'id'}
  category = null

  get getFilteredAndSortedItems() {
    return this.items
      .slice()
      .sort((a, b) => this._compare(a, b))
      .filter(({category}) => this.category === null ? true : category === this.category)
  }

  setItems(items) {
    this.items = items
    this.isLoading = false
  }

  setSorter(sorter) {
    this.sorter = sorter
  }

  setCategory(category) {
    this.category = category
  }

  _fetchItems() {
    return axios.get('http://localhost:3000/db.json')
  }

  updateItems() {
    this._fetchItems().then(({data}) => {
      this.setItems(data.pizzas)
    })
  }

  _compare(a, b) {
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
  items: observable,
  isLoading: observable,
  sorter: observable,
  category: observable,
  getFilteredAndSortedItems: computed,
  setSorter: action,
  setItems: action,
  setCategory: action,
})


export default PizzaStore