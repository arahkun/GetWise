
var GetWise = {

	report: function(){
		chrome.runtime.sendMessage(
		{
			action: "report", 
			data: { 
				'url': ''
			}
		}, 
		function(response) { 
			alert('response');
			window.close(); 
		});
		
		
	},
	prepare_popup: function(){
		var report_el = document.getElementById('report');
		report_el.addEventListener('click', 
			function(){ 
				GetWise.report();
			});
	}
}

document.addEventListener('DOMContentLoaded', function () {
  GetWise.prepare_popup();
});