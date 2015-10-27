import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

const APP_ID = 'pxgHCHJq4JvmFBnZBJFjXLGmSvnjaHlGxfgUj4UC';
const API_KEY = 'ckEIESvnqQSDZCm2ia7UBfXNOdZxodYKhCSni8eg';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': APP_ID,
    'X-Parse-REST-API-Key': API_KEY
  }
});

import DogCollection from './Collection';
import DogTemplate from './Template';

let dogs = new DogCollection();


function renderDogs() {
  // Creating an empty dom node
  let $ul = $('<ul></ul>');
  
  // iterate each of the models
  dogs.each(function(dog){
    
    // dog is an instance of PersonModel

    // grab raw data from dog model
    let data = dog.toJSON();
    console.log('data', data);
    
    // pass the data to our template
    let templateString = DogTemplate(data);
    console.log('templateString', templateString);

    // use templateString to create an li dom node
    let $li = $(templateString);

    // append li to the ul
    $ul.append($li);
  });

  // set ul to the body
  $('body').html($ul);
}

dogs.fetch().then(renderDogs);

console.log('Hello, World');
