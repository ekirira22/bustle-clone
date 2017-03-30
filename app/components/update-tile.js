import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePost(){
      this.set('updatePostForm',true);
    },
    update(post) {
      var params = {
        owner: this.get("owner"),
        head: this.get('head'),
        body: this.get('body'),
        snippet: this.get('snippet'),
        image: this.get('image'),
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
  }
},
});
