import React from "react"
import {inject, observer} from "mobx-react";

const categories = inject(
  'pizzaStore'
)(observer(({pizzaStore, categories}) => {
  const activeCategory = pizzaStore.category
  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => pizzaStore.setCategory(null)}
        >
          Все
        </li>
        {categories && categories.map((category, index) => (
          <li
            className={activeCategory === index ? 'active' : ''}
            key={category}
            onClick={() => pizzaStore.setCategory(index)}
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  )
}))

export default categories