Emailer.MessageController = Ember.Controller.extend({
  messageSent: false,
  actions: {
    sendMessage: function() {
      var message = prompt('Type your email here:');
      this.set('confirmationNumber', Math.round(Math.random() * 100000));
      this.set('messageSent', true);
    }
  }
});
// Emailer.NewEmailController = Ember.Controller.extend({
//   actions: {
//     save: function() {
//       var newEmail = this.store.createRecord('email', {
//         address: this.get('address'),
//         subject: this.get('subject'),
//         body: this.get('body')
//       });
//       debugger;
//       newEmail.save();
//       this.transitionToRoute('emails');
//     }
//   }
// })
