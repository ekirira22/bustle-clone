import Ember from 'ember';

export default Ember.Component.extend({
      addNewPost: false,
      actions: {
        rentalPostShow() {
          this.set('addNewPost', true);
        },
        savePost1() {
          var params: {
            owner: this.get("owner"),
            head: this.get('head'),
            body: this.get('body'),
            snippet: this.get('snippet'),
            image: this.get('image'),
          };

          this.set('addNewPost', false);
          this.sendAction('savePost2', params);
        }
        hideForm() {
          this.set('addNewPost', false);
        }
      });
