import React, { useState, useContext } from "react";
import { SocketContex } from "../services/socketContext";
const AddBands = () => {
  const { socket } = useContext(SocketContex);
  const [value, setValue] = useState("");
  const onSubmit = (ev) => {
    ev.preventDefault();
    if (value.trim().length > 0) {
      socket.emit("newBand", value);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="input-field col s12">
          <h5>Agregar banda</h5>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            placeholder="Agregar banda"
            id="band_name"
            type="text"
            className="validate"
            onChange={(ev) => setValue(ev.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export { AddBands };
