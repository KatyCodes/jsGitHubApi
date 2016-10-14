var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#button').click(function(event){
    event.preventDefault();
    var userInput = $('#userInput').val().toLowerCase();
    $.get('https://api.github.com/users/'+ userInput + '/repos?access_token='+ apiKey).then(function(response){
      console.log(response);
      for (i = 0; i < response.length; i++) {
            $('ol').append('<li>' + response[i].full_name + '</li>'); }
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
});
});
