import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import LogoDetails from "./LogoDetails";

const InvoiceHeader = () => {
  const [date, setdate] = useState(new Date());
  const [duedate, setDueDate] = useState(new Date());
  const [invoice, setInvoice] = useState("");
  return (
    <>
      <div className="card-body invoice-padding pb-0">
        <div
          className="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0"
          style={{ alignItems: "start" }}
        >
<LogoDetails/>
          <div className="invoice-number-date mt-md-0">
            <div className="d-flex align-items-center justify-content-md-end mb-3">
              <h4 className="invoice-title">Invoice</h4>
              <div className="input-group input-group-merge invoice-edit-input-group">
                <div className="input-group-prepend">
                  <div
                    className="input-group-text "
                    style={{ background: "transparent" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-hash"
                    >
                      <line x1="4" y1="9" x2="20" y2="9"></line>
                      <line x1="4" y1="15" x2="20" y2="15"></line>
                      <line x1="10" y1="3" x2="8" y2="21"></line>
                      <line x1="16" y1="3" x2="14" y2="21"></line>
                    </svg>
                  </div>
                </div>
                <input
                  type="number"
                  className="form-control ps-0 invoice-edit-input"
                  placeholder="53634"
                  value={invoice}
                  onChange={(e)=>setInvoice(e.target.value)}
                  style={{borderLeft:"0px"}}
                />
              </div>
            </div>
            <div className="d-flex align-items-center mb-3 voiceFix">
              <span className="title fs-6">Date:</span>
              <Flatpickr
                className="form-control"
                value={date}
                onChange={(date) => setdate(date)}
              />
            </div>
            <div className="d-flex align-items-center voiceFix">
              <span className="title fs-6">Due Date:</span>
              <Flatpickr
                className="form-control"
                value={duedate}
                onChange={(duedate) => setDueDate(duedate)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceHeader;
