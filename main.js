$(document).ready(function() {
	var url = 'https://flynn.boolean.careers/exercises/api/array/music';
  $.ajax(
    {
      'url': url,
      'method': 'GET',
      'succes':function (data) {
        console.log(data);

      },
      'error': function (request, state, error) {
        alert('errore' + errors);
      }
    }
  )
});
