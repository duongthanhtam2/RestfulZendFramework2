

setMinHeightContent();
$(document).ready(function() {
	setMinHeightContent();
});

function setMinHeightContent(){
	var heightDocument = $("html").height();
	var heightHeader = $("#header").height();
	var heightFooter = $("#main-footer-wraper").height();
	var heightContent = (heightDocument - (heightHeader + heightFooter))+30;
	$("#wrapper-content").attr('style','min-height:'+heightContent+'px');
}

if (top.location != self.location){
	top.location = self.location;
}
