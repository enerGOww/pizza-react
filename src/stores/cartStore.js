import {action, computed, decorate, observable} from "mobx";

class CartStore {
  items = new Map()

  isOrdered = false

  get totalCount() {
    return Array.from(this.items.values()).reduce((sum, item) => sum + item.quantity, 0)
  }

  get totalPrice() {
    return Array.from(this.items.values()).reduce((sum, item) => sum + item.price * item.quantity, 0)
  }

  setItem(item) {
    const id = this._generateIdByItem(item)

    if (this.items.has(id)) {
      return this.increaseQuantity(id)
    }

    item.quantity = 1
    this.items.set(id, item)
  }

  setIsOrdered(isOrdered) {
    this.isOrdered = isOrdered
  }

  deleteItemById(id) {
    this.items.delete(id)
  }

  increaseQuantity(id) {
    this.items.get(id).quantity++
  }

  decreaseQuantity(id) {
    if (this.items.get(id).quantity === 1) {
      return this.deleteItemById(id)
    }

    this.items.get(id).quantity--
  }

  clearItems() {
    this.items.clear()
  }

  _generateIdByItem({id, size, type}) {
    return `${id}_${size}_${type}`
  }
}

decorate(CartStore, {
  items: observable,
  isOrdered: observable,
  totalCount: computed,
  totalPrice: computed,
  setItem: action,
  increaseQuantity: action,
  decreaseQuantity: action,
  clearItems: action,
  deleteItemById: action,
  setIsOrdered: action,
})

export default CartStore