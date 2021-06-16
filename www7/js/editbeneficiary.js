surveybenfdate="";
surveyworkitemstartdate="";

screenheight=parseInt(screen.height)-210

$("#editbeneficiarylist").height(screenheight);

function editsurvey(respondantcode)
{
	localStorage.respondantcode=CryptoJS.AES.encrypt('"'+respondantcode+'"', localStorage.employeeid);
	var path = window.location.pathname.split("/").pop();
	if(path=="editbeneficiary.html"){window.location.href="editsurveypage.html";}
	else if(path=="bleditbeneficiary.html") {window.location.href="bleditsurveypage.html";}
}


$("#calendarbtn").on("click", function(){
	$("#event-cal-container").toggle();
})


function blEditBeneficiarylist()
{
	localStorage.respondantcode="";
	getBlEditBeneficiarylist();
	filterLoadBlocks();
}



function loadMonitoringEditBeneficiarylist()
{
	localStorage.respondantcode="";
	if(typeof localStorage.surveybenfdate!="undefined" && localStorage.surveybenfdate!="")
	{surveybenfdate=CryptoJS.AES.decrypt(localStorage.surveybenfdate, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);}
	else{surveybenfdate=(new Date()).toISOString().slice(0,10);}
	
	getMonitoringEditBeneficiarylist();
	filterLoadBlocks();
}