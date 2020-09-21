import React from "react"
import {EmptyCart, FiledCart} from "../components";
import {inject, observer} from "mobx-react";

const cart = inject(
  'cartStore'
)(observer(({cartStore}) => {
  return (
    <div className="container container--cart">
      {
        cartStore.totalCount === 0
          ? <EmptyCart />
          : <FiledCart />
      }
    </div>
  )
}))

export default cart