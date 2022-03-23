import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const Piechart = () => {
  return (
    <>
      <Line
        style={{
          height: "45% ",
          width: "50%",
        }}
        data={{
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Average Order",
              data: [2, 9, 30, 41, 56, 55, 40],
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
      />
    </>
  );
};

export default Piechart;
