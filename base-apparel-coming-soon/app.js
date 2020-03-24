new Vue({
  el: 'main',
  data: {
    email: '',
    valid: ' ' ,
  },
  methods: {
    isValid: function(event) {
      event.preventDefault();
      let includesSymbols = this.email.includes('@') &&
                            this.email.includes('.');
      let emailLength = this.email.length;
      this.valid = (includesSymbols && emailLength > 5);
    }
  }
});
