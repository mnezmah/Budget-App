import React, { Component } from 'react'

const EditExpensePage = (props) => {
  console.log(props)
  return (
    <div>
      Edit expense with the id of {props.match.params.id}
    </div>
  )
}

export default EditExpensePage