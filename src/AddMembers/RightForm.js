import React from 'react'
import PreviewBtn from './PreviewBtn'
import SendInvoiceBtn from './SendInvoiceBtn'

const RightForm = () => {
  return (
    <div>
        <div className="card">
                <div className="card-body">
                  <SendInvoiceBtn name="Send Invoice" disable="false"/>
                  <PreviewBtn name="Preview"/>
                  <PreviewBtn name="Save"/>
                </div>
              </div>
    </div>
  )
}

export default RightForm