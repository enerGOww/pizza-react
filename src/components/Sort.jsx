import React from "react"
import {inject, observer} from "mobx-react"

const Sort = inject(
  'pizzaStore'
)(observer(({pizzaStore, items}) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false)
  const activeItem = pizzaStore.sorter.name
  const sort = pizzaStore.sort
  const sortRef = React.useRef()

  const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup)
  const toggleSort = () => pizzaStore.setSort(!sort)
  const selectActiveItem = item => {
    pizzaStore.setSorter(item)
    setVisiblePopup(false)
  }

  const handleOutsideClick = event => {
    const path = event.path || (event.composedPath && event.composedPath())
    if(!path.includes(sortRef.current)) {
      setVisiblePopup(false)
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)

    return () => document.body.removeEventListener('click', handleOutsideClick)
  }, [])

  return (
    <div className="sort" ref={sortRef}>
      <div className="sort__label">
        <svg
          className={sort ? '' : 'rotated'}
          onClick={toggleSort}
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={toggleVisiblePopup}>{activeItem}</span>
      </div>
      {visiblePopup &&
        <div className="sort__popup">
          <ul>
            {items.map(item => (
              <li
                className={activeItem === item.name ? 'active' : ''}
                onClick={() => selectActiveItem(item)}
                key={item.name}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}))

export default Sort