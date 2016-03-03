'use strict';

// inputCity
// button
//city-name
//temperature


$(document).ready(init);


function init(){

	$("#button").click(pullData_Render);

	$("#inputCity").keypress(function(e) {
    if(e.which == 13) {
			pullData_Render();
    }
	});

	console.log('ready');
}

function pullData_Render() {
		var zip = $("#inputCity").val();
		var apiKey = '6ec9e0463a4df8ccb039013b6c22d8da';
		var query = 'http://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&appid=' + apiKey;
		$.getJSON(query, function(jd) {
			if(jd.cod == 200){
				var temp_min = jd.main.temp_min;
				var temp_max = jd.main.temp_max;
				var temp = (temp_max + temp_min)/2;
				temp = kelvin_to_celsius(temp);
				temp = temp.toFixed(2);
				var cityname = jd.name;
				$("#city-name").html(cityname);
				$("#temperature").html(temp +  " Degrees ");
				console.log(jd);
			}else{
				alert("Invalid zip-code !");
			}
				$("#inputCity").val("");
    });
}

function kelvin_to_celsius(fah){
	return fah - 273.15;
}
