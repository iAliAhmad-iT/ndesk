import React from "react";

const PreviewBtn = (props) => {
  return (
    <>
      <a
        href="./app-invoice-preview.html"
        className="btn color btn-block mb-2 waves-effect"
        style={{ borderColor: "#7367F0", color: "#7367F0" ,display : "block"}}
      >
        {props.name}
      </a>
    </>
  );
};

export default PreviewBtn;
