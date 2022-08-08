import React from "react";
import "./Notification.css";
import { Link } from "react-router-dom";
import img1 from "../Assets/Images/Potrait/small/avatar-s-3.jpg";
import img2 from "../Assets/Images/Potrait/small/avatar-s-15.jpg";

const Notification = () => {
  return (
    <div>
      <li className="nav-item dropdown dropdown-notification mr-25">
        <Link
          className="nav-link position-relative"
          to=""
          data-toggle="dropdown"
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
            className="feather feather-bell ficon"
          >
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
          </svg>{" "}
          <span
            className="position-absolute top-0  badge rounded-pill bg-danger text-white"
            style={{ transform: "translate(-60%,-60%)" }}
          >
            5
          </span>
        </Link>
        <ul
          className="dropdown-menu dropdown-menu-media dropdown-menu-right"
          style={{ top: "48px", right: "-2px" , padding: "0px"}}
        >
          <li className="dropdown-menu-header">
            <div className="dropdown-header d-flex align-items-center">
              <h4 className="notification-title mb-0 mr-auto">Notifications</h4>
              <div className="badge badge-pill badge-light-primary">6 New</div>
            </div>
          </li>
          <li className="scrollable-container media-list ps">
            <Link className="media-decoration" to="/">
              <div className="media d-flex align-items-center">
                <div className="media-left">
                  <div className="avatar">
                    <img src={img1} alt="avatar" width="32" height="32" />
                  </div>
                </div>
                <div className="media-body">
                  <p className="media-heading">
                    <span className="fw-bold">Congratulation Sam 🎉</span>
                    winner!
                  </p>
                  <small className="notification-text">
                    {" "}
                    Won the monthly best seller badge.
                  </small>
                </div>
              </div>
            </Link>
            <Link className="media-decoration" to="/">
              <div className=" media d-flex align-items-center">
                <div className="media-left">
                  <div className="avatar">
                    <img src={img2} alt="avatar" width="32" height="32" />
                  </div>
                </div>
                <div className="media-body">
                  <p className="media-heading">
                    <span className="fw-bold">New message</span>
                    &nbsp;received
                  </p>
                  <small className="notification-text">
                    {" "}
                    You have 10 unread messages
                  </small>
                </div>
              </div>
            </Link>
            <Link className="media-decoration" to="/">
              <div className="media d-flex align-items-center">
                <div className="media-left">
                  <div className="avatar bg-light-danger">
                    <div className="avatar-content">MD</div>
                  </div>
                </div>
                <div className="media-body">
                  <p className="media-heading">
                    <span className="fw-bold">Revised Order 👋</span>
                    &nbsp;checkout
                  </p>
                  <small className="notification-text">
                    {" "}
                    MD Inc. order updated
                  </small>
                </div>
              </div>
            </Link>
            <div className="media d-flex align-items-center" htmlFor="flexSwitchCheckChecked">
              <h6 className="fw-bold mr-auto mb-0">
                System Notifications
              </h6>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flexSwitchCheckChecked"
                  checked
                />
              </div>
            </div>
            <Link className="media-decoration" to="/">
              <div className="media d-flex align-items-center">
                <div className="media-left">
                  <div className="avatar bg-light-danger">
                    <div className="avatar-content">
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
                        className="feather feather-x avatar-icon"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="media-body">
                  <p className="media-heading">
                    <span className="fw-bold">Server down</span>
                    &nbsp;registered
                  </p>
                  <small className="notification-text">
                    {" "}
                    USA Server is down due to hight CPU usage
                  </small>
                </div>
              </div>
            </Link>
            <Link className="media-decoration" to="/">
              <div className="media d-flex align-items-center">
                <div className="media-left">
                  <div className="avatar bg-light-success">
                    <div className="avatar-content">
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
                        className="feather feather-check avatar-icon"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="media-body">
                  <p className="media-heading">
                    <span className="fw-bold">Sales report</span>
                    &nbsp;generated
                  </p>
                  <small className="notification-text">
                    {" "}
                    Last month sales report generated
                  </small>
                </div>
              </div>
            </Link>
            <Link className="media-decoration" to="/">
              <div className="media d-flex align-items-center">
                <div className="media-left">
                  <div className="avatar bg-light-warning">
                    <div className="avatar-content">
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
                        className="feather feather-alert-triangle avatar-icon"
                      >
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                        <line x1="12" y1="9" x2="12" y2="13"></line>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="media-body">
                  <p className="media-heading">
                    <span className="fw-bold">High memory</span>
                    &nbsp;usage
                  </p>
                  <small className="notification-text">
                    {" "}
                    BLR Server using high memory
                  </small>
                </div>
              </div>
            </Link>
          </li>
          <li className="dropdown-menu-footer">
            <Link to="/" type="button" className="btn btn-primary btn-block text-white ">
              Read All Notifications
            </Link>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default Notification;
