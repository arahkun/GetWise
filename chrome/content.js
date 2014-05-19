
var GetWise = {
	snapshot_page: function(html){
		return true;
	}
	
};

document.addEventListener('DOMContentLoaded', function () {
	chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
	  	switch (request.action){ 
	  		case 'snapshot_page':
	  			chrome.runtime.sendMessage({action: "options"}, function(response) {
					options = response;
		  			GetWise.snapshot_page(window);
				});	
		    	break;
		}
	  }
	);
});

