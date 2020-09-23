import React from "react"
import {EmptyCart, FiledCart, Order} from "../components"
import {inject, observer} from "mobx-react"

const cart = inject(
  'cartStore'
)(observer(({cartStore}) => {

  return (
    <div className="container container--cart">
      <EmptyCart />
      {cartStore.totalCount !== 0 && <FiledCart />}
      {cartStore.isOrdered &&  <Order />}

    </div>
  )
}))

export default cart