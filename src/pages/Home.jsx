import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
        <PizzaBlock />
      </div>
    </div>
  )
}