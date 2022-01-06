import React, { useEffect, useContext } from "react";
import { Chart, registerables } from "chart.js";
import { SocketContex } from "../services/socketContext";
Chart.register(...registerables);
const Charts = () => {
  const { socket } = useContext(SocketContex);
  let myChart;
  useEffect(() => {
    socket.on("bands-list", (e) => {
      createChart(e);
    });
  }, [socket]);

  const createChart = (bands = []) => {
    var ctx = document.getElementById("myChart").getContext("2d");
    if (myChart) {
      myChart.destroy();
    }
    myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: bands.map((band) => band.name),
        datasets: [
          {
            label: "# of Votes",
            data: bands.map((band) => band.votes),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        animation: false,
        indexAxis: "y",
        scales: {
          x: {
            stack: true,
          },
        },
      },
    });
  };

  return <canvas id="myChart"></canvas>;
};

export default Charts;
