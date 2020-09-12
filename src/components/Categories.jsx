import React from "react";

export default function Categories({items}) {
  const [activeItem, setActiveItem] = React.useState(null)

  return (
    <div className="categories">
      <ul>
        <li className={activeItem === null ? 'active' : ''} onClick={() => setActiveItem(null)}>Все</li>
        {items && items.map(name => (
          <li
            className={activeItem === name ? 'active' : ''}
            key={name}
            onClick={() => setActiveItem(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}