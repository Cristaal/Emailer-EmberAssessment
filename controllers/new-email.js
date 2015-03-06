Emailer.NewEmailController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newEmail = this.store.createRecord('post', {
        address: this.get('address'),
        subject: this.get('subject'),
        body: this.get('body')
      });

      newEmail.save();
      this.transitionToRoute('inbox')
    }
  }
})
