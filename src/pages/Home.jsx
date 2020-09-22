import React from "react"
import {Categories, Sort, PizzaBlock, LoadingBlock} from "../components"
import {inject, observer} from "mobx-react"
import {categories, sortItems} from "../consts";

const home = inject(
  'pizzaStore'
)(observer(({pizzaStore}) => {
  const isLoading = pizzaStore.isLoading
  const items = pizzaStore.getFilteredAndSortedItems

  return (
    <div className="container">
      <div className="content__top">
        <Categories categories={categories} />
        <Sort items={sortItems} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          isLoading === true
          ? Array(10).fill(0).map((_, index) => <LoadingBlock key={index} />)
          : items.map(item => <PizzaBlock key={item.id} {...item}/>)
        }
      </div>
    </div>
  )
}))

export default home