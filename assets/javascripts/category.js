$(document).ready(function(){
  $('#projects').click(function(e){
    e.preventDefault();
    $.get("/proj_partial.html", function(data) {
      $('#container-category').empty();
      $('#container-category').html(data);
    });
  });

  $('#resume').click(function(e){
    e.preventDefault();
    $.get("/res_partial.html", function(data) {
      $('#container-category').empty();
      $('#container-category').html(data);
    });
  });

});
