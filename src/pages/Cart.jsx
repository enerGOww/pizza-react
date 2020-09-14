import React from "react";
import Button from "../components/Button";
import {Link} from "react-router-dom";
import emptyCart from "../assets/img/empty-cart.png"

export default function Cart() {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>Корзина пустая <icon>😕</icon></h2>
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
    </div>
  )
}