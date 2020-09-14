import React from "react"
import {Categories, Sort, PizzaBlock} from "../components"

function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map(item => <PizzaBlock key={item.id} {...item}/>)}
      </div>
    </div>
  )
}

export default Home