import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./SendInvoiceBtn.css";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";


function SendInvoiceBtn(props) {
  const [show, setShow] = useState(false);
  
  const [from, setFrom] = useState("shelbyComapny@email.com")
  const [to, setTo] = useState("qConsolidated@email.com")
  const [subject, setSubject] = useState("Invoice of purchased Admin Templates")
  const [message, setMessage] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [date, setdate] = useState(new Date());
  const [invoicebalance, setInvoiceBalance] = useState("ahmad");
  const [paymentamount, setPaymentAmount] = useState("");
  const [paymentmethod, setPaymentMethod ] = useState("");
  const [paymentnote, setPaymentNote] = useState("");

  const functionHandle = () => {
    console.log([invoicebalance , date[0] , paymentamount , paymentmethod , paymentnote])
  }
  return (
    <>
      <Button
        variant="success"
        onClick={handleShow}
        className="btn-block send-invoice-btn" disabled={props.disable}
      >
        Add Payment
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title>Add Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
              <div class="form-group">
                  <input id="balance" class="form-control" type="text" value={invoicebalance} onChange={(e)=>setInvoiceBalance(e.target.value)}/> 
              </div>
              <div class="form-group">
                  <label class="form-label" htmlFor="amount">Payment Amount</label>
                  <input id="amount" class="form-control" type="number" value={paymentamount} onChange={(e)=>setPaymentAmount(e.target.value)} placeholder="$1000" />
              </div>
              <div class="form-group">
                  <label class="form-label" htmlFor="payment-date">Payment Date</label>
                  <Flatpickr
                className="form-control"
                value={date}
                onChange={(date) => setdate(date)}
                style={{maxWidth:"100%"}}
              />
              </div>
              <div class="form-group">
                  <label class="form-label" htmlFor="payment-method">Payment Method</label>
                  <select class="form-control" id="payment-method" value={paymentmethod} onChange={(e)=>setPaymentMethod(e.target.value)}>
                      <option value="" selected="" disabled="">Select payment method</option>
                      <option value="Cash">Cash</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Debit">Debit</option>
                      <option value="Credit">Credit</option>
                      <option value="Paypal">Paypal</option>
                  </select>
              </div>
              <div class="form-group">
                  <label class="form-label" htmlFor="payment-note">Internal Payment Note</label>
                  <textarea class="form-control" id="payment-note" rows="5" placeholder="Internal Payment Note" value={paymentnote} onChange={(e)=>setPaymentNote(e.target.value)}></textarea>
              </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={functionHandle}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SendInvoiceBtn;
