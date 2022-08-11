import React, { useState } from "react";
import ToogleSwitch from "./ToogleSwitch";

const RightBottomForm = () => {
  const [toogled, setToogled] = useState(false);
  return (
    <>
      <div className="mt-2 fs-6">
        <p className="mb-3">Accept payments via</p>
        <select className="form-control">
          <option value="Bank Account">Bank Account</option>
          <option value="Paypal">Paypal</option>
          <option value="UPI Transfer">UPI Transfer</option>
        </select>
        <div className="invoice-terms mt-3">
          <div className="d-flex justify-content-between">
            <label htmlFor="payment">Payment Terms</label>
            <ToogleSwitch
              onChange={(event) => setToogled(event.target.checked)}
            />
            {/* <p>the switch {toogled? "on" : "off" }</p>  */}
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="client">Client Notes</label>
            <ToogleSwitch
              onChange={(event) => setToogled(event.target.checked)}
            />
          </div>

          <div className="d-flex justify-content-between">
            <label htmlFor="stub">Payment Stub</label>
            <ToogleSwitch
              onChange={(event) => setToogled(event.target.checked)}
            />
          </div>
          {/*                   
                    <ToogleSwitch name="Payment Terms"/>
                    <ToogleSwitch name="Client Notes"/>
                    <ToogleSwitch name="Payment Stub"/> */}
        </div>
      </div>
    </>
  );
};

export default RightBottomForm;
