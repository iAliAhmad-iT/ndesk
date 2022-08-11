import React, { useState } from "react";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";

const InvoiceHeader = () => {
  const [date, setdate] = useState(new Date());
  return (
    <>
      <div className="card-body invoice-padding pb-0">
        <div
          className="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0"
          style={{ alignItems: "start" }}
        >
          <div>
            <div className="logo-wrapper">
              {/* MAKE  A LOGO  */}
              {/* <svg viewBox="0 0 139 95" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="24">
                                <defs>
                                    <linearGradient id="invoice-linearGradient-1" x1="100%" y1="10.5120544%" x2="50%" y2="89.4879456%">
                                        <stop stop-color="#000000" offset="0%"></stop>
                                        <stop stop-color="#FFFFFF" offset="100%"></stop>
                                    </linearGradient>
                                    <linearGradient id="invoice-linearGradient-2" x1="64.0437835%" y1="46.3276743%" x2="37.373316%" y2="100%">
                                        <stop stop-color="#EEEEEE" stop-opacity="0" offset="0%"></stop>
                                        <stop stop-color="#FFFFFF" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g transform="translate(-400.000000, -178.000000)">
                                        <g transform="translate(400.000000, 178.000000)">
                                            <path className="text-primary" d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z" style="fill: currentColor"></path>
                                            <path d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z" fill="url(#invoice-linearGradient-1)" opacity="0.2"></path>
                                            <polygon fill="#000000" opacity="0.049999997" points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"></polygon>
                                            <polygon fill="#000000" opacity="0.099999994" points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"></polygon>
                                            <polygon fill="url(#invoice-linearGradient-2)" opacity="0.099999994" points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"></polygon>
                                        </g>
                                    </g>
                                </g>
                            </svg> */}
              <h3 className="text-primary invoice-logo">Logo </h3>
            </div>
            <p className="card-text fs-6 mb-0">
              Office 149, 450 South Brand Brooklyn
            </p>
            <p className="card-text fs-6 mb-0">
              San Diego County, CA 91905, USA
            </p>
            <p className="card-text fs-6 m-0">
              +1 (123) 456 7891, +44 (876) 543 2198
            </p>
          </div>
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
                  type="text"
                  className="form-control invoice-edit-input"
                  placeholder="53634"
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
                value={date}
                onChange={(date) => setdate(date)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceHeader;