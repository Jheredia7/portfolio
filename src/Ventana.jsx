import React, { useEffect, useRef, useState } from "react";

export const Ventana = () => {
  const [isShow, setIsShow] = useState(false);
  const onClose = () => {
    setIsShow(false);
  };

  useEffect(() => {
    setTimeout(() => setIsShow(true), 5000);
    access.current.focus();
  }, [isShow]);

  const access = useRef(null);

  return (
    <>
      <div>
        <div
          className="modalContainer animate__animated animate__fadeInDownBig"
          style={{ display: isShow ? "" : "none" }}
        >
          <div className="modal-content">
            {/* <span onClick={onClose} className="close">
              ×
            </span> */}

            <form>
              <input
                ref={access}
                className="terminal "
                type="text"
                placeholder="npm run help"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
