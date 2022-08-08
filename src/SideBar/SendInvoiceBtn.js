import React from "react";

const SendInvoiceBtn = (props) => {
  return (
    <>
      <button
        className="btn btn-primary btn-block mb-2 waves-effect waves-float waves-light"
        disabled="" style={{width:"100%"}}
      >
        {props.name}
      </button>
    </>
  );
};

export default SendInvoiceBtn;
