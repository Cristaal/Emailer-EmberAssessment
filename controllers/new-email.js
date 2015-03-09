Emailer.NewEmailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('email', {
        address: this.get('address'),
        subject: this.get('subject'),
        body: this.get('body')
      });
      newEmail.save();
      this.transitionToRoute('emails');
      this.set('address', '');
      this.set('subject', '');
      this.set('body', '');
    }
  }
})
