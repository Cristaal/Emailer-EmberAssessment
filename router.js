Emailer.Router.map(function() {
  this.resource('emails', {path: '/'});
  this.resource('email');
  this.resource('new-email')
});
