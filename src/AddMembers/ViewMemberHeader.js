import React from "react";
import LogoDetails from "./LogoDetails";

const ViewMemberHeader = () => {
  return (
    <> 

      <div className="card-body invoice-padding pb-0">
        <div
          className="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0"
          style={{ alignItems: "start" }}
        >
          <LogoDetails/>
          <div className="invoice-number-date mt-md-0" style={{display:"flex" , flexDirection:"column", alignItems:"end", margin:"0px"}}>
                <h4 className="invoice-title me-0 text-end" style={{marginBottom:"40px"}}>Invoice #3492</h4>
              <div className="d-flex align-items-center mb-1 voiceFix">
                <span className="title fs-6">Date Issued:</span>
                <span className="title fw-bold text-end">25/08/2020</span>
              </div>
              <div className="d-flex align-items-center mb-1 voiceFix">
                <span className="title fs-6">Due Date:</span>
                <span className="title fw-bold text-end">29/08/2020</span>
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default ViewMemberHeader;
