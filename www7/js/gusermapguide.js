 screenheight=parseInt(screen.height)-178
 $("#map").height(screenheight);

var map="";
var view="";


//==== layers DEF =====


blockboundarieslayer = new ol.layer.Vector({source:new ol.source.Vector()})
gpboundarieslayer = new ol.layer.Vector({source:new ol.source.Vector()})
villageboundarieslayer = new ol.layer.Vector({source:new ol.source.Vector()})

gproadslayer = new ol.layer.Vector({ source:new ol.source.Vector()})
shroadslayer = new ol.layer.Vector({source:new ol.source.Vector()})
villageroadslayer = new ol.layer.Vector({source:new ol.source.Vector()})

survey_benlayer = new ol.layer.Vector({source:new ol.source.Vector()})

vectorLayers = new ol.layer.Vector
({
	projection: 'EPSG:3857',
	source:new ol.source.Vector(),
	style: new ol.style.Style({
	fill: new ol.style.Fill
	({ color: 'rgba(255, 138, 6, 0.5)' }),
	stroke: new ol.style.Stroke
	({ color: '#FF8200', width: 2 }),
		image:new ol.style.Icon(({ anchor : [ 0.5, 46 ], anchorXUnits : 'fraction', anchorYUnits : 'pixels', opacity : 1, src : 'img/Pin1.png'}))
	})
});

navigatorLayers = new ol.layer.Vector
({
	projection: 'EPSG:3857',
	source:new ol.source.Vector(),
	style: new ol.style.Style({
	fill: new ol.style.Fill
	({ color: 'rgba(255, 138, 6, 0.5)' }),
		stroke: new ol.style.Stroke ({ color: '#FF8200', width: 2 }),
		image: new ol.style.Circle ({ radius: 7, fill: new ol.style.Fill ({ color: '#ff0000' }) })
	})
});

resultlayers = new ol.layer.Vector
({
	projection: 'EPSG:3857',
	source:new ol.source.Vector(),
	style: new ol.style.Style({
	fill: new ol.style.Fill
	({ color: 'rgba(255, 6, 6, 0.5)' }),
		stroke: new ol.style.Stroke ({ color: 'rgba(255, 6, 6, 0)', width: 2 }),
		image: new ol.style.Circle ({ radius: 7, fill: new ol.style.Fill ({ color: 'rgba(255, 6, 6, 0.5)' }) })
	})
});

//======= MAP VIEW =============

function loaddata()
{	
	setTimeout(function(){ SpinnerDialog.show("Samuday 360", "Loading Map.....", true); loadmap();}, 200)
}

function loadmap()
{
	map = new ol.Map({
		layers:
		[
			new ol.layer.Group
			({
				layers:
				[
					blockboundarieslayer,
					gpboundarieslayer,
					villageboundarieslayer,
					shroadslayer,
					gproadslayer,
					villageroadslayer,
					survey_benlayer
				]
			}),
			new ol.layer.Group
			({
				layers:
				[
					vectorLayers,
					navigatorLayers,
					resultlayers
				]
			})
				
		],
		target: 'map',
		view: new ol.View
		    ({
				
				center: ol.proj.fromLonLat([80.33833720, 27.10113590]),
		        zoom: 16,
		        maxZoom: 19,
		        minZoom: 4
		    })
	});
	rendermap()



	map.on('singleclick', function(evt)
	{
		featurearr=[];
        map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) { if(layer==survey_benlayer){featurearr.push([feature.get("respondentcode"), feature.get("index")]); }});
        if(featurearr.length==1)
        {
        	viewbeninfo(featurearr[0][1]);
		}else  if(featurearr.length>1)
        {
        	htmlcontent="";
        	for(featurearrlen=0; featurearrlen<featurearr.length; featurearrlen++)
            {
            	var divclass="odd";
                if(featurearrlen%2==0)
                {divclass="even"}else{divclass="odd";}
            	htmlcontent+='<div class="col-sm-12 card '+divclass+'"  onclick=viewbeninfo("'+featurearr[featurearrlen][1]+'")><div class="card-body"><h6 class="card-title">'+blitems[featurearr[featurearrlen][1]].respondantname +'</h6><p class="card-text" >'+blitems[featurearr[featurearrlen][1]].hohname+'</p><p class="card-text">'+blitems[featurearr[featurearrlen][1]].resondantcode+'</p></div></div>';
            }
            $("#benlistviewmodal").modal("show");
			$("#benlistviewmodalcontent").html(htmlcontent);
        }

	})

	blockboundarieslayer.setVisible(false);
	gpboundarieslayer.setVisible(false);
	villageboundarieslayer.setVisible(false);
		
	 /* Giving ids to layers */
    map.getLayers().forEach(function(layer, i)
    {
        bindInputs('#layer' + i, layer);
        if (layer instanceof ol.layer.Group)
        {
            layer.getLayers().forEach(function(sublayer, j)
            {
                bindInputs('#layer' + i + j, sublayer);
            });
        }
    });

	map.on('pointermove', function(evt)
	{
		featurearr=[];
        map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) { if(layer==survey_benlayer){featurearr.push([feature.get("respondentcode"), feature.get("index")]); }});
        if(featurearr.length==1)
        {
        	viewbeninfo(featurearr[0][1]);
		}else  if(featurearr.length>1)
        {
        	htmlcontent="";
        	for(featurearrlen=0; featurearrlen<featurearr.length; featurearrlen++)
            {
            	var divclass="odd";
                if(featurearrlen%2==0)
                {divclass="even"}else{divclass="odd";}
            	htmlcontent+='<div class="col-sm-12 card '+divclass+'"  onclick=viewbeninfo("'+featurearr[featurearrlen][1]+'")><div class="card-body"><h6 class="card-title">'+blitems[featurearr[featurearrlen][1]].respondantname +'</h6><p class="card-text" >'+blitems[featurearr[featurearrlen][1]].hohname+'</p><p class="card-text">'+blitems[featurearr[featurearrlen][1]].resondantcode+'</p></div></div>';
            }
            $("#benlistviewmodal").modal("show");
			$("#benlistviewmodalcontent").html(htmlcontent);
        }	
	})
}



function bindInputs(layerid, layer)
{
    var visibilityInput = $(layerid + ' input.visible');
    visibilityInput.on('change', function()
    {
        layer.setVisible(this.checked);
        legendlist=this.id;
    });
    visibilityInput.prop('checked', layer.getVisible());

}

   

function viewbeninfo(viewindex)
{
	$("#benviewmodal").modal("show");
	$("#resondantcode").html(blitems[viewindex].resondantcode);
	$("#respondantname").html(blitems[viewindex].respondantname);
	$("#hohname").html(blitems[viewindex].hohname);
	$("#relationwithhoh").html(blitems[viewindex].relationwithhoh);
	$("#dateofbirth").html(blitems[viewindex].dateofbirth);
	$("#gender").html(blitems[viewindex].gender);
	$("#idtype").html(blitems[viewindex].idtype);
	$("#idnumber").html(blitems[viewindex].idnumber);
	$("#buildingcode").html(blitems[viewindex].buildingcode);
	$("#housecode").html(blitems[viewindex].housecode);
	$("#blockname").html(blitems[viewindex].blockname);
	$("#gpname").html(blitems[viewindex].gpname);
	$("#village").html(blitems[viewindex].village);
	$("#occupation").html(blitems[viewindex].occupation);
	$("#buildingtype").html(blitems[viewindex].buildingtype);
}

//======= click event ========


