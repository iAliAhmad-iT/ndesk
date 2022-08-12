import React,{useState} from 'react'

const InvoiceToDetails = () => {
    const [name, setName] = useState("Thomas shelby")
    const [company, setCompany] = useState("Shelby Company Limited")
    const [address, setAddress] = useState("Small Heath, B10 0HF, UK")
    const [tel, setTel] = useState("718-986-6062")
    const [email, setEmail] = useState("peakyFBlinders@gmail.com")
    return (
    <>
        <h6 className="invoice-to-title mb-2">Invoice To:</h6>
        <p className="mb-0">{name}</p>
        <p  className="mb-0">{company}</p>
        <p className="mb-0">{address}</p>
        <p className="mb-0">{tel}</p>
        <p className="mb-0">{email}</p>
    </>
  )
}

export default InvoiceToDetails