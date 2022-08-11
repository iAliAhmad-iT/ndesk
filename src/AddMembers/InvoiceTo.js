import React from 'react'

const InvoiceTo = () => {
  return (
    <>
       <h6 className="invoice-to-title">Invoice To:</h6>
              <div className="invoice-customer">
                <select
                  className="invoiceto form-control select2-hidden-accessible"
                  data-select2-id="3"
                  tabindex="-1"
                  aria-hidden="true"
                >
                  <option data-select2-id="5"></option>
                  <option value="shelby">Shelby Company Limited</option>
                  <option value="hunters">Hunters Corp</option>
                </select>
              </div>   
    </>
  )
}

export default InvoiceTo