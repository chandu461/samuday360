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
	getmsselectBeneficiarylist();
	filterLoadBlocks()
}

//========= Select All Function ============


function selectAll(){
	selectedbeneficiaryarray=[];
	selectedbeneficiaryindexarry=[]
	for(loop=0; loop<blitems.length; loop++)
	{
		if(blitems[loop].status=='0')
		{
			selectedbeneficiaryarray.push(blitems[loop].resondantcode);
			selectedbeneficiaryindexarry.push(loop);
			document.getElementById(loop).style.backgroundColor="#F0F0F0";
		}
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
		document.getElementById(loop).style.backgroundColor="#FFFFFF";
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
		document.getElementById(index).style.backgroundColor="#FFFFFF";
		delete selectedbeneficiaryarray[selectedbeneficiaryarray.indexOf(hhcode)]
		delete selectedbeneficiaryindexarry[selectedbeneficiaryarray.indexOf(hhcode)]
	}else{
		selectedbeneficiaryarray.push(hhcode);
		selectedbeneficiaryindexarry.push(index);
		document.getElementById(index).style.backgroundColor="#F0F0F0";
	}

	selectdonebuttonboolean=0;
	for(i=0; i<selectedbeneficiaryarray.length;i++)
	{
		if(typeof selectedbeneficiaryarray[i]!="undefined")
		{selectdonebuttonboolean=1}
		//else{document.getElementById("selectdonebutton").style.display="none";}
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
		document.getElementById(index).style.backgroundColor="#FFFFFF";
		delete selectedbeneficiaryindexarry[selectedbeneficiaryarray.indexOf(hhcode)]
		delete selectedbeneficiaryarray[selectedbeneficiaryarray.indexOf(hhcode)]
		
	}else{
		selectedbeneficiaryarray.push(hhcode);
		selectedbeneficiaryindexarry.push(index);
		document.getElementById(index+"a").style.backgroundColor="#F0F0F0";
		document.getElementById(index).style.backgroundColor="#F0F0F0";
	}
	selectdonebuttonboolean=0;
	for(i=0; i<selectedbeneficiaryarray.length;i++)
	{
		if(typeof selectedbeneficiaryarray[i]!="undefined")
		{selectdonebuttonboolean=1}
		//else{document.getElementById("selectdonebutton").style.display="none";}
	}
	if(selectdonebuttonboolean==1)
	{$("#selectdonebutton").show();}
	else{$("#selectdonebutton").hide();}
	mapselectedview()
}

function mapselectedview()
{
	console.log(selectedbeneficiaryindexarry);
	var tempsrc=vector.getSource();
	tempsrc.clear();
	for(loop=0; loop<selectedbeneficiaryindexarry.length; loop++)
	{ //console.log(selectedbeneficiaryindexarry[loop]);
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


// $("#selectdonebutton").on("click", function(){
// 	alert("Your Selection Is Saved");
// 	window.location.href="monitoringworkiteminfo.html";
// })

$("#beneficiaryadd").on("click", function(){
	//selectedbeneficiaryarray=[];
	// for(loop=1; loop<=blitems.length; loop++)
	// { document.getElementById(loop).style.backgroundColor="#FFFFFF"; }
	saveSelectedBenf()
	
	// $("#beneficiaryadd").hide();
	// $("#beneficiaryaddcontinue").show()
	//window.location.href="monitoringworkiteminfo.html";
})
$("#beneficiaryaddcontinue").on("click", function(){
	//alert("Your Selection Is Saved");
	window.location.href="surveybeneficiarylist.html";
})