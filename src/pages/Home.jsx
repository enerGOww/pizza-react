import React from "react"
import {Categories, Sort, PizzaBlock} from "../components"
import {inject, observer} from "mobx-react"

const home = inject(
  'pizzaStore'
)(observer(({pizzaStore}) => {
  const isLoading = pizzaStore.getIsLoading
  const items = pizzaStore.getFilteredAndSortedItems

  React.useEffect(() => {
    pizzaStore.updateItems()
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <Sort />
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