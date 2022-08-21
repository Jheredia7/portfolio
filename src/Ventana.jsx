import React, { useEffect, useState } from "react";

export const Ventana = () => {
  const [isShow, setIsShow] = useState(false);
  const onClose = () => {
    setIsShow(false);
  };

  useEffect(() => {
    setTimeout(() => setIsShow(true), 5000);
  }, [isShow]);

  const window = true;

  return (
    <>
      <div>
        <div
          className="modalContainer animate__animated animate__fadeInDownBig"
          style={{ display: isShow ? "" : "none" }}
        >
          <div className="modal-content">
            <span onClick={onClose} className="close">
              ×
            </span>{" "}
            <h1>PORTFOLIO JUAN ANTONIO</h1>
          </div>
        </div>
      </div>
    </>
  );
};
