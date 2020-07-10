var surveycode="";
var surveyworkitemmappingcode=""

screenheight=parseInt(screen.height)-180
$("#wokitemview").height(screenheight);


// Populate WORKITEM Info
function populateWorkItemDetails(results)
{
	Iteminfo=results.rows[0];
	$("#workitemnameh").html(Iteminfo.workitemname);
	$("#WorkItemDescspan").html(function(){if(Iteminfo.workitemdesc!=null && Iteminfo.workitemdesc!="null"){return Iteminfo.workitemdesc;}else{return ""}});
	$("#WorkItemTypespan").html(Iteminfo.workitemtype);
	$("#PlanStartDatespan").html(Iteminfo.planstartdate);
	$("#PlanEndDatespan").html(Iteminfo.planenddate);
	$("#PrimaryOwnerspan").html(Iteminfo.primaryowner);
	$("#Targetspan").html(Iteminfo.target);
	$("#CreatedByspan").html(Iteminfo.createdby);
}

// Populate SURVEY Info
function populateSurveyDetails(results)
{

	Iteminfo=results.rows[0];
	surveycode=Iteminfo.surveycode
	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', "Samuday360");
	$("#surveyname").html(Iteminfo.surveyname)
	$("#surveynamemodal").html(Iteminfo.surveyname)
	$("#surveydescmodal").html(Iteminfo.surveydesc)
	$("#sectorcodemodal").html(Iteminfo.sectorcode)
	$("#programcodemodal").html(Iteminfo.programcode)
	$("#intervensioncodemodal").html(Iteminfo.interventioncode)
	$("#createdbymodal").html(Iteminfo.createdby)
	$("#createdonmodal").html(Iteminfo.createdon)
	$("#typemodal").html(function (){if(Iteminfo.type=="MS"){return "Monitoring Survey"}else if(Iteminfo.type=="BS"){return "Baseline Survey"}})
	$("#startdatemodal").html(Iteminfo.startdate)
	$("#enddatemodal").html(Iteminfo.enddate)
}

// Populate LOCATION Info
function populateLocaitionDetails(results)
{
	Iteminfo=results.rows;
	surveylocation=[];
	for(loop=0; loop<Iteminfo.length; loop++)
	{surveylocation.push(Iteminfo[loop].locationname);}
	$("#surveylocations").html(surveylocation.toString());
}


function downloaddata()
{
	var networkState = navigator.connection.type;
	if(networkState!=Connection.NONE)
	{
		//$("#downloadatamodal").modal("show");
		SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
		surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
		survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
		workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);

		$.ajax({
			//url:localStorage.service+'downloadbeneficiary',
			//url:"http://13.235.142.85/samuday/downloadbeneficiary",
			//url:"http://localhost:1234/samuday_pen/samuday/downloadbeneficiary",
			url:"http://182.18.162.51/sg/beneficiarydownload.asmx/benficiarydownloadsave",
			type:"GET",
			dataType:"json",
			//jsonp:"callback",
			async:true,
			data:{empid:localStorage.employeeid, workitemcode:workitemcode, surveyworkitemmappingcode: surveyworkitemmappingcode, type:"BS", uuid:device.uuid},
			ContentType:"application/json",
			success: function(response, message, status)
			{
				loadbendata=response[0];
				insertorupdatebendata();
				//userSync();
			},
			error: function(err)
			{
				SpinnerDialog.hide();
				navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
				// $("#sheduleing").modal("hide");
			}
		});

	}else{ SpinnerDialog.hide(); navigator.notification.alert("Please Check You Internet Connetion", function(){}, 'Samuday 360','Done');}
	//loadlocations()
}

function downloaddatacheck()
{
	alert($("#block").val());
	alert($("#filtergp").val());
	alert($("#filtervillage").val());
}