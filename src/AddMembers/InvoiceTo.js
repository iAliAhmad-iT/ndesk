import React,{useState} from 'react'

const InvoiceTo = () => {
  const [select, setSelect] = useState("")
  return (
    <>
       <h6 className="invoice-to-title">Invoice To:</h6>
              <div className="invoice-customer">
                <select
                  className="invoiceto form-control select2-hidden-accessible"
                  data-select2-id="3"
                  tabindex="-1"
                  aria-hidden="true"
                  value={select}
                  onChange={(e)=>setSelect(e.target.value)}
                  >
                  <option >Iqbal Bhai</option>
                  <option >Shelby Company Limited</option>
                  <option >Hunters Corp</option>
                </select>
              </div>   
    </>
  )
}

export default InvoiceTo