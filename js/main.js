$(document).ready(function() {
	var url = 'https://flynn.boolean.careers/exercises/api/array/music';
  $.ajax(
    {
      'url': url,
      'method': 'GET',
      'success': function (data) {
        // console.log(data);
        processData(data.response);
      },
      'error': function (request, state, errors) {
        alert('errore' + errors);
      }
    });
	// funzione per ricerca album
	// $(".selezione").on("click", function() {
	// 	var active = $('select').val();
	// 	$.ajax(
	//     {
	//       'url': url,
	//       'method': 'GET',
	//       'success': function (data) {
	// 				for (var i=0; i < data.response; i++) {
	// 					if (data.response[i] == active) {
	// 						var cd = data[i];
	// 						var source = $('#entry-template').html();
	// 						var template = Handlebars.compile(source);
	// 						var html = template(cd);
	// 						$('.cds-container').append(html);
	// 					}
	// 					else if (active == "tutto") {
	// 						processData(data)
	// 					}
	// 			  }
	// 			},
	// 			error: function (richiesta,stato,errore) {
  //         alert("errore"+ errore)
	// 	    }
	//     });
	// 	})
});

function processData (data) {
  // console.log(data);
  for (var i=0; i < data.length; i++) {
    var cd = data[i];
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var html = template(cd);
    $('.cds-container').append(html);
  }
	console.log(data);
}
