import React,{useState}from 'react'

const LogoDetails = () => {  
    const [office, setOffice] = useState("Office 149, 450 South Brand Brooklyn");
    const [address, setAddress] = useState("San Diego County, CA 91905, USA");
    const [contact, setContact] = useState("+1 (123) 456 7891, +44 (876) 543 2198");
    return (
    <>
        <div>
        <div className="logo-wrapper">
            <h3 className="text-primary invoice-logo">Logo </h3>
        </div>
        <p className="card-text fs-6 mb-0">
            {office}
        </p>
        <p className="card-text fs-6 mb-0">
            {address}
        </p>
        <p className="card-text fs-6 m-0">
            {contact}
        </p>
        </div>
    </>
  )
}

export default LogoDetails