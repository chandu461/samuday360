//======== Page Level var ============

selectedbeneficiaryarray=[];
selectedbeneficiaryindexarry=[]


//======== Set Screen Size ==========
screenheight=parseInt(screen.height)-170

$("#selectbeneficiarycontainerlist").height(screenheight);
$("#selectbeneficiarycontainermap").height(screenheight);

document.getElementById("selectbeneficiarycontainermap").style.display = "block"

function loadmsselectBeneficiarylist()
{
	uploadstatusmethodname="loadmsselectBeneficiarylist"
	SpinnerDialog.show("Samuday 360", "Loading blocks...", true);
	
		// ====== OFFLINE SELECTION ======
		getmsselectBeneficiarylist();
		filterLoadBlocks()

		var userid=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
}


var sgp=""


$("#sloadbenfblock").on("change", function()
{
	SpinnerDialog.show("Samuday 360", "Loading gram panchayat...", true);

	var workitem= CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	document.getElementById('sloadbenffiltervillage').length=0;

	var selectedblock=$("#sloadbenfblock").val();
	var elemfiltergp=document.getElementById('sloadbenffiltergp');
	elemfiltergp.length=0;
	var indexvar=0;
	for(sgloop=0 ; sgloop<sgp.length; sgloop++)
	{
		if($("#sloadbenfblock").val().indexOf(sgp[sgloop].blockcode)>=0)
		{
			if(selectedblock.indexOf(sgp[sgloop].blockcode)>=0)
			{
				elemfiltergp.options[sgloop]=new Option(sgp[sgloop].gpname,sgp[sgloop].gpcode);
				indexvar++;
			}
		}
		if((sgp.length-1)==sgloop){setTimeout(function(){SpinnerDialog.hide(); },200); }
	}
	

})

var svillage="";

$("#sloadbenffiltergp").on("change", function()
{
	SpinnerDialog.show("Samuday 360", "Loading villages...", true);

	var workitem= CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	
	var selectedgps=$("#sloadbenffiltergp").val();
	elemfiltervil=document.getElementById("sloadbenffiltervillage");
	elemfiltervil.length=0;
	var indexvar=0;
	for(svloop=0 ; svloop<svillage.length; svloop++)
	{
		if(selectedgps.indexOf(svillage[svloop].GPcode)>=0)
		{
			elemfiltervil.options[indexvar] = new Option(svillage[svloop].Villagename, svillage[svloop].Villagecode);
			indexvar++;
		}

		if((svillage.length-1)==svloop){setTimeout(function(){SpinnerDialog.hide();},200); }

	}
})






//=====load GP =======

function getgpfrom()
{
	SpinnerDialog.show("Samuday 360", "Loading data...", true);
	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var workitem= CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var userid=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	var data=JSON.stringify({empid:userid, uuid:device.uuid, workitemcode:workitem, blocks:$("#sloadbenfblock").val()});

	$.ajax({
		contentType: "application/json;",
        data: data,
       	headers: { 'token': accessticket, 'empcode': userid, 'uuid': device.uuid },
        type: "POST",
        url: service+"beneficiarydownload.asmx/loadgps",
        success: function(response, message, status)
		{
			if(status.status==200)
			{
				var elemfiltergp=document.getElementById('sloadbenffiltergp');
				elemfiltergp.length=0;
				sgp=response;
				
				//======Tempload block======
				loadingvillagesfrom();
			}
			else if(status.status==401){SpinnerDialog.hide(); $("#loginmodal").modal("show")}
		},
		error: function(err)
		{
			SpinnerDialog.hide();
			if(err.status==401){$("#loginmodal").modal("show")}
			else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
		}
	})

}

function loadingvillagesfrom()
{
	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var workitem= CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	var userid=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	var data=JSON.stringify({empid:userid, uuid:device.uuid, workitemcode:workitem, blocks:$("#sloadbenfblock").val(), gps:$("#sloadbenffiltergp").val() })
	
	$.ajax({
		contentType: "application/json;",
        data: data,
      	headers: { 'token': accessticket, 'empcode': userid, 'uuid': device.uuid },
        type: "POST",
        url: service+"beneficiarydownload.asmx/loadvillages",
        success: function(response, message, status)
		{
			if(status.status==200)
			{
				if(response.length>0)
				{	
					var elemfiltervil=document.getElementById('sloadbenffiltervillage');
					elemfiltervil.length=0;
					svillage=response;
				}else{$("#loadbenfmodal").modal("hide"); navigator.notification.alert("No Beneficiaries to add", function(){}, 'Samuday 360','Done');}
				setTimeout(function(){SpinnerDialog.hide();},500);
			}else if(status.status==401){$("#loginmodal").modal("show")}
			
		},
		error: function(err)
		{
			SpinnerDialog.hide();
			if(err.status==401){$("#loginmodal").modal("show")}
			else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
		}
	})
}
//========= Select All Function ============


