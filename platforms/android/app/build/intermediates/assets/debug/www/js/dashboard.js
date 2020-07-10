


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
	//monitoringWorkItems();
	//baselineWorkItems();
}



//=============== Monitoring Survey Items ===============
function populateWorkItems(results)
{
	//length of RESULTS
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
			if(results.rows[workitemloop].surveycode!=null && results.rows[workitemloop].surveycode!="");
			{
				//Condation to check Monitoring or Baseline Survey
				if(results.rows.item(workitemloop).type=="MS")
				{
					monitoringworkitem=results.rows.item(workitemloop)
					cssclass="odd";
					if(monitoringcount%2==0){cssclass="odd";}else{cssclass="even"}
					monitoringcount++;
					monitoringworkitemstring+='<div class="col-sm-12 card '+cssclass+'" onClick=monitoringWorkItemView("'+monitoringworkitem.workitemcode+'","'+monitoringworkitem.surveyworkitemmappingcode+'","'+monitoringworkitem.surveycode+'") ><div class="card-body"> <h6 style="font-weight: 400; font-size: 1rem;" class="card-title">'+monitoringworkitem.workitemname+' - '+monitoringworkitem.surveyname+'</h6> <p style="font-style: italic; margin-left: 8px;" class="card-text" id='+monitoringworkitem.workitemcode+'>village</p><p style="margin-left: 8px;" class="card-text"> <b>Plan Start : </b>'+monitoringworkitem.planstartdate.slice(0, 10)+' <b> Actual Start : </b>'+monitoringworkitem.actualstartdate+'</p></div></div>';
				}else if(results.rows.item(workitemloop).type=="BS")
				{
					baselineworkitem=results.rows.item(workitemloop)
					cssclass="odd";
					if(baselinecount%2==0){cssclass="odd";}else{cssclass="even"}
					baselinecount++;
					baselineworkitemstring+='<div class="col-sm-12 card '+cssclass+'" onClick=baselineWorkItemView("'+baselineworkitem.workitemcode+'","'+baselineworkitem.surveyworkitemmappingcode+'","'+baselineworkitem.surveycode+'") ><div class="card-body"> <h6 style="font-weight: 400; font-size: 1rem;" class="card-title">'+baselineworkitem.workitemname+' - '+baselineworkitem.surveyname+'</h6> <p style="font-style: italic; margin-left: 8px;" class="card-text" id='+baselineworkitem.workitemcode+'>village</p><p style="margin-left: 8px;" class="card-text"> <b> Plan Start : </b> '+baselineworkitem.planstartdate.slice(0, 10)+' <b> Actual Start : </b>'+baselineworkitem.actualstartdate.slice(0, 10)+'</p></div></div>';
				}
			}
		}

		monitoringworkitemstring+='</div>';
		$("#monitoring").html(monitoringworkitemstring);
		baselineworkitemstring+='</div>';
		$("#baseline").html(baselineworkitemstring);
	}
}
