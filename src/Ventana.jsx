import React, { useEffect, useRef, useState } from "react";
import Matrix from "./Matrix";

export const Ventana = () => {
  const [isShow, setIsShow] = useState(false);
  const [color, setColor] = useState("#000000");

  const [comando, setComando] = useState("");
  const [acierto, setAcierto] = useState(null);
  const [boton1, setBoton1] = useState(false);
  const [boton2, setBoton2] = useState(false);
  const [boton3, setBoton3] = useState(false);
  // const [next, setNext] = useState(false);
  useEffect(() => {
    setTimeout(() => setIsShow(true), 5000);
  }, []);

  useEffect(() => {
    access.current.focus();
  }, [isShow]);
  useEffect(() => {
    access.current.focus();
  }, [acierto]);
  const access = useRef(null);

  const onClose = (event) => {
    event.preventDefault();
    event.target.reset();
    if (comando === "npm run help") {
      setAcierto(true);
      setTimeout(() => setBoton1(true), 1300);
      setTimeout(() => setBoton2(true), 1550);
      setTimeout(() => setBoton3(true), 1800);
    } else {
      setAcierto(false);
      setColor("#FF0000");

      setTimeout(() => setAcierto(null), 1500);
      setTimeout(() => setColor("#000000"), 1500);
      setComando("");
      console.log(comando);
    }
  };

  const onClear = () => {
    setAcierto(null);
    setComando("");
    setBoton1(false);
    setBoton2(false);
    setBoton3(false);
  };

  return (
    <>
      <Matrix fullscreen={true} color={color} />
      <div>
        <div
          className={"modalContainer animate__animated animate__fadeInDownBig "}
          style={{}}
        >
          <div
            className={"modal-content2 animate__animated animate__shakeX"}
            style={{ display: acierto === false ? "" : "none" }}
          >
            <h1 className="mensajeError">Erorr</h1>
          </div>
          <div
            className="modal-content"
            style={{ display: acierto !== false ? "" : "none" }}
          >
            <form id="ventana" onSubmit={onClose}>
              <input
                autoComplete="off"
                spellCheck={false}
                ref={access}
                className="terminal "
                type="text"
                placeholder="npm run help"
                onChange={(event) => setComando(event.target.value)}
                name="comando"
                style={{ display: acierto === true ? "none" : "" }}
              />
            </form>
            <div>
              <h1
                className="comandos"
                type="text"
                name="comandos"
                style={{ display: acierto === true ? "" : "none" }}
              >
                Estos son los comandos disponibles:
                <span className="spani">&#160;</span>
                <br />
              </h1>
              <div>
                <button
                  disabled
                  className="boton"
                  style={{ display: boton1 === true ? "" : "none" }}
                >
                  Ayuda
                </button>
                <a
                  href="https://www.linkedin.com/in/juanherediar/"
                  target="_blank"
                  className="boton"
                  style={{ display: boton2 === true ? "" : "none" }}
                >
                  Sobre mi
                </a>
                <button
                  onClick={onClear}
                  className="boton"
                  style={{ display: boton3 === true ? "" : "none" }}
                >
                  Limpiar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
