


//============ Page Level ==============
monitoringworkitemstring="";
baselineworkitemstring="";






//========== Set Continer Height ===========
screenheight=parseInt(screen.height)-220

$("#monitoring").height(screenheight);
$("#baseline").height(screenheight);

document.getElementById("monitoring").style.display = "block";





// =========== Load Data ===============

function loaddata()
{
	localStorage.workitem="";
	localStorage.survey="";
	localStorage.surveyworkitemmappingcode="";
	localStorage.surveybenfdate="";
	localStorage.surveyworkitemstartdate="";
	localStorage.BENF_LOAD_BLOCK="";
	localStorage.BENF_LOAD_GP="";
	localStorage.BENF_LOAD_VILLAGE="";
	getWorkItemList()
}



//=============== Monitoring Survey Items ===============
function populateWorkItems(results)
{
	rootdetection.isDeviceRooted(function (result) {
		if(result==0)
		{
			len = results.rows.length;
			
			if(len>0)
			{
				//Monitoring Survey HTML STRING
				monitoringworkitemstring='<div class="row" style="padding-bottom: 50px;" >';
				//monitoring Survey Count
				monitoringcount=0;
				// Baseline Survey HTML STRING
				baselineworkitemstring='<div class="row" style="padding-bottom: 50px;" >';
				//monitoring Survey Count
				baselinecount=0;

				// LOOP Work Item Result
				for(workitemloop=0; workitemloop<len; workitemloop++)
				{
					
					var datevalidate="";
					//alert(results.rows.item(workitemloop).planenddate)
					if((new Date(results.rows.item(workitemloop).planenddate))<(new Date()))
					{
						if(results.rows.item(workitemloop).actualstartdate=="")
						{datevalidate="YES";}else{datevalidate="";}
					}
					else {datevalidate="";}

					//outdated
					if(results.rows.item(workitemloop).surveycode!=null && results.rows.item(workitemloop).surveycode!="");
					{
						//Condation to check Monitoring or Baseline Survey
						if(results.rows.item(workitemloop).type=="MS")
						{
							monitoringworkitem=results.rows.item(workitemloop)
							cssclass="odd";
							if(datevalidate=="YES"){cssclass="outdated";}
							else if(monitoringcount%2==0){cssclass="odd";}else{cssclass="even"}
							monitoringcount++;
							monitoringworkitemstring+='<div class="col-sm-12 card '+cssclass+'" onClick=monitoringWorkItemView("'+monitoringworkitem.workitemcode+'","'+monitoringworkitem.surveyworkitemmappingcode+'","'+monitoringworkitem.surveycode+'") ><div class="card-body"> <h4 style="font-weight: 600; font-size: 1.1rem;" class="card-title">'+monitoringworkitem.sectorcode+'</h4><h4 style="font-weight: 600; font-size: 1.1rem;" class="card-title">'+monitoringworkitem.interventioncode+'</h4> <h6 style="font-weight: 400; font-size: 1rem;" class="card-title">'+monitoringworkitem.workitemname+' - '+monitoringworkitem.surveyname+'</h6> <p style="font-style: italic; margin-left: 8px;" class="card-text" id='+monitoringworkitem.workitemcode+'>village</p><p style="margin-left: 8px;" class="card-text"> <b>Plan Start : </b>'+monitoringworkitem.planstartdate.slice(0, 10)+' <b> Actual Start : </b>'+monitoringworkitem.actualstartdate+'</p></div></div>';
						}else if(results.rows.item(workitemloop).type=="BS")
						{
							baselineworkitem=results.rows.item(workitemloop)
							cssclass="odd";
							if(datevalidate=="YES"){cssclass="outdated";}
							else if(baselinecount%2==0){cssclass="odd";}else{cssclass="even"}
							baselinecount++;
							baselineworkitemstring+='<div class="col-sm-12 card '+cssclass+'" onClick=baselineWorkItemView("'+baselineworkitem.workitemcode+'","'+baselineworkitem.surveyworkitemmappingcode+'","'+baselineworkitem.surveycode+'") ><div class="card-body"> <h4 style="font-weight: 600; font-size: 1.1rem;" class="card-title">'+baselineworkitem.sectorcode+'</h4><h4 style="font-weight: 600; font-size: 1.1rem;" class="card-title">'+baselineworkitem.interventioncode+'</h4> <h6 style="font-weight: 400; font-size: 1rem;" class="card-title">'+baselineworkitem.workitemname+' - '+baselineworkitem.surveyname+'</h6> <p style="font-style: italic; margin-left: 8px;" class="card-text" id='+baselineworkitem.workitemcode+'>village</p><p style="margin-left: 8px;" class="card-text"> <b> Plan Start : </b> '+baselineworkitem.planstartdate.slice(0, 10)+' <b> Actual Start : </b>'+baselineworkitem.actualstartdate.slice(0, 10)+'</p></div></div>';
						}
					}
				}
				monitoringworkitemstring+='</div>';
				$("#monitoring").html(monitoringworkitemstring);

				baselineworkitemstring+='</div>';
				$("#baseline").html(baselineworkitemstring);

				if(monitoringworkitemstring=='<div class="row" style="padding-bottom: 50px;" ></div>')
				{
					$("#monitoring").html('<div class="row" style="padding-bottom: 50px;" ><h2 align="center">No Records</h2></div>');
				}

				if(baselineworkitemstring=='<div class="row" style="padding-bottom: 50px;" ></div>')
				{
					$("#baseline").html('<div class="row" style="padding-bottom: 50px;" ><h2 align="center">No Records</h2></div>');
				}

			}
		}else{navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');}
	}, function (error) {navigator.notification.alert("Device doesn't Support", function(){}, 'Samuday 360','Done');});
}
