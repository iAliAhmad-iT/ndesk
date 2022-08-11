import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./SendInvoiceBtn.css";
function SendInvoiceBtn(props) {
  const [show, setShow] = useState(false);
  
  const [from, setFrom] = useState("shelbyComapny@email.com")
  const [to, setTo] = useState("qConsolidated@email.com")
  const [subject, setSubject] = useState("Invoice of purchased Admin Templates")
  const [message, setMessage] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="btn-block send-invoice-btn mb-2" disabled={props.disable}
      >
        Send Invoice
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="bg-light">
          <Modal.Title>Send Invoice</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label for="invoice-from" className="form-label">
                From
              </label>
              <input
                type="text"
                className="form-control"
                id="invoice-from"
                value={from}
                onChange={(e)=>setFrom(e.target.value)}
                placeholder="company@email.com"
              />
            </div>
            <div className="form-group">
              <label for="invoice-to" className="form-label">
                To
              </label>
              <input
                type="text"
                className="form-control"
                id="invoice-to"
                value={to}
                onChange={(e)=>setTo(e.target.val)}
                placeholder="company@email.com"
              />
            </div>
            <div className="form-group">
              <label for="invoice-subject" className="form-label">
                Subject
              </label>
              <input
                type="text"
                className="form-control"
                id="invoice-subject"
                value={subject}
                onChange={(e)=>setSubject(e.target.value)}
                placeholder="Invoice regarding goods"
              />
            </div>
            <div className="form-group">
              <label for="invoice-message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                name="invoice-message"
                id="invoice-message"
                cols="3"
                rows="11"
              >
                Dear Queen Consolidated, Thank you for your business, always a
                pleasure to work with you! We have generated a new invoice in
                the amount of $95.59 We would appreciate payment of this invoice
                by 05/11/2019
              </textarea>
            </div>
            <div className="form-group">
              <span className="badge badge-light-primary">
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
                  className="feather feather-link me-1"
                >
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
                <span className="align-middle">Invoice Attached</span>
              </span>
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
