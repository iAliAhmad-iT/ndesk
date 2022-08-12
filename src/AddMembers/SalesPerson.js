import React, { useState } from 'react'

const SalesPerson = () => {
const [saleperson , setSalePerson] = useState();
  return (
    <>
        <div className="d-flex align-items-center mb-1">
                <label for="salesperson" className="form-label">
                  Salesperson:
                </label>
                <input
                  type="text"
                  className="form-control ms-2"
                  id="salesperson"
                  value={saleperson}
                  onChange={(e)=>setSalePerson(e.target.value)}
                  placeholder="Edward Crowley"
                />
              </div>
    </>
  )
}

export default SalesPerson