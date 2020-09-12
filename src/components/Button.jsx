import React from "react";
import classNames from "classnames"

export default function Button(props) {
  return (
    <button className={classNames('button', props.className, {
      'button--outline': props.outline
    })}>
      {props.children}
    </button>
  )
}