import React from "react"
import {Categories, Sort, PizzaBlock} from "../components"
import {inject, observer} from "mobx-react"

const categories = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
  {name: 'популярности', type: 'id'},
  {name: 'цене', type: 'price'},
  {name: 'алфавиту', type: 'name'}
]

const home = inject(
  'pizzaStore'
)(observer(({pizzaStore}) => {
  const isLoading = pizzaStore.isLoading
  const items = pizzaStore.getFilteredAndSortedItems

  React.useEffect(() => {
    pizzaStore.updateItems()
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categories} />
        <Sort items={sortItems}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading === true
          ? <h1>loading</h1>
          : items.map(item => <PizzaBlock key={item.id} {...item}/>)
        }
      </div>
    </div>
  )
}))

export default home