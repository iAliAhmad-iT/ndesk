import React from 'react'

const PaymentDetails = () => {
  return (
    <>
              <h6 className="mb-2 fs-6">Payment Details:</h6>
              <table>
                <tbody>
                  <tr>
                    <td className="pe-1">Total Due:</td>
                    <td>
                      <strong>$12,110.55</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="pe-1">Bank name:</td>
                    <td>American Bank</td>
                  </tr>
                  <tr>
                    <td className="pe-1">Country:</td>
                    <td>United States</td>
                  </tr>
                  <tr>
                    <td className="pe-1">IBAN:</td>
                    <td>ETD95476213874685</td>
                  </tr>
                  <tr>
                    <td className="pe-1">SWIFT code:</td>
                    <td>BR91905</td>
                  </tr>
                </tbody>
              </table>
    </>
  )
}

export default PaymentDetails