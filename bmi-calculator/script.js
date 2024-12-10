const units = document.getElementsByName('units');
const [metric, imperial] = units;
const metricInputs = document.getElementById('metric-inputs');
const imperialInputs = document.getElementById('imperial-inputs');

// display metric units when radio button is clicked
metric.addEventListener('change', (event) => {
  if (metric.checked) {
    metricInputs.style.display = 'inherit';
    imperialInputs.style.display = 'none';
  }
});

// display imperial units when radio button is clicked
imperial.addEventListener('change', (event) => {
  if (imperial.checked) {
    imperialInputs.style.display = 'inherit';
    metricInputs.style.display = 'none';
  }
});
