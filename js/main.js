// And for a doughnut chart
var ctx = document.getElementById('myDoughnutChart');
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
          labels: ["18-24 years old", "25-34 years old", "35-44 years old", "45-54 years old"],
          datasets: [
            {
              label: "Ages",
              backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
              data: [27.3,45.5,18.2,9.1],
            }
          ]
        },
    options: {
          title: {
            display: true,
            text: 'Ages of survey participants interested in personal training'
          }
        }
});





// horizontal bar chart

new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    data: {
      labels: ["Recipes/nutritional info", "Training videos/pictures", "Upload progress pictures", "Leave comments/notes", "Upload videos/picture"],
      datasets: [
        {
          label: "Wanted features",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [91,73,82,82,64]
        }
      ]
    },

    options: {
      scales: {
            xAxes: [{
                ticks: {
                    // Include a dollar sign in the ticks
                    callback: function(value, index, values) {
                        return value + "%";
                    }
                }
            }]
        },
      legend: { display: false },
      title: {
        display: true,
        text: 'Feautures voted on by potential users'
      }
    }
});
