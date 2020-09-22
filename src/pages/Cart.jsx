import React from "react"
import {EmptyCart, FiledCart} from "../components"
import {inject, observer} from "mobx-react"

const cart = inject(
  'cartStore'
)(observer(({cartStore}) => {
  return (
    <div className="container container--cart">
      <EmptyCart />
      {cartStore.totalCount !== 0 && <FiledCart />}
    </div>
  )
}))

export default cart