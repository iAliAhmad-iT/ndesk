import React from 'react'

const SubTotal = () => {
  return (
    <>
        <div className="invoice-total-wrapper">
                <div className="invoice-total-item">
                  <p className="invoice-total-title">Subtotal:</p>
                  <p className="invoice-total-amount">$1800</p>
                </div>
                <div className="invoice-total-item">
                  <p className="invoice-total-title">Discount:</p>
                  <p className="invoice-total-amount">$28</p>
                </div>
                <div className="invoice-total-item">
                  <p className="invoice-total-title">Tax:</p>
                  <p className="invoice-total-amount">21%</p>
                </div>
                <hr className="my-1" />
                <div className="invoice-total-item">
                  <p className="invoice-total-title">Total:</p>
                  <p className="invoice-total-amount">$1690</p>
                </div>
              </div>
    </>
  )
}

export default SubTotal