$(document).ready(function() {
  var tripList = $('#trip_list');
  /*
  var data = $.getJSON('trips.json', function( data ) {
    return $.parseJSON(data);
  });
  console.log(data['trips']);
  */
  data = [];
  $.ajax({
    url:'data/trips.json',
    dataType: 'json',
    success: function(response) {
      data = response;
    },
    async: false
  });

  console.log(data)
          

});