function selectAll(){
	selectedbeneficiaryarray=[];
	selectedbeneficiaryindexarry=[]
	for(loop=0; loop<blitems.length; loop++)
	{
		selectedbeneficiaryarray.push(blitems[loop].resondantcode);
		selectedbeneficiaryindexarry.push(loop);
		document.getElementById(blitems[loop].resondantcode).style.backgroundColor="#F0F0F0";
	}

	$("#selectdonebutton").show();
	$("#beneficiaryselectall").hide();
	$("#beneficiarydeselectall").show();
	mapselectedview();
}

function deSelectAll(){
selectedbeneficiaryarray=[];
selectedbeneficiaryindexarry=[];
	for(loop=0; loop<blitems.length; loop++)
	{
		document.getElementById(blitems[loop].resondantcode).style.backgroundColor="#FFFFFF";
	}

	$("#selectdonebutton").hide();
	$("#beneficiarydeselectall").hide();
	$("#beneficiaryselectall").show()
	mapselectedview();
}




//========== SELECT LOGIC ==========
function selectcard(index, hhcode)
{
	if(selectedbeneficiaryarray.indexOf(hhcode)>=0)
	{
		document.getElementById(hhcode).style.backgroundColor="#FFFFFF";
		delete selectedbeneficiaryarray[selectedbeneficiaryarray.indexOf(hhcode)]
		delete selectedbeneficiaryindexarry[selectedbeneficiaryarray.indexOf(hhcode)]
	}else{
		selectedbeneficiaryarray.push(hhcode);
		selectedbeneficiaryindexarry.push(index);
		document.getElementById(hhcode).style.backgroundColor="#F0F0F0";
	}

	selectdonebuttonboolean=0;
	for(i=0; i<selectedbeneficiaryarray.length;i++)
	{
		if(typeof selectedbeneficiaryarray[i]!="undefined")
		{selectdonebuttonboolean=1}
		
	}

	if(selectdonebuttonboolean==1)
	{$("#selectdonebutton").show();}
	else{$("#selectdonebutton").hide();}

	mapselectedview()
}


function selectcardmodal(index, hhcode)
{
	if(selectedbeneficiaryarray.indexOf(hhcode)>=0)
	{
		document.getElementById(index+"a").style.backgroundColor="#FFFFFF";
		document.getElementById(hhcode).style.backgroundColor="#FFFFFF";
		delete selectedbeneficiaryindexarry[selectedbeneficiaryarray.indexOf(hhcode)];
		delete selectedbeneficiaryarray[selectedbeneficiaryarray.indexOf(hhcode)]
		
	}else{
		selectedbeneficiaryarray.push(hhcode);
		selectedbeneficiaryindexarry.push(index);
		//alert(selectedbeneficiaryindexarry);
		document.getElementById(index+"a").style.backgroundColor="#F0F0F0";
		document.getElementById(hhcode).style.backgroundColor="#F0F0F0";
		
	}
	
	selectdonebuttonboolean=0;
	for(i=0; i<selectedbeneficiaryarray.length;i++)
	{
		if(typeof selectedbeneficiaryarray[i]!="undefined")
		{selectdonebuttonboolean=1}
	}

	if(selectdonebuttonboolean==1)
	{$("#selectdonebutton").show();}
	else{$("#selectdonebutton").hide();}
	mapselectedview()
}

