import React from "react"
import {inject} from "mobx-react";
import {Portal} from "./index";

const Order = inject('cartStore')(({cartStore}) => {

  const handleClick = () => {
    cartStore.setIsOrdered(false)
  }

  React.useEffect(() => {
      document.body.addEventListener('click', handleClick)

      return () => document.body.removeEventListener('click', handleClick)
    }, [])

  return (
    <>
      {cartStore.isOrdered &&
      <Portal>
        <div className="overlay">
          <div className="form">
            <h2 className="form__title">Спасибо за заказ</h2>
            <p>Оператор вскоре с вами свяжется</p>
          </div>
        </div>
      </Portal>
      }
    </>
  )
})

export default Order