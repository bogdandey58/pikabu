$(document).ready(function() {
	getSinglePost();
});

function getSinglePost (){
	$.post(
		"core/core.php",
		{"action" : "getSinglePost", "id": 2},
		function (data){
			data = JSON.parse(data);
			console.log(data);
			var out='';
			out+=``;
			$('main').html(out);
		}
	);
}