function mapselectedview()
{
	var tempsrc=vector.getSource();
	tempsrc.clear();
	for(loop=0; loop<selectedbeneficiaryindexarry.length; loop++)
	{
		if(typeof selectedbeneficiaryindexarry[loop] !="undefined")
		{
			format = new ol.format.WKT();
			var featureGeom="";
			featureGeom = format.readFeature(blitems[selectedbeneficiaryindexarry[loop]].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
			featureGeom.setProperties({'respondentcode':blitems[selectedbeneficiaryindexarry[loop]].resondantcode, 'index':selectedbeneficiaryindexarry[loop],  'geom':blitems[selectedbeneficiaryindexarry[loop]].geom});
			tempsrc.addFeature(featureGeom);
		}
	}
}

$("#beneficiaryadd").on("click", function(){
	createbeneficiaryinserver();
	
})

function createbeneficiaryinserver(){

	uploadstatusmethodname="createbeneficiaryinserver"
	
	SpinnerDialog.show("Samuday 360", "Adding Beneficiary...", true);
	
	//======== OFFLINE SAVE =============
	saveSelectedBenf()
	//======== OFFLINE SAVE =============
	
}

$("#beneficiaryaddcontinue").on("click", function(){
	window.location.href="surveybeneficiarylist.html";
})

tempbenfarray=[];
blitems=[];
function selectloadselectbenffilterApply()
{
	uploadstatusmethodname="selectloadselectbenffilterApply"

	$("#datapool").html("");
	
	SpinnerDialog.show("Samuday 360", "Loading Beneficiary...", true);

	var workitem= CryptoJS.AES.decrypt(localStorage.workitem, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	var service=CryptoJS.AES.decrypt(localStorage.utilmedium, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);

	var userid=CryptoJS.AES.decrypt(localStorage.employeeid, device.uuid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	var accessticket=CryptoJS.AES.decrypt(localStorage.ticket, localStorage.employeeid).toString(CryptoJS.enc.Utf8).slice(1,-1);
	data=JSON.stringify({empid:userid, uuid:device.uuid, workitemcode:workitem, blocks:$("#sloadbenfblock").val(), gps:$("#sloadbenffiltergp").val(), villages:$("#sloadbenffiltervillage").val()})
	
	$.ajax({
		contentType: "application/json;",
        data: data,
       	headers: { 'token': accessticket, 'empcode': userid, 'uuid': device.uuid },
        type: "POST",
        url: service+"beneficiarydownload.asmx/getbenficiarylist",
        success: function(response, message, status)
		{
			$("#loadbenfmodal").modal("hide");
			SpinnerDialog.hide();
			if(status.status==200)
			{
				blitems=response[0].survey_bene;
				tempbenfarray=blitems;
				if(blitems.length>0)
				{
					getmsselectBeneficiarylist();
				}else{
					navigator.notification.alert("No Beneficiaries", function(){}, 'Samuday 360','Done');
				}
			}else if(status.status==401){SpinnerDialog.hide(); $("#loginmodal").modal("show")}
			
		},
		error: function(err)
		{
			SpinnerDialog.hide();
			if(err.status==401){$("#loginmodal").modal("show")}
			else{navigator.notification.alert("Please try again", function(){}, 'Samuday 360','Done');}
		}
	})


}






//==================== Filter ==========================

//Comparer Function    
function GetSortOrder(prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
}    
     


function selectpagefilter(){
	blitems=[];

	SpinnerDialog.show("Samuday 360", "Applying filter...", true);

	$("#datapool").html("");
	benfsource=benflayer.getSource();
	var tempsrc=vector.getSource();
	benfsource.clear();
	tempsrc.clear();
	
	
	$.when(selectbuildingtype()).then(function(cb){
	  selectfiltermapview();
	});
}





function selectbuildingtype()
{
  	var dfd = new $.Deferred();

	var selectbuildingtype = $("#buildingtype").val()
	
	if(selectbuildingtype!="")
	{
 		for(var benftemploop in tempaddbenfarray)
 		{ 
 			if(selectbuildingtype.indexOf(tempaddbenfarray[benftemploop].buildingtype)>=0 && filtergender(tempaddbenfarray[benftemploop].gender) && filtermembertype(tempaddbenfarray[benftemploop].relationwithhoh))
 			{
 				blitems.push(tempaddbenfarray[benftemploop]);
 			}
 		}
 	}else{
 		for(var benftemploop in tempaddbenfarray)
 		{
 			if(filtergender(tempaddbenfarray[benftemploop].gender) && filtermembertype(tempaddbenfarray[benftemploop].relationwithhoh))
 			{
 				blitems.push(tempaddbenfarray[benftemploop]);
 			}
 		}
 	}
	
	setTimeout(function(){ selectsortby(dfd);}, 1000);

	return dfd.promise();
}


function filtergender(gender){
	var filtergenval=$("#filtergender").val()
	//alert(gender);
	if(filtergenval!="")
	{
		if(filtergenval=="MALE" || filtergenval=="FEMALE")
		{
			//alert(filtergenval==gender.toUpperCase());
			return filtergenval==gender.toUpperCase();
		}
		else if(filtergenval=="NA")
		{
			return (gender==null || gender=="null" || gender=="");
		}

	}else{
		return true;
	}
}

function filtermembertype(membertype)
{
	var filtermembertypeval=$("#filtermember").val()
	if(filtermembertypeval!="" && filtermembertypeval!="ALL")
	{
		if(filtermembertypeval=="HOH"){return membertype.toUpperCase()=="SELF"}
		else if(filtermembertypeval=="NONHOH"){return membertype.toUpperCase()!="SELF"}
		else{return false;}
	}else{return true;}
}


function selectsortby(dfd){ setTimeout(function(){ selectsearch(dfd);}, 1000);}



function selectsearch(dfd)
{
	var searchinp=$("#searchinput").val();
	if(searchinp!="")
	{ blitems = blitems.filter(item => (item.respondantname.toUpperCase().includes(searchinp.toUpperCase()) || item.hohname.toUpperCase().includes(searchinp.toUpperCase())) ); }
  	setTimeout(function(){selectfiltermapview(dfd);}, 1000);
}


function selectfiltermapview(dfd){

	htmlcontent="";
	$("#datapool").html("");
	

	// ==== offline Bendataload====
	benfsource=benflayer.getSource();
	var tempsrc=vector.getSource();
	benfsource.clear();
	tempsrc.clear();

	$("#bencount").html(blitems.length);
	if(blitems.length>0)
	{
		for(blitemsloop=0; blitemsloop<blitems.length; blitemsloop++)
		{
			if(blitems[blitemsloop].resondantcode!="" && blitems[blitemsloop].geom!="undefined")
			{
				if(selectedbeneficiaryarray.indexOf(blitems[blitemsloop].resondantcode)>=0)
				{
					htmlcontent+='<div class="col-sm-12 card add"  id="'+blitems[blitemsloop].resondantcode+'" style="background-color: rgb(240, 240, 240);"> <div class="card-body"><h6 class="card-title" onclick=selectcard("'+blitemsloop+'","'+blitems[blitemsloop].resondantcode+'")>'+blitems[blitemsloop].respondantname+'</h6><p class="card-text" onclick=selectcard("'+blitemsloop+'","'+blitems[blitemsloop].resondantcode+'")> HoH -  '+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'
				}
				else{
					htmlcontent+='<div class="col-sm-12 card add"  id="'+blitems[blitemsloop].resondantcode+'"> <div class="card-body"><h6 class="card-title" onclick=selectcard("'+blitemsloop+'","'+blitems[blitemsloop].resondantcode+'")>'+blitems[blitemsloop].respondantname+'</h6><p class="card-text" onclick=selectcard("'+blitemsloop+'","'+blitems[blitemsloop].resondantcode+'")> HoH -  '+blitems[blitemsloop].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="viewbnfonmap('+blitemsloop+')">MAP</button> <button class="btn btn-info suboption" onclick="detailsModal('+blitemsloop+')">VIEW</button></a></div></div>'	
				}
				

				format = new ol.format.WKT();
				var featureGeom="";
				if(typeof blitems[blitemsloop].geom!="undefined" && blitems[blitemsloop].geom!="")
				{
					featureGeom = format.readFeature(blitems[blitemsloop].geom,{ dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});

					featureGeom.setProperties({'respondentcode':blitems[blitemsloop].resondantcode, 'index':blitemsloop,  'geom':blitems[blitemsloop].geom});
					benfsource.addFeature(featureGeom);

					if(selectedbeneficiaryarray.indexOf(blitems[blitemsloop].resondantcode)>=0)
					{
						tempsrc.addFeature(featureGeom);
					}
					
				}
			}
		}

		if(benfsource.getFeatures().length>0)
		{
			SpinnerDialog.hide();
			var extent = benfsource.getExtent();
			setTimeout(function (){map.getView().fit(extent, map.getSize())},200);
		}

	}
	else{
		SpinnerDialog.hide();
		htmlcontent="<hr style='background-color:white;'><h4 align='center' style='width:100%;'>No Records Found</h4>";
	}

	$("#datapool").html(htmlcontent);
	dfd.resolve();
	
}