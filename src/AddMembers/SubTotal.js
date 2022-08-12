import React,{useState} from 'react'

const SubTotal = () => {
const [subtotal, setSubTotal] = useState("1800")
const [discount, setDiscount] = useState("28")
const [tax, setTax] = useState("21")  
return (
    <>
        <div className="invoice-total-wrapper">
                <div className="invoice-total-item">
                  <p className="invoice-total-title">Subtotal:</p>
                  <p className="invoice-total-amount">${subtotal}</p>
                </div>
                <div className="invoice-total-item">
                  <p className="invoice-total-title">Discount:</p>
                  <p className="invoice-total-amount">${discount}</p>
                </div>
                <div className="invoice-total-item">
                  <p className="invoice-total-title">Tax:</p>
                  <p className="invoice-total-amount">{tax}%</p>
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