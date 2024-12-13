const units = document.getElementsByName('units');
const [metric, imperial] = units;
const metricInputs = document.getElementById('metric-inputs');
const imperialInputs = document.getElementById('imperial-inputs');
const bmiScore = document.querySelector('.bmi-score');
const bmiValues = {
  heightCm: 0,
  weightKg: 0,
  heightFt: 0,
  heightIn: 0,
  weightLbs: 0,
  calculateMetric() {
    if (this.weightKg && this.heightCm) {
      return this.weightKg / (this.heightCm / 100) ** 2;
    }
    return 0;
  },
  calculateImperial() {
    if (this.weightLbs && this.heightFt) {
      return 703 * (this.weightLbs / (this.heightFt + this.heightIn) ** 2);
    }
    return 0;
  },
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

// update bmiValues{} whenever user changes a metric value
metricInputs.addEventListener('change', (event) => {
  let newValue = parseInt(event.target.value);
  if (newValue) {
    if (event.target.name == 'height-cm') {
      bmiValues.heightCm = newValue;
    } else {
      bmiValues.weightKg = newValue;
    }
  }

  if (bmiValues.calculateMetric() > 0) {
    bmiScore.innerText = bmiValues.calculateMetric().toFixed(1);
  }
});

// update bmiValues{} whenever user changes an imperial value
imperialInputs.addEventListener('change', (event) => {
  let newValue = parseInt(event.target.value);
  if (newValue >= 0) {
    if (event.target.name == 'height-ft') {
      bmiValues.heightFt = newValue * 12;
    } else if (event.target.name == 'height-in') {
      bmiValues.heightIn = newValue;
    } else {
      bmiValues.weightLbs = newValue;
    }
  }

  if (bmiValues.calculateImperial() > 0) {
    bmiScore.innerText = bmiValues.calculateImperial().toFixed(1);
  }
});
