import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const PieC = () => {
  return (
    <>
      <Pie
        style={{
          height: "25% ",
          width: "20%",
        }}
        data={{
          labels: ["Bottle", "Condoms", "Glass"],
          datasets: [
            {
              data: [30, 50, 100],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
      />
    </>
  );
};

export default PieC;
