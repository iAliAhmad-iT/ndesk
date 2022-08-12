import React,{useState} from "react";
import MemberHeader from "./MemberHeader";
import PaymentDeatils from './PaymentDetails'
import AddItem from "./AddItem";
import SalesPerson from "./SalesPerson";
import SubTotal from "./SubTotal";
import AddNote from "./AddNote";
import SendInvoiceBtn from './SendInvoiceBtn'
import PreviewBtn from './PreviewBtn'
import ToogleSwitch from "./ToogleSwitch";
import AddPaymentBtn from "./AddPaymentBtn";
import InvoiceToDetails from "./InvoiceToDetails";

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
                <MemberHeader/>

                {/* HORIZONTAL ROW */}
                <hr className="invoice-spacing" />

                <div className="card-body invoice-padding pt-0">
                  <div className="row row-bill-to invoice-spacing">
                    <div className="col-xl-7 mb-lg-1 col-bill-to ps-0">
                    <InvoiceToDetails/>
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
                  <SendInvoiceBtn name="Send Invoice" htmlFor="send-invoice-sidebar"/>
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
      
        <div class="modal modal-slide-in fade" id="send-invoice-sidebar" style={{display: "none"}} aria-hidden="true">
                        <div class="modal-dialog sidebar-lg">
                            <div class="modal-content p-0">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">×</button>
                                <div class="modal-header mb-1">
                                    <h5 class="modal-title">
                                        <span class="align-middle">Send Invoice</span>
                                    </h5>
                                </div>
                                <div class="modal-body flex-grow-1">
                                    <form>
                                        <div class="form-group">
                                            <label for="invoice-from" class="form-label">From</label>
                                            <input type="text" class="form-control" id="invoice-from" value="shelbyComapny@email.com" placeholder="company@email.com" />
                                        </div>
                                        <div class="form-group">
                                            <label for="invoice-to" class="form-label">To</label>
                                            <input type="text" class="form-control" id="invoice-to" value="qConsolidated@email.com" placeholder="company@email.com" />
                                        </div>
                                        <div class="form-group">
                                            <label for="invoice-subject" class="form-label">Subject</label>
                                            <input type="text" class="form-control" id="invoice-subject" value="Invoice of purchased Admin Templates" placeholder="Invoice regarding goods" />
                                        </div>
                                        <div class="form-group">
                                            <label for="invoice-message" class="form-label">Message</label>
                                            <textarea class="form-control" name="invoice-message" id="invoice-message" cols="3" rows="11">Dear Queen Consolidated,

Thank you for your business, always a pleasure to work with you!

We have generated a new invoice in the amount of $95.59

We would appreciate payment of this invoice by 05/11/2019</textarea>
                                        </div>
                                        <div class="form-group">
                                            <span class="badge badge-light-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link mr-25"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                                                <span class="align-middle">Invoice Attached</span>
                                            </span>
                                        </div>
                                        <div class="form-group d-flex flex-wrap mt-2">
                                            <button type="button" class="btn btn-primary mr-1 waves-effect waves-float waves-light" data-dismiss="modal">Send</button>
                                            <button type="button" class="btn btn-outline-secondary waves-effect" data-dismiss="modal">Cancel</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

      </section>
      
    </>
  );
};

export default EditMember;
