import React, { useEffect, useRef, useState } from "react";

export const Ventana = () => {
  const [isShow, setIsShow] = useState(false);
  const [comando, setComando] = useState("");
  useEffect(() => {
    setTimeout(() => setIsShow(true), 5000);
  }, []);

  useEffect(() => {
    access.current.focus();
  }, [isShow]);

  const access = useRef(null);

  const onClose = (event) => {
    event.preventDefault();
    if (comando === "npm run help") return setIsShow(false);
  };

  console.log(isShow);
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

            <form onSubmit={onClose}>
              <input
                ref={access}
                className="terminal "
                type="text"
                placeholder="npm run help"
                onChange={(event) => setComando(event.target.value)}
                value={comando}
                name="comando"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
