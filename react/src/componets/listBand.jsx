import React, { useState, useEffect, useContext } from "react";
import { SocketContex } from "../services/socketContext";

export function ListBand() {
  const { socket } = useContext(SocketContex);
  const [bands, setBands] = useState([]);
  useEffect(() => {
    socket.on("bands-list", (e) => {
      setBands(e);
    });
  }, [socket]);
  const vote = (id) => {
    socket.emit("vote", id);
  };
  const onHandleChange = (event, id) => {
    const newName = event.target.value;
    setBands((bands) =>
      bands.map((band) => {
        if (band.id === id) {
          band.name = newName;
        }
        return band;
      })
    );
  };
  const sendChange = (event, id) => {
    console.log(event.target, id);
    socket.emit("changeName", id, event.target.value);
  };
  const deleteBand = (id) => {
    socket.emit("delete", id);
  };
  return (
    <table>
      <thead>
        <tr>
          <th>Votar</th>
          <th>Nombre</th>
          <th>Votos</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {bands.length > 0 &&
          bands.map((band) => (
            <TableRows
              key={band.id}
              vote={vote}
              band={band}
              onHandleChange={onHandleChange}
              deleteBand={deleteBand}
              sendChange={sendChange}
            />
          ))}
      </tbody>
    </table>
  );
}

const TableRows = ({ band, onHandleChange, sendChange, vote, deleteBand }) => (
  <tr>
    <td>
      <button
        onClick={() => vote(band.id)}
        class="btn waves-effect waves-light"
        type="submit"
        name="action"
      >
        +1
      </button>
    </td>
    <td>
      <input
        type="text"
        onBlur={(e) => sendChange(e, band.id)}
        onChange={(e) => onHandleChange(e, band.id)}
        value={band.name}
      />
    </td>
    <td>
      <h4>{band.votes}</h4>
    </td>
    <td>
      <button
        onClick={() => deleteBand(band.id)}
        class="btn waves-effect waves-light"
        type="button"
        name="action"
      >
        Eliminar
      </button>
    </td>
  </tr>
);
