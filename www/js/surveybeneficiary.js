surveybenfdate="";

screenheight=parseInt(screen.height)-260

$("#surveybeneficiarylist").height(screenheight);
$("#surveybeneficiarymap").height(screenheight);
document.getElementById("surveybeneficiarymap").style.display = "block"



//============ Survey Page ================
function startsurvey(respondantcode)
{
	//console.log(respondantcode);
	localStorage.respondantcode=CryptoJS.AES.encrypt('"'+respondantcode+'"', "Samuday360");

	var path = window.location.pathname.split("/").pop();
	if(path=="surveybeneficiarylist.html"){window.location.href="surveypage.html";}
	else if(path=="blsurveybeneficiarylist.html") {window.location.href="blsurveypage.html";}
}

$("#calendarbtn").on("click", function(){
	$("#event-cal-container").toggle();
})



//  Load baseline survey beneficiary List

function loadbaselineOpenBenef()
{
	localStorage.respondantcode="";
	filterLoadBlocks();
	getBLBeneficiaryList();
	//surveybeneficiary()
}


//  Load Monitoring Survey Beneficiary List

function loadMonitoringselectedBenef()
{
	localStorage.respondantcode="";
	if(typeof localStorage.surveybenfdate!="undefined" && localStorage.surveybenfdate!="")
	{surveybenfdate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);}
	else{surveybenfdate=(new Date()).toISOString().slice(0,10);}
	getMonitoringselectedBenef();
	filterLoadBlocks();
}