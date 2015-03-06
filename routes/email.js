Emailer.EmailRoute = Ember.Route.extend({
  model: functio(params) {
    return this.store.find('email', params.post_id);
  }
});
