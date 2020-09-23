import React from "react"
import {Portal} from "./index";
import {inject} from "mobx-react";

const OrderForm = inject('cartStore')(({cartStore, isOpen, closeHandler}) => {
  const formRef = React.useRef()

  const handleOutsideClick = event => {
    const path = event.path || (event.composedPath && event.composedPath())
    if(!path.includes(formRef.current)) {
      closeHandler()
    }
  }

  const submitForm = () => {
    cartStore.setIsOrdered(true)
    cartStore.clearItems()
    closeHandler()
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick)

    return () => document.body.removeEventListener('click', handleOutsideClick)
  }, [])

  return (
    <>
      {isOpen &&
        <Portal>
          <div className="overlay">
            <form className="form" ref={formRef} onSubmit={submitForm}>
              <h2 className="form__title">Оформление заказа</h2>
              <div className="form__group">
                <input className="form__input" type="text" name="name" required placeholder=" " />
                <label className="form__label">Как к вам обращаться</label>
              </div>
              <div className="form__group">
                <input className="form__input" type="tel" name="phone" required placeholder=" "/>
                <label className="form__label">Телефонный номер</label>
              </div>
              <div className="form__group">
                <input className="form__input" type="text" name="address" required placeholder=" "/>
                <label className="form__label">Адресс доставки</label>
              </div>
              <input className="form__button" type="submit" value="Подтвердить" />
            </form>
          </div>
        </Portal>
      }
    </>
  )
})

export default OrderForm