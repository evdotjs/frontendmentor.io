const units = document.getElementsByName('units');
const [metric, imperial] = units;
const metricInputs = document.getElementById('metric-inputs');
const imperialInputs = document.getElementById('imperial-inputs');
const values = {
  heightCm: 0,
  weightKg: 0,
  heightFt: 0,
  heightIn: 0,
  weightLbs: 0,
};

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

// update values{} whenever user changes a metric value
metricInputs.addEventListener('change', (event) => {
  let newValue = parseInt(event.target.value);
  if (newValue) {
    if (event.target.name == 'height-cm') {
      values.heightCm = newValue;
    } else {
      values.weightKg = newValue;
    }
  }
  console.log(values);
});

// update values{} whenever user changes an imperial value
imperialInputs.addEventListener('change', (event) => {
  let newValue = parseInt(event.target.value);
  if (newValue) {
    if (event.target.name == 'height-ft') {
      values.heightFt = newValue;
    } else if (event.target.name == 'height-in') {
      values.heightIn = newValue;
    } else {
      values.weightLbs = newValue;
    }
  }
  console.log(values);
});
