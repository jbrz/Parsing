import Backbone from 'backbone';
import dogModel from './Model';

let DogCollection = Backbone.Collection.extend({
  
  url: 'https://api.parse.com/1/classes/Test2',

  model: dogModel,

  parse: function(data) {
    return data.results;
  }

});

export default DogCollection;