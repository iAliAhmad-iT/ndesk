import React from 'react'

const SalesPerson = () => {
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
                  placeholder="Edward Crowley"
                />
              </div>
    </>
  )
}

export default SalesPerson