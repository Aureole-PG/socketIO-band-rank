import React, { useState } from "react";

const AddBands = () => {
  const [value, setValue] = useState("");
  const onSubmit = (ev) => {
    ev.preventDefault();
    // if (value.trim().length > 0) {
    // }
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
