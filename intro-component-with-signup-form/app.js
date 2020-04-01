
new Vue({
    el: 'form',
    data: {
      inputs: {
        first: '', 
        last: '', 
        email: '', 
        password: ''
      },
      emptyInputsArray: [],
      validEmail: ' ',
    },
    methods: {
      findEmptyInputs: function() {
        const keys = Object.keys(this.inputs);
        keys.forEach( (key) => {
          if (this.inputs[key].trim().length < 1) {
            this.emptyInputsArray.push(key);
          }
        });        
        return this.emptyInputsArray;
      },

      checkEmail: function() {
        const emailRegex = /[\w.+-]+@\w{2,}\.\w{2,}/;
        this.validEmail = emailRegex.test(this.inputs.email);
      },

      validate: function() {
        event.preventDefault();
        this.emptyInputsArray.splice(0, this.emptyInputsArray.length);
        this.findEmptyInputs();
        this.checkEmail();
      },
      
    }
  });
  