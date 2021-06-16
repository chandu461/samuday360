var surveycode="";
var surveyworkitemmappingcode=""

screenheight=parseInt(screen.height)-180
$("#wokitemview").height(screenheight);


// Populate WORKITEM Info
function populateWorkItemDetails(results)
{
	Iteminfo=results.rows.item(0);
	$("#workitemnameh").html(Iteminfo.workitemname);
	$("#WorkItemDescspan").html(function(){if(Iteminfo.workitemdesc!=null && Iteminfo.workitemdesc!="null"){return Iteminfo.workitemdesc;}else{return ""}});
	$("#WorkItemTypespan").html(Iteminfo.workitemtype);
	$("#PlanStartDatespan").html(Iteminfo.planstartdate);
	$("#PlanEndDatespan").html(Iteminfo.planenddate);
	$("#Actualstartdate").html(Iteminfo.actualstartdate);
	$("#PrimaryOwnerspan").html(Iteminfo.primaryowner);
	$("#Targetspan").html(Iteminfo.target);
	$("#CreatedByspan").html(Iteminfo.createdby);
}

// Populate SURVEY Info
function populateSurveyDetails(results)
{

	Iteminfo=results.rows.item(0);
	surveycode=Iteminfo.surveycode
	localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
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
	for(loop=0; loop<results.rows.length; loop++)
	{surveylocation.push(results.rows.item(loop).locationname);}
	$("#surveylocations").html(surveylocation.toString());
}


function downloaddata()
{
	var path = window.location.pathname.split("/").pop();
	if(path=="monitoringworkiteminfo.html"){SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);}
	else if(path=="baselineworkiteminfo.html"){SpinnerDialog.show("Samuday 360", "Loading Respondents...", true);}
	
	var networkState = navigator.connection.type;
	if(networkState!=Connection.NONE)
	{
		uploadstatusmethodname="downloaddata";
		var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		survey=CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		
		var empidlocal=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);

		var userid=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
		
		if(service!="")
		{
			$.ajax({
				//url:localStorage.service+'downloadbeneficiary',
				//url:"http://182.18.162.51/sg/beneficiarydownload.asmx/benficiarydownload",
				url:service+"beneficiarydownload.asmx/benficiarydownloadsave",
				type:"GET",
				dataType:"json",
				cache: false,
				//jsonp:"callback",
				headers: { 'token': accessticket, 'empcode': userid, uuid: device.uuid },
				async:true,
				data:{empid:empidlocal, workitemcode:workitemcode, surveyworkitemmappingcode: surveyworkitemmappingcode, type:"MS", survey:survey, uuid:device.uuid},
				ContentType:"application/json",
				success: function(response, message, status)
				{
					if(status.status==200)
					{
						loadbendata=response[0];
						insertorupdatebendata();
						//userSync();
					}else if(status.status==401){SpinnerDialog.hide(); $("#loginmodal").modal("show")}
				},
				error: function(err)
				{
					//console.log(err);
					SpinnerDialog.hide();
					if(err.status==401){$("#loginmodal").modal("show")}
					else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
					// $("#sheduleing").modal("hide");
				}
			});
		}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
	}else{ SpinnerDialog.hide(); navigator.notification.alert("Please Check You Internet Connetion", function(){}, 'Samuday 360','Done');}
	//loadlocations()
}

function downloaddatacheck()
{
	alert($("#block").val());
	alert($("#filtergp").val());
	alert($("#filtervillage").val());
}