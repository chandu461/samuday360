
//*************** Monitoring Survey ****************

if(window.location.pathname.split("/").pop()=="dashboard.html")
{document.getElementById("monitoring").style.display = "block";}


//======== Monitoring Work Item View  =========
function monitoringWorkItemView(workitemid,surveyworkitemmappingcode, surveycode)
{
	localStorage.workitem=CryptoJS.AES.encrypt('"'+workitemid+'"', localStorage.employeeid);
	localStorage.surveyworkitemmappingcode=CryptoJS.AES.encrypt('"'+surveyworkitemmappingcode+'"', localStorage.employeeid);
	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
		
	window.location.href="monitoringworkiteminfo.html";
}

function monitoringsurveyView()
{


	$("#surveyinfodetailmodal").modal("show");
}


//========= Edit Beneficiary  =============
function editBeneficiary()
{
	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
	window.location.href="editbeneficiary.html";
}


//========= Survey Beneficiary List ==========
function surveyBeneficiaryList()
{
	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
	window.location.href="surveybeneficiarylist.html";
}


//========= Select Beneficiary  ============
function selectBeneficiary()
{

	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
	window.location.href="selectsbeneficiary.html";

}








//************ Baseline Survey **************


// ============ Baseline Work Item View ===========
function baselineWorkItemView(workitemid,surveyworkitemmappingcode,surveycode)
{
	localStorage.workitem=CryptoJS.AES.encrypt('"'+workitemid+'"', localStorage.employeeid);
	localStorage.surveyworkitemmappingcode=CryptoJS.AES.encrypt('"'+surveyworkitemmappingcode+'"', localStorage.employeeid);
	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
	window.location.href="baselineworkiteminfo.html";
}


// ============ Baseline Survey View ============
function baselineSurveyView()
{
	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
	$("#surveyinfodetailmodal").modal("show");
}


// ============ Baseline Edit Beneficiary ===========
function baselineEditBeneficiary()
{
	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
	window.location.href="bleditbeneficiary.html";
}


// ============ Baseline Survey Beneficiary List ===========
function baselineSurveyBeneficiaryList()
{
	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
	window.location.href="blsurveybeneficiarylist.html";
}