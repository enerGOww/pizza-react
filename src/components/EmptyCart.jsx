import React from "react"
import emptyCart from "../assets/img/empty-cart.png"
import {Link} from "react-router-dom"
import Button from "./Button"
import {inject, observer} from "mobx-react"
import classNames from 'classnames'

const EmptyCart = inject(
  'cartStore'
)(observer(({cartStore}) => {
  return (
    <div className={classNames("cart cart--empty", {
      "invisible": cartStore.totalCount !== 0
    })}>
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.<br/>
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={emptyCart} alt="Empty cart"/>
      <Link to="/">
        <Button className="button--black">
          <span>Вернуться назад</span>
        </Button>
      </Link>
    </div>
  )
}))

export default EmptyCart