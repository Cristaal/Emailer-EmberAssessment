Emailer.MessageController = Ember.Controller.extend({
  messageSent: false,
  actions: {
    sendMessage: function() {
      var message =
      this.set('confirmationNumber', Math.round(Math.random() * 100000));
      this.set('messageSent', true);
    }
  }
});
