$(function() {
	$('#Run').click(function(e) {
		if($('#Uul').prop('checked')){
			chrome.tabs.getSelected(
				null,
				function(tab){
					console.log(func_generate(tab.url));
					var url = func_generate(tab.url);
					chrome.tabs.update(null,{url:url});
				}
			);
		}
		if($('#Disturbance').prop('checked')){
			chrome.tabs.executeScript(null,{
				"code" : "document.getElementsByTagName('footer')[0].innerHTML =''"
			});
		}
	});
});
