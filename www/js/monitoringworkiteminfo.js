var surveycode="";

screenheight=parseInt(screen.height)-180
$("#wokitemview").height(screenheight)

function populateWorkItemDetails(results)
{
	Iteminfo=results.rows.item(0);
	var freq="";
	
	if(Iteminfo.frequncy=="100"){freq="Every Day"}
	else if(Iteminfo.frequncy=="101"){freq="Alternate Day"}
	else if(Iteminfo.frequncy=="102"){freq="Weekly"}
	else if(Iteminfo.frequncy=="103"){freq="Fortnightly"}
	else if(Iteminfo.frequncy=="127"){freq="Monthly"}

	$("#workitemnameh").html(Iteminfo.workitemname);
	$("#WorkItemDescspan").html(function(){if(Iteminfo.workitemdesc!=null && Iteminfo.workitemdesc!="null"){return Iteminfo.workitemdesc;}else{return ""}});
	$("#WorkItemTypespan").html(Iteminfo.workitemtype);
	$("#PlanStartDatespan").html(Iteminfo.planstartdate);
	$("#PlanEndDatespan").html(Iteminfo.planenddate);
	$("#Actualstartdate").html(Iteminfo.actualstartdate);
	$("#PrimaryOwnerspan").html(Iteminfo.primaryowner);
	$("#Targetspan").html(Iteminfo.target);
	$("#CreatedByspan").html(Iteminfo.createdby);
	$("#frequencymodal").html(freq) // Only for Mointoring Survey
}


function populateSurveyDetails(results)
{

	Iteminfo=results.rows.item(0);
	surveycode=Iteminfo.surveycode
	//localStorage.survey=CryptoJS.AES.encrypt('"'+surveycode+'"', localStorage.employeeid);
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
	//filterLoadBlocks();
}

function populateLocaitionDetails(results)
{
	// Iteminfo=results.rows;
	surveylocation=[];
	for(loop=0; loop<results.rows.length; loop++)
	{surveylocation.push(results.rows.item(loop).locationname);}
	$("#surveylocations").html(surveylocation.toString());
}

$("#calendarbtn").on("click", function(){
	$("#event-cal-container").toggle();
})

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
				url:service+"beneficiarydownload.asmx/benficiarydownloadsave",
				type:"GET",
				dataType:"json",
				cache: false,
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
					SpinnerDialog.hide();
					if(err.status==401){$("#loginmodal").modal("show")}
					else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
				}
			});
		}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
	}else{ SpinnerDialog.hide(); navigator.notification.alert("Please Check You Internet Connetion", function(){}, 'Samuday 360','Done');}
	
}

function downloaddatacheck()
{
}



function downloadstatusdata()
{
	uploadstatusmethodname="downloadstatusdata";
	SpinnerDialog.show("Samuday 360", "Loading Selected...", true);
	var empidlocalstorege=localStorage.employeeid

	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	surveyworkitemmappingcode=CryptoJS.AES.decrypt(localStorage.surveyworkitemmappingcode, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1)
	
	survey= CryptoJS.AES.decrypt(localStorage.survey, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1)
	
	workitemcode=CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	var userid=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	if(service!="")
	{
		$.ajax({
			url:service+"beneficiarydownload.asmx/benficiarystatusdownloadsave",
			type:"GET",
			dataType:"json",
			cache: false,
			headers: { 'token': accessticket, 'empcode': userid, uuid: device.uuid },
			async:true,
			data:{empid:localStorage.employeeid, workitemcode:workitemcode, surveyworkitemmappingcode: surveyworkitemmappingcode, type:"MS", survey:survey, uuid:device.uuid},
			ContentType:"application/json",
			success: function(response, message, status)
			{
				if(status.status==200)
				{
					loadstatusbendata=response[0].bene_status;
					
					setTimeout(function(){monitoringbenselectedben();}, 100);
				}else if(status.status==401){SpinnerDialog.hide(); $("#loginmodal").modal("show")}
			},
			error: function(err)
			{
				SpinnerDialog.hide();
				if(err.status==401){$("#loginmodal").modal("show")}
				else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
			}
		});
	}else{navigator.notification.alert("Something went worng", function(){}, 'Samuday 360','Done');}
	
}


function downloaddataloginform(){downloaddata(); /*$("#downloadbenloginmodal").modal("show")*/;}