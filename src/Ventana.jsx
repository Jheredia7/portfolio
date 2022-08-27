import React, { useEffect, useRef, useState } from "react";

export const Ventana = () => {
  const [isShow, setIsShow] = useState(false);
  const [comando, setComando] = useState("");
  // const [next, setNext] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsShow(true), 5000);
  }, []);

  useEffect(() => {
    access.current.focus();
  }, [isShow]);

  const access = useRef(null);

  const onClose = (event) => {
    event.preventDefault();
    if (comando === "npm run help") {
      return setComando(true);
    }
  };
  console.log(`Comando: ${comando}`);
  return (
    <>
      <div>
        <div
          className={"modalContainer animate__animated animate__fadeInDownBig "}
          style={{ display: isShow ? "" : "none" }}
        >
          <div className="modal-content">
            {/* <span onClick={onClose} className="close">
              ×
            </span> */}

            <form onSubmit={onClose}>
              <input
                autoComplete="off"
                spellCheck={false}
                ref={access}
                className="terminal "
                type="text"
                placeholder="npm run help"
                onChange={(event) => setComando(event.target.value)}
                name="comando"
                style={{ display: comando === true ? "none" : "" }}
              />
              <div>
                <h1
                  className="comandos"
                  type="text"
                  name="comandos"
                  style={{ display: comando === true ? "" : "none" }}
                >
                  Aqui estan los comandos disponibles:
                  <span className="spani">&#160;</span>
                </h1>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
