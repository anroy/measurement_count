if (window.safecast != undefined) {
  console.log('WARNING! Variable \'safecast\' is already defined!');
} else {
  window.safecast = {};
}

safecast.api_key = null;

if (safecast.getMeasurementCount != undefined) {
  console.log('WARNING! safecast.getMeasurementCount is already defined and is about to be overwritten!');
}
safecast.getMeasurementCount = function (element_id) {

	if (element_id != undefined && typeof(element_id) != 'string') {
		alert('Safecast.getMeasurementCount() called with non-string argument');
		return;
	}

	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}

	var url = 'https://api.safecast.org/api/measurements/count';
	if (safecast.api_key != null) {
		url += '?api_key=' + safecast.api_key;
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.setRequestHeader('Accept', 'application/json');

	xmlhttp.onreadystatechange = function() {

		if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200) {
			//request is done and good
			var jsonResponse = JSON.parse(xmlhttp.responseText);
			var count = jsonResponse.count;

			var destination = document.getElementById(element_id);
			if (destination) {
				destination.innerHTML = count;
			} else {
				console.log(count + ' measurements');
			}
		}
	};

	xmlhttp.send();
};
