import Ember from 'ember';
import needsAuthorization from 'open-ipsum-ui/mixins/needs-authorization';

export default Ember.Route.extend(needsAuthorization, {
  session: Ember.inject.service(),
  api: Ember.inject.service(),

  model() {
    return this.get('api').authenticated(`/users/${this.get('session.username')}`);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({errors: null});
  },

  actions: {
    save() {

    },

    delete() {

    }
  }
});
