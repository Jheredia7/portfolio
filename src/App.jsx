import React from "react";
import Matrix from "./Matrix";
import { Ventana } from "./Ventana";

export const App = () => {
  return (
    <>
      <Ventana />
      <Matrix fullscreen={true} />
    </>
  );
};
