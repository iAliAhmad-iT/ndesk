import React,{useState} from 'react'
const PaymentDetails = () => {

  const [totaldue, setTotalDue] = useState("$12,110.55")
  const [bankname, setBankName] = useState("American Bank")
  const [country, setCountry] = useState("United States")
  const [iban, setIBan] = useState("ETD95476213874685")
  const [swiftcode, setSwiftCode] = useState("BR91905")

  return (
    <>
              <h6 className="mb-2 fs-6">Payment Details:</h6>
              <table>
                <tbody>
                  <tr>
                    <td className="pe-1">Total Due:</td>
                    <td>
                      <strong>{totaldue}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td className="pe-1">Bank name:</td>
                    <td>{bankname}</td>
                  </tr>
                  <tr>
                    <td className="pe-1">Country:</td>
                    <td>{country}</td>
                  </tr>
                  <tr>
                    <td className="pe-1">IBAN:</td>
                    <td>{iban}</td>
                  </tr>
                  <tr>
                    <td className="pe-1">SWIFT code:</td>
                    <td>{swiftcode}</td>
                  </tr>
                </tbody>
              </table>
    </>
  )
}

export default PaymentDetails