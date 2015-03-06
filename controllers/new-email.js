Emailer.NewEmailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        address: this.get('address'),
        subject: this.get('subject'),
        body: this.get('body')
      });
debugger;
      newEmail.save();
      this.transitionToRoute('emails');
    }
  }
})
