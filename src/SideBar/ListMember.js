import React from "react";
import "./ListMember.css"
const ListMember = () => {
  return (
    <>
        <section className="invoice-list-wrapper py-2 px-4">
          <div className="card">
            <div className="card-datatable table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                className="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <div className="row d-flex justify-content-between align-items-center m-3">
                  <div className="col-lg-6 d-flex align-items-center">
                    <div
                      className="dataTables_length"
                      id="DataTables_Table_0_length"
                    >
                      <label className="d-flex align-items-center m-0">
                        Show
                        <select
                          name="DataTables_Table_0_length"
                          aria-controls="DataTables_Table_0"
                          className="custom-select form-control ms-2"
                        >
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </label>
                    </div>
                    <div className="dt-action-buttons text-xl-right text-lg-left text-lg-right text-left ">
                      <div className="dt-buttons">
                        <button
                          className="dt-button btn btn-primary btn-add-record ms-4"
                          tabindex="0"
                          aria-controls="DataTables_Table_0"
                          type="button"
                        >
                          <span>Add Record</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center justify-content-lg-end flex-lg-nowrap flex-wrap pe-lg-1 p-0">
                    <div
                      id="DataTables_Table_0_filter"
                      className="dataTables_filter"
                    >
                      <label className="d-flex align-items-center m-0">
                        Search
                        <input
                          type="search"
                          className="form-control ms-2"
                          placeholder="Search Invoice"
                          aria-controls="DataTables_Table_0"
                        />
                      </label>
                    </div>
                    <div className="invoice_status ml-sm-2"></div>
                  </div>
                </div>
                <table
                  className="invoice-list-table table dataTable no-footer dtr-column"
                  id="DataTables_Table_0"
                  role="grid"
                  aria-describedby="DataTables_Table_0_info"
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="control sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        aria-label=": activate to sort column ascending"
                        style={{display: "none"}}
                      ></th>
                      <th
                        className="sorting_desc"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={{width: "46px"}}
                        aria-sort="descending"
                        aria-label="#: activate to sort column ascending"
                      >
                        #
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={{width: "42px"}}
                        aria-label=": activate to sort column ascending"
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
                          className="feather feather-trending-up"
                        >
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                          <polyline points="17 6 23 6 23 12"></polyline>
                        </svg>
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={{width: "270px"}}
                        aria-label="Client: activate to sort column ascending"
                      >
                        Client
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={{width: "73px"}}
                        aria-label="Total: activate to sort column ascending"
                      >
                        Total
                      </th>
                      <th
                        className="text-truncate sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={{width: "130px"}}
                        aria-label="Issued Date: activate to sort column ascending"
                      >
                        Issued Date
                      </th>
                      <th
                        className="sorting"
                        tabindex="0"
                        aria-controls="DataTables_Table_0"
                        rowspan="1"
                        colspan="1"
                        style={{width: "98px"}}
                        aria-label="Balance: activate to sort column ascending"
                      >
                        Balance
                      </th>
                      <th
                        className="cell-fit sorting_disabled"
                        rowspan="1"
                        colspan="1"
                        style={{width: "80px"}}
                        aria-label="Actions"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td valign="top" colspan="7" className="dataTables_empty">
                        Loading...
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-between mx-2 row">
                  <div className="col-sm-12 col-md-6">
                    <div
                      className="dataTables_info"
                      id="DataTables_Table_0_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 0 to 0 of 0 entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_0_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="DataTables_Table_0_previous"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="0"
                            tabindex="0"
                            className="page-link"
                          >
                            &nbsp;
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next disabled"
                          id="DataTables_Table_0_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx="1"
                            tabindex="0"
                            className="page-link"
                          >
                            &nbsp;
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default ListMember;
