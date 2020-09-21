import PizzaStore from './pizzaStore'
import CartStore from './cartStore'

const stores = {
  pizzaStore: new PizzaStore(),
  cartStore: new CartStore(),
}

export default stores