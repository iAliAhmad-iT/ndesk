import React from "react";
import './ViewMember.css'
import ViewMemberHeader from "./ViewMemberHeader";
import "./EditMember.css";
import "./AddMember.css";
import PaymentDetails from "./PaymentDetails";
import SubTotal from "./SubTotal";
import SendInvoiceBtn from "./SendInvoiceBtn";
import PreviewBtn from "./PreviewBtn";
import AddPaymentBtn from "./AddPaymentBtn";

const ViewMember = () => {
  return (
    <>
      <section className="addMember">
        <div className="container py-4">
          <div className="row">
            <div className="col-md-9">
              <div className="card d-flex">
                <ViewMemberHeader />
                {/* HORIZONTAL ROW */}
                <hr className="invoice-spacing" />

                <div className="card-body invoice-padding pt-0">
                  <div className="row row-bill-to invoice-spacing">
                    <div className="col-xl-7 mb-lg-1 col-bill-to ps-0">
                      <h6 className="invoice-to-title mb-2">Invoice To:</h6>
                      <p className="mb-0">Thomas shelby</p>
                      <p className="mb-0">Shelby Company Limited</p>
                      <p className="mb-0">Small Heath, B10 0HF, UK</p>
                      <p className="mb-0">718-986-6062</p>
                      <p className="mb-0">peakyFBlinders@gmail.com</p>
                    </div>
                    <div className="col-xl-5 pe-0 mt-xl-0 mt-2">
                      <PaymentDetails />
                    </div>
                  </div>
                </div>

                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th class="py-3">Task description</th>
                        <th class="py-3">Rate</th>
                        <th class="py-3">Hours</th>
                        <th class="py-3">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="py-2">
                          <p class="card-text font-weight-bold mb-1">
                            Native App Development
                          </p>
                          <p class="card-text text-nowrap">
                            Developed a full stack native app using React
                            Native, Bootstrap &amp; Python
                          </p>
                        </td>
                        <td class="">
                          <span class="font-weight-bold">$60.00</span>
                        </td>
                        <td class="">
                          <span class="font-weight-bold">30</span>
                        </td>
                        <td class="">
                          <span class="font-weight-bold">$1,800.00</span>
                        </td>
                      </tr>
                      <tr class="border-bottom">
                        <td class="py-1">
                          <p class="card-text font-weight-bold mb-1">
                            Ui Kit Design
                          </p>
                          <p class="card-text text-nowrap">
                            Designed a UI kit for native app using Sketch, Figma
                            &amp; Adobe XD
                          </p>
                        </td>
                        <td class="py-1">
                          <span class="font-weight-bold">$60.00</span>
                        </td>
                        <td class="py-1">
                          <span class="font-weight-bold">20</span>
                        </td>
                        <td class="py-1">
                          <span class="font-weight-bold">$1200.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="card-body invoice-padding">
          <div className="row invoice-sales-total-wrapper">
            <div className="col-md-7">
                <p class="card-text mb-0">
                  <span class="font-weight-bold">Salesperson:</span> <span class="ml-2">Alfie Solomons</span>
                </p>
            </div>
            <div className="col-md-4 offset-md-1 d-flex justify-content-end">
              <SubTotal/>
            </div>
          </div>
               </div>

                <hr className="invoice-spacing" />

                <div class="card-body invoice-padding pt-0">
                                    <div class="row">
                                        <div class="col-12">
                                            <span class="font-weight-bold">Note: </span>
                                            <span>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance
                                                projects. Thank You!</span>
                                        </div>
                                    </div>
                                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-4 col-12">
            <div className="card">
                <div className="card-body">
                  <SendInvoiceBtn name="Send Invoice"/>
                  <PreviewBtn name="Download"/>
                  <PreviewBtn name="Print"/>
                  <PreviewBtn name="Edit"/>
                  <AddPaymentBtn name="Add Payment"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ViewMember;
