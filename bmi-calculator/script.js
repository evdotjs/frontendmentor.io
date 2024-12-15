const unitSelect = document.querySelector('.unit-select');
const metricInputs = document.getElementById('metric-inputs');
const imperialInputs = document.getElementById('imperial-inputs');
const bmiResult = document.querySelector('.bmi-result');
const welcome = document.querySelector('.welcome');
const bmiScore = document.querySelector('.bmi-score');
const form = document.querySelector('form');

const message = {
  showWelcome() {
    welcome.style.display = 'inherit';
    bmiResult.style.display = 'none';
  },
  showBmiResult() {
    bmiResult.style.display = 'inherit';
    welcome.style.display = 'none';
  },
};

const bmiValues = {
  heightCm: 0,
  weightKg: 0,
  heightFt: 0,
  heightIn: 0,
  weightLbs: 0,
  bmi: 0,
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
  resetValues() {
    this.heightCm = 0;
    this.weightKg = 0;
    this.heightFt = 0;
    this.heightIn = 0;
    this.weightLbs = 0;
    this.bmi = 0;
    bmiScore.innerText = '';
    form.reset();
    message.showWelcome();
  },
};

// display metric/imperial inputs based on which radio button is checked
unitSelect.addEventListener('change', (event) => {
  bmiValues.resetValues();
  if (event.target.id === 'metric') {
    metricInputs.style.display = 'inherit';
    imperialInputs.style.display = 'none';
  } else {
    imperialInputs.style.display = 'inherit';
    metricInputs.style.display = 'none';
    imperial.checked = true;
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
    message.showBmiResult();
    bmiValues.bmi = bmiValues.calculateMetric();
    bmiScore.innerText = bmiValues.bmi.toFixed(1);
    console.log(bmiValues);
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
    message.showBmiResult();
    bmiValues.bmi = bmiValues.calculateImperial();
    bmiScore.innerText = bmiValues.bmi.toFixed(1);
  }
});
