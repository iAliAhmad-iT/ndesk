import React from "react";
import "./AddMember.css";
import LeftAllMember from './LeftAllMember'
import RightForm from "./RightForm";
import RightBottomForm from "./RightBottomForm";
const AddMember = () => {
return (
    <>
      <section className="addMember">
        <div className="container py-4">
          <div className="row">
          <div className="col-md-9">
            <LeftAllMember/>
            </div>

            <div className="col-xl-3 col-md-4 col-12">
              <RightForm/>
              <RightBottomForm/>
              </div>

            </div>
          </div>
      </section>
    </>
  );
};

export default AddMember;
