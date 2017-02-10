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
    // $.get("/assets/documents/annaresumedoc.pdf", function(data) {
      $('#container-category').empty();
      $('#container-category').html("<div class='white-div pad-bottom'><a class='close' href=''><span class='glyphicon glyphicon-remove' aria-hidden='true'></span></a><br><object WMODE='transparent' width='700px' height='1000px' data='/assets/documents/annaresumedoc.pdf'></object>");
    // });
  });

  $('.close').click(function(e){
    e.preventDefault();
    $('#container-category').html("");
  })

});
