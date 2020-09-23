import React from "react"
import {inject, observer} from "mobx-react";

const OrderForm = inject(
  'cartStore'
)(observer(({cartStore}) => {
  return (
    <form className="form">
      <h2 className="form__title">Оформление заказа</h2>
      <div className="form__group">
        <input className="form__input" placeholder=" " />
        <label className="form__label">Как к вам обращаться</label>
      </div>
      <div className="form__group">
        <input className="form__input" placeholder=" " />
        <label className="form__label">Телефонный номер</label>
      </div>
      <div className="form__group">
        <input className="form__input" placeholder=" " />
        <label className="form__label">Адресс доставки</label>
      </div>
      <input className="form__button" type="submit" value="Подтвердить" />
    </form>
  )
}))

export default OrderForm