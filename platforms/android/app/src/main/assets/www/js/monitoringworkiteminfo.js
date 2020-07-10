var surveycode="";

screenheight=parseInt(screen.height)-180
$("#wokitemview").height(screenheight)

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
	$("#frequencymodal").html(Iteminfo.frequncy) // Only for Mointoring Survey
}


function populateSurveyDetails(results)
{

	Iteminfo=results.rows[0];
	surveycode=Iteminfo.surveycode
	$("#surveyname").html(Iteminfo.surveyname)
	$("#surveynamemodal").html(Iteminfo.surveyname)
	$("#surveydescmodal").html(Iteminfo.surveydesc)
	$("#sectorcodemodal").html(Iteminfo.sectorcode)
	$("#programcodemodal").html(Iteminfo.programcode)
	$("#intervensioncodemodal").html(Iteminfo.interventioncode)
	$("#createdbymodal").html(Iteminfo.createdby)
	$("#createdonmodal").html(Iteminfo.createdon)
	$("#typemodal").html(function (){if(Iteminfo.type=="MS"){return "Monitoring Survey"}else if(Iteminfo.type=="BS"){return "Baseline Survey"}})
	////$("#frequencymodal").html(Iteminfo.frequency) // Only for Mointoring Survey
	$("#startdatemodal").html(Iteminfo.startdate)
	$("#enddatemodal").html(Iteminfo.enddate)
	filterLoadBlocks();
}

function populateLocaitionDetails(results)
{
	Iteminfo=results.rows;
	surveylocation=[];
	for(loop=0; loop<Iteminfo.length; loop++)
	{surveylocation.push(Iteminfo[loop].locationname);}
	$("#surveylocations").html(surveylocation.toString());
}

$("#calendarbtn").on("click", function(){
	$("#event-cal-container").toggle();
})

function downloaddata()
{
	var networkState = navigator.connection.type;
	if(networkState!=Connection.NONE)
	{
		SpinnerDialog.show("Samuday 360", "Loading Beneficiaries...", true);
		surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
		survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
		workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);

		$.ajax({
			//url:localStorage.service+'downloadbeneficiary',
			//url:"http://182.18.162.51/sg/beneficiarydownload.asmx/benficiarydownload",
			url:"http://182.18.162.51/sg/beneficiarydownload.asmx/benficiarydownloadsave",
			type:"GET",
			dataType:"json",
			//jsonp:"callback",
			async:true,
			data:{empid:localStorage.employeeid, workitemcode:workitemcode, surveyworkitemmappingcode: surveyworkitemmappingcode, type:"MS", survey:survey, uuid:device.uuid},
			ContentType:"application/json",
			success: function(response, message, status)
			{
				loadbendata=response[0];
				insertorupdatebendata();
				//userSync();
			},
			error: function(err)
			{
				//console.log(err);
				SpinnerDialog.hide();
				navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
				// $("#sheduleing").modal("hide");
			}
		});
	}else{ SpinnerDialog.hide(); navigator.notification.alert("Please Check You Internet Connetion", function(){}, 'Samuday 360','Done');}
	
	//$("#downloadatamodal").modal("show");
	//loadlocations();
}

function downloaddatacheck()
{
	alert($("#block").val());
	alert($("#filtergp").val());
	alert($("#filtervillage").val());
}



function downloadstatusdata()
{
	SpinnerDialog.show("Samuday 360", "Loading Selected...", true);
	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	survey=CryptoJS.AES.decrypt(localStorage.survey, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, "Samuday360").toString(CryptoJS.enc.Utf8).slice(1,-1);
	//alert(JSON.stringify({empid:localStorage.employeeid, workitemcode:workitemcode, surveyworkitemmappingcode: surveyworkitemmappingcode, type:"MS", survey:survey, uuid:device.uuid}));
	$.ajax({
		//url:localStorage.service+'downloadbeneficiary',
		//url:"http://182.18.162.51/sg/beneficiarydownload.asmx/benficiarydownload",
		url:"http://182.18.162.51/sg/beneficiarydownload.asmx/benficiarystatusdownloadsave",
		type:"GET",
		dataType:"json",
		//jsonp:"callback",
		async:true,
		data:{empid:localStorage.employeeid, workitemcode:workitemcode, surveyworkitemmappingcode: surveyworkitemmappingcode, type:"MS", survey:survey, uuid:device.uuid},
		ContentType:"application/json",
		success: function(response, message, status)
		{
			//console.log(response)
			loadstatusbendata=response[0].bene_status;
			//alert(JSON.stringify(loadstatusbendata));

			setTimeout(function(){monitoringbenselectedben();}, 100);
		},
		error: function(err)
		{
			//console.log(err);
			SpinnerDialog.hide();
			navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');
			// $("#sheduleing").modal("hide");
		}
	});
	
	//$("#downloadatamodal").modal("show");
	//loadlocations();
}