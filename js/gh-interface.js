$(document).ready(function() {
  $('#text').click(function(){
    $.get('https://api.github.com/users/katycodes/repos?access_token=247db9e4c67f7c7efeeb20d5fe4997258bf18bef').then(function(response){
      console.log(response);
      $('#text').html("this is working");
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
});
});
