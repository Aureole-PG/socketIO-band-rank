import React, { useContext, useEffect } from "react";
import { AddBands } from "./AddBands";
import { ListBand } from "./listBand";
import { SocketContex } from "../services/socketContext";
import Charts from "./charts";
const Home = () => {
  const { online } = useContext(SocketContex);

  // console.log(bands);

  return (
    <div>
      <div className="card-panel hoverable">
        server status
        {online ? (
          <span class="badge blue ">Online</span>
        ) : (
          <span class="badge red">Offline</span>
        )}
      </div>
      <div className="container">
        <div className="row">
          <div className="col s12">
            <h5>Band Names</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12 ">
            <ListBand />
          </div>
          <div className="col s12">
            <AddBands />
          </div>
        </div>
        <div className="row">
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Home;
