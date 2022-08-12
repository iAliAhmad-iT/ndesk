import React from "react";
import MemberHeader from "./MemberHeader";
import PaymentDeatils from "./PaymentDetails";
import InvoiceTo from "./InvoiceTo";
import AddItem from "./AddItem";
import SalesPerson from "./SalesPerson";
import SubTotal from "./SubTotal";
import AddNote from './AddNote'
const LeftAllMember = () => {
  return (
    <>
      <div className="card d-flex">

        {/* Header Start */}
        <MemberHeader />

        {/* HORIZONTAL ROW */}
        <hr className="invoice-spacing" />

        {/* Body */}
        <div className="card-body invoice-padding pt-0">
          <div className="row row-bill-to invoice-spacing">
            <div className="col-xl-7 mb-lg-1 col-bill-to ps-0">
              <InvoiceTo />
            </div>
            <div className="col-xl-5 pe-0 mt-xl-0 mt-2">
              <PaymentDeatils />
            </div>
          </div>
        </div>

        <div className="card-body invoice-padding invoice-product-details">
          <AddItem/>
        </div>

        <div className="card-body invoice-padding">
          <div className="row invoice-sales-total-wrapper">
            <div className="col-md-7">
              <SalesPerson/>
            </div>
            <div className="col-md-4 offset-md-1 d-flex justify-content-end">
              <SubTotal/>
            </div>
          </div>
        </div>
        <hr className="invoice-spacing" />
        <div className="card-body invoice-padding py-0 fs-6">
          {/* Invoice Note starts */}
          <div className="row">
            <div className="col-12">
              <AddNote/>
            </div>
          </div>
          {/* Invoice Note ends */}
        </div>
      </div>
    </>
  );
};

export default LeftAllMember;
