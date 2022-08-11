import React,{useState} from 'react'
import './AddItem.css'

const AddItem = () => {
const [cost, setCost] = useState("")
  const [serviceList, setServiceList] = useState([
    {service:''},
])
  const addItem =()=>{
    setServiceList([...serviceList , {service:""}])
  } 

  const removeItem = (index) =>{
   const list = [...serviceList];
    list.splice(index  , 1);
    setServiceList(list);
    }

  return (
    <>
        <form className="source-item">
            <div>
              {serviceList.map((singleService , index)=>
              <div key={index} className="repeater-wrapper my-2">
                <div className="row">
                  <div className="col-12 d-flex product-details-border position-relative pe-0 fs-6">
                    <div className="row w-100 pe-lg-0 pe-1 py-3">
                      <div className="col-lg-5 col-12 mb-lg-0 mb-2 mt-lg-0 mt-2">
                        <p className="card-text col-title mb-md-50 mb-0">
                          Item
                        </p>
                        <select className="form-control item-details">
                          <option value="App Design">App Design</option>
                          <option value="App Customization" selected="">
                            App Customization
                          </option>
                          <option value="ABC Template">ABC Template</option>
                          <option value="App Development">
                            App Development
                          </option>
                        </select>
                        <textarea className="form-control mt-4" rows="1">
                          Customization &amp; Bug Fixes
                        </textarea>
                      </div>
                      <div className="col-lg-3 col-12 my-lg-0 my-2">
                        <p className="card-text col-title mb-md-2 mb-0">Cost</p>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="24"
                        />
                        <div className="mt-4">
                          <span>Discount: </span>
                          <span className="discount">0%</span>
                          <span
                            className="tax-1 ms-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Tax 1"
                          >
                            0%
                          </span>
                          <span
                            className="tax-2 ms-2"
                            data-toggle="tooltip"
                            data-placement="top"
                            title=""
                            data-original-title="Tax 2"
                          >
                            0%
                          </span>
                        </div>
                      </div>
                      <div className="col-lg-2 col-12 my-lg-0 my-2">
                        <p className="card-text col-title mb-md-2 mb-0">Qty</p>
                        <input
                          type="number"
                          className="form-control"
                          placeholder="1"
                        />
                      </div>
                      <div className="col-lg-2 col-12 mt-lg-0 mt-2">
                        <p className="card-text col-title mb-md-50 mb-0">
                          Price
                        </p>
                        <p className="card-text mb-0">$24.00</p>
                      </div>
                    </div>
                    <div className="d-flex flex-column align-items-center justify-content-between border-left invoice-product-actions py-2 px-2">
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
                        className="feather feather-x cursor-pointer font-medium-3"
                        data-repeater-delete=""
                        onClick={(index)=>removeItem(index)}
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                      <div className="dropdown">
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
                          className="feather feather-settings cursor-pointer more-options-dropdown mr-0"
                          id="dropdownMenuButton"
                          role="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                        <div
                          className="dropdown-menu dropdown-menu-right item-options-menu p-50"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <div className="form-group">
                            <label for="discount-input" className="form-label">
                              Discount(%)
                            </label>
                            <input
                              type="number"
                              className="form-control"
                              id="discount-input"
                            />
                          </div>
                          <div className="form-row mt-50">
                            <div className="form-group col-md-6">
                              <label for="tax-1-input" className="form-label">
                                Tax 1
                              </label>
                              <select
                                name="group-a[0][tax-1-input]"
                                id="tax-1-input"
                                className="form-control tax-select"
                              >
                                <option value="0%" selected="">
                                  0%
                                </option>
                                <option value="1%">1%</option>
                                <option value="10%">10%</option>
                                <option value="18%">18%</option>
                                <option value="40%">40%</option>
                              </select>
                            </div>
                            <div className="form-group col-md-6">
                              <label for="tax-2-input" className="form-label">
                                Tax 2
                              </label>
                              <select
                                name="group-a[0][tax-2-input]"
                                id="tax-2-input"
                                className="form-control tax-select"
                              >
                                <option value="0%" selected="">
                                  0%
                                </option>
                                <option value="1%">1%</option>
                                <option value="10%">10%</option>
                                <option value="18%">18%</option>
                                <option value="40%">40%</option>
                              </select>
                            </div>
                          </div>
                          <div className="dropdown-divider my-1"></div>
                          <div className="d-flex justify-content-between">
                            <button
                              type="button"
                              className="btn btn-outline-primary btn-apply-changes waves-effect"
                            >
                              Apply
                            </button>
                            <button
                              type="button"
                              className="btn btn-outline-secondary waves-effect"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )}
            </div> 
            <div className="row">
              <div className="col-12 px-0">
                <button
                  type="button"
                  className="btn btn-sm btn-primary"
                  data-repeater-create="" onClick={addItem}
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
                    className="feather feather-plus mr-25"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  <span className="align-middle" >Add Item</span>
                </button>
              </div>
            </div>
          </form>
    </>
  )
}

export default AddItem