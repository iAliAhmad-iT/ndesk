import React from 'react'
const ToogleSwitch = (onChange) => {
  return (
    <>
    <div class="form-check form-switch">
      <input class="form-check-input btn-lg" onChange={onChange.onChange} type="checkbox" role="switch" />
    </div>
    </>
  )
}

export default ToogleSwitch