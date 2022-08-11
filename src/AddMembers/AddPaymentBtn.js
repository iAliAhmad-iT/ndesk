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
                  <input id="balance" class="form-control" type="text" value="Invoice Balance: 5000.00" disabled="" /> 
              </div>
              <div class="form-group">
                  <label class="form-label" for="amount">Payment Amount</label>
                  <input id="amount" class="form-control" type="number" placeholder="$1000" />
              </div>
              <div class="form-group">
                  <label class="form-label" for="payment-date">Payment Date</label>
                  <Flatpickr
                className="form-control"
                value={date}
                onChange={(date) => setdate(date)}
                style={{maxWidth:"100%"}}
              />
              </div>
              <div class="form-group">
                  <label class="form-label" for="payment-method">Payment Method</label>
                  <select class="form-control" id="payment-method">
                      <option value="" selected="" disabled="">Select payment method</option>
                      <option value="Cash">Cash</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Debit">Debit</option>
                      <option value="Credit">Credit</option>
                      <option value="Paypal">Paypal</option>
                  </select>
              </div>
              <div class="form-group">
                  <label class="form-label" for="payment-note">Internal Payment Note</label>
                  <textarea class="form-control" id="payment-note" rows="5" placeholder="Internal Payment Note"></textarea>
              </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SendInvoiceBtn;
