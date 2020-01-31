$(document).ready(function() {
	var url = 'https://flynn.boolean.careers/exercises/api/array/music';


  $.ajax(
    {
      'url': url,
      'method': 'GET',
      'succes': function (data) {
        console.log(data);
        processData(data.response);
      },
      'error': function (request, state, errors) {
        alert('errore' + errors);
      }
    }
  );
});

function processData (data) {
  console.log(data);

}
