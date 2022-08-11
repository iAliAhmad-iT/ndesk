import React from 'react'

const AddNote = () => {
  return (
    <>
        <div className="form-group mb-4">
                <label for="note" className="form-label font-weight-bold">
                  Note:
                </label>
                <textarea className="form-control" rows="2" id="note">
                  It was a pleasure working with you and your team. We hope you
                  will keep us in mind for future freelance projects. Thank You!
                </textarea>
              </div>
    </>
  )
}

export default AddNote