
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
        // return an array of empty inputs
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
        this.emptyInputsArray.splice(0, this.emptyInputsArray.length)
        this.findEmptyInputs();
        this.checkEmail();

        console.log('all inputs are filled: ', this.emptyInputsArray.length === 0 );
        console.log('missing inputs: ', this.emptyInputsArray.join(', '));
        console.log('email is valid: ', this.validEmail, '\n\n');
      },
      
    }
  });
  