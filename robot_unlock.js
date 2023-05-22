var body = $response.body
var url = $request.url

function dreame_unloack() {
	if (body) {
		const newData = JSON.parse($response.body, (key, value) => {
		  if (key === 'value' && value === 'mismatched') {
		    return 'matched';
		  } else {
		    return value;
		  }
		});
		$notification.post("Dreame has been unlocked", "Ares", "2023.5.22");
	  	$done({ body: JSON.stringify(newData) })
	} else {
	  	$done({})
	}
}

(async function() {
	await dreame_unloack();
})();