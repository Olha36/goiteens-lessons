// import { nanoid } from "nanoid";

// const id = nanoid();
// console.log(id);

// const shortNanoid = nanoid(5);
// console.log(shortNanoid);



// import Chart from './chart.js'

const ctx = document.getElementById("chart");

const data = {
  labels: ["Jan", "Febr", "March"],
  datasets: [
    {
      label: "Temperature",
      data: [18, 20, 22, 25],
      borderColor: "#9c1a1a",
    },
  ],
};

new Chart(ctx, {
  type: "line",
  data: data,
});




