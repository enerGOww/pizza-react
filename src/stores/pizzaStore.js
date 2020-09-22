import axios from "axios"
import {action, computed, decorate, observable} from "mobx"
import {sortItems} from "../consts";

class PizzaStore {
  constructor() {
    this._updateItems()
  }

  items = []
  isLoading = true

  sorter = sortItems[0]
  sort = true // true ASK false DESK
  category = null

  get getFilteredAndSortedItems() {
    return this.items
      .slice()
      .sort((a, b) => this.sort ? this._compare(a, b) : this._compare(b, a))
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

  setSort(sort) {
    this.sort = sort
  }

  _fetchItems() {
    return axios.get('http://localhost:3000/db.json')
  }

  _updateItems() {
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
  sort: observable,
  getFilteredAndSortedItems: computed,
  setSorter: action,
  setItems: action,
  setCategory: action,
  setSort: action,
})


export default PizzaStore