import React,{useState} from "react";
import InvoiceHeader from "./InvoiceHeader";
import PaymentDeatils from './PaymentDetails'
import AddItem from "./AddItem";
import SalesPerson from "./SalesPerson";
import SubTotal from "./SubTotal";
import AddNote from "./AddNote";
import SendInvoiceBtn from './SendInvoiceBtn'
import PreviewBtn from './PreviewBtn'
import ToogleSwitch from "./ToogleSwitch";
import AddPaymentBtn from "./AddPaymentBtn";

const EditMember = () => {
    const [toogled, setToogled] = useState(false);
  return (
    <>
      <section className="addMember">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-9">
              <div className="card d-flex">
                {/* Header Start */}
                <InvoiceHeader />

                {/* HORIZONTAL ROW */}
                <hr className="invoice-spacing" />

                <div className="card-body invoice-padding pt-0">
                  <div className="row row-bill-to invoice-spacing">
                    <div className="col-xl-7 mb-lg-1 col-bill-to ps-0">
                    <h6 className="invoice-to-title mb-2">Invoice To:</h6>
                    <p className="mb-0">Thomas shelby</p>
                    <p  className="mb-0">Shelby Company Limited</p>
                    <p className="mb-0">Small Heath, B10 0HF, UK</p>
                    <p className="mb-0">718-986-6062</p>
                    <p className="mb-0">peakyFBlinders@gmail.com</p>
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
        </div>
            <div className="col-xl-3 col-md-4 col-12">
            <div className="card">
                <div className="card-body">
                  <SendInvoiceBtn name="Send Invoice"/>
                  <PreviewBtn name="Preview"/>
                  <PreviewBtn name="Save"/>
                  <AddPaymentBtn name="Add Payment"/>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditMember;
