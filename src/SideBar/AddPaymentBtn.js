import React from 'react'

const AddPaymentBtn = (props) => {
  return (
    <a>
         <button
        className="btn btn-success btn-block mb-75 waves-effect waves-float waves-light"
        disabled="" style={{width: "100%"}}
      >
      {props.name}
      </button>
    </a>
  )
}

export default AddPaymentBtn