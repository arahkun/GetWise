var default_options = {
	'reporting_endpoint': 'http://requestb.in/1d0ajw51', 
	'status_endpoint': 'http://requestb.in/1d0ajw51',
};

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
  	switch (request.action){ 
  		case 'options':
	    	var options = default_options;
	    	try {
	    		if(localStorage['options']){
	    			options = JSON.parse(localStorage['options']);
	    		}
	    	}catch(err){
				options = default_options;
	    	}
	    	if(typeof options === 'string'){

	    		options = JSON.parse(options);
	    	}
	    	var new_options = {};
	    	//save first
	    	if(request.options){
	    		for(var option in default_options){
	    			new_options[option] = (request.options[option] !== undefined) ? request.options[option] : default_options[option];
	    		}
	    		options = new_options;
	    		localStorage['options'] = JSON.stringify(options);
	    	}
			sendResponse(options);
	    	break;
	    case 'report':
		    chrome.tabs.query({currentWindow: true,active:true},function(tab){
			    url = tab[0].url;
			    var xmlhttp=new XMLHttpRequest();
		    	xmlhttp.onreadystatechange=function(){
		    		sendResponse('Submitted OK');
		    	};
				xmlhttp.open("GET",default_options.reporting_endpoint + '?' + encodeURIComponent(url),true);
				xmlhttp.send(null);
			});
	    	
			return true;
	    	break;
	}
  }
);


