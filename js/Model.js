import Backbone from 'backbone';

let dogModel = Backbone.Model.extend({

  urlRoot: 'https://api.parse.com/1/classes/Test2',

  idAttribute: 'objectId'

});


export default dogModel;