
 import * as $ from 'jquery';

$(document).ready(function(){
    $("#menu-toggle").click(function(e){
      e.preventDefault();
      $("#wrapper").toggleClass("menuDisplayed");
    });
  });