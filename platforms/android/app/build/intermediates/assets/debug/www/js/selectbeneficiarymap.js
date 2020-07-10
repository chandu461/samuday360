var map="";
var navigatorLayers="";

//MAP SACLE OBJECT
var scaleLineControl = new ol.control.ScaleLine();  

// MOUSE LOCATION HANDLER (LATITUDE AND LONGITUDE IN TOOLBAR)
var mousePositionControl = new ol.control.MousePosition
({
    coordinateFormat: ol.coordinate.createStringXY(4),
    projection: 'EPSG:4326',
    // comment the following two lines to have the mouse position
    // be placed within the map.
    className: 'custom-mouse-position',
    target: document.getElementById('mouse-position'),
    undefinedHTML: '&nbsp;'
});

var proj = new ol.proj.Projection
({code: 'EPSG:4326', units: 'm'  });

var attribution = new ol.control.Attribution({ collapsible: false });


// VECTOR LAYER SOURCE BOJECT
var source = new ol.source.Vector();
// VECTOR LAYER (TEMP LAYER TO SHOW OF ALL GEOGRAPHIC RESULTS)
var vector = new ol.layer.Vector
({
    source: source,
    style: new ol.style.Style
    ({
        fill: new ol.style.Fill
        ({color: 'rgba(232, 26, 26, .5)'}),
        stroke: new ol.style.Stroke
        ({color: '#e81a1a',width: 2}),
        image: new ol.style.Circle
        ({radius: 7,fill: new ol.style.Fill({color: '#da965e'})})
    })
});


//
lay_satellite=new ol.layer.Tile
({
    visible: false,
    preload: Infinity,
    source: new ol.source.BingMaps
    ({
        key: 'sADJ0ZL6bZhEW8LmXcdu~tzxBrN7HqsQh3Y99RmUlWg~Am0jAKQv3X_m0ns5KyZ413kNkXg0YZyn4JSyFd4I1AQwuYWdodNSwDFs2Ol2QzzD',
        imagerySet: 'Aerial'
    })
})

//
lay_areal=new ol.layer.Tile
        ({
            visible: false,
            preload: Infinity,
            source: new ol.source.BingMaps
            ({
                key: 'sADJ0ZL6bZhEW8LmXcdu~tzxBrN7HqsQh3Y99RmUlWg~Am0jAKQv3X_m0ns5KyZ413kNkXg0YZyn4JSyFd4I1AQwuYWdodNSwDFs2Ol2QzzD',
                imagerySet: 'Road'
            })
        })


// STATE HIGHWAYS ROADS LAYER
var shroadslayer = new ol.layer.Vector
({
    source:new ol.source.Vector(),
    style: new ol.style.Style
    ({
        fill: new ol.style.Fill
        ({color: 'rgba(58, 179, 73, 0.2)'}),
        stroke: new ol.style.Stroke
        ({color: '#3ab349',width: 2}),
        image: new ol.style.Circle
        ({radius: 7,fill: new ol.style.Fill({color: '#da965e'})})
    })
});

// GP ROADS LAYER

var gproadslayer = new ol.layer.Vector
({
    source:new ol.source.Vector(),
    style: new ol.style.Style
    ({
        fill: new ol.style.Fill
        ({color: 'rgba(232, 26, 26, 0.2)'}),
        stroke: new ol.style.Stroke
        ({color: '#e81a1a',width: 2}),
        image: new ol.style.Circle
        ({radius: 7,fill: new ol.style.Fill({color: '#da965e'})})
    })
});


// VILLAGE ROADS LAYER
var villageroadslayer = new ol.layer.Vector
({
    visible: false,
    source:new ol.source.Vector(),
    style: new ol.style.Style
    ({
        fill: new ol.style.Fill
        ({color: 'rgba(255, 255, 255, 0.2)'}),
        stroke: new ol.style.Stroke
        ({color: '#da965e',width: 2}),
        image: new ol.style.Circle
        ({radius: 7,fill: new ol.style.Fill({color: '#da965e'})})
    })
});

// GP ROADS LAYER

var benflayer = new ol.layer.Vector
({
    source:new ol.source.Vector(),
    style: new ol.style.Style
    ({
        fill: new ol.style.Fill
        ({color: 'rgba(255, 255, 255, 0.2)'}),
        stroke: new ol.style.Stroke
        ({color: '#da965e',width: 2}),
        image: new ol.style.Circle
        ({radius: 7,fill: new ol.style.Fill({color: '#da965e'})})
    })
});

var villageboundrieslayer = new ol.layer.Vector
({ visible: true, source:new ol.source.Vector() });

var landmarkslayer = new ol.layer.Vector
({ visible: false, source:new ol.source.Vector() });
function loadmap()
{
    map = new ol.Map
    ({
        layers:
        [
            new ol.layer.Group
            ({/*SATELLITE LAYER*/
                layers:[
                    lay_satellite,
                    lay_areal
                ]
            }),
            shroadslayer,
            gproadslayer,
            villageroadslayer,
            benflayer,
            villageboundrieslayer, landmarkslayer,
            vector/*TEMP LAYER TO REPLICATE GEOGRAPHIC RESULTS*/
        ],  
        controls: ol.control.defaults({ attribution: false }).extend([attribution]),
        renderer: 'canvas',
        target: 'map',
        controls: ol.control.defaults
        ({
            attributionOptions: /** @type {olx.control.AttributionOptions} */
            ({
                collapsible: false
            })
        }).extend( [mousePositionControl, scaleLineControl]),
        view: new ol.View
        ({
            center: ol.proj.fromLonLat([80.345370,27.155230]),
            zoom: 9,
            maxZoom: 19,
            minZoom: 4
        })
    });



function bindInputs(layerid, layer)
{
    var visibilityInput = $(layerid + ' input.visible');
    visibilityInput.on('change', function()
    {
        layer.setVisible(this.checked);
        legendlist=this.id;
        if (legendlist=="visible00"){if(document.getElementById('visible00').checked){lay_satellite.setVisible(true);lay_areal.setVisible(false)}}

            if (legendlist=="visible01"){if(document.getElementById('visible01').checked){lay_satellite.setVisible(false);lay_areal.setVisible(true)}}
    });
    visibilityInput.prop('checked', layer.getVisible());

}

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







    // ********* Icon styles *********
        var featuress = [];
        iconStyle = new ol.style.Style({
            image : new ol.style.Icon(({
                anchor : [ 0.5, 46 ],
                anchorXUnits : 'fraction',
                anchorYUnits : 'pixels',
                opacity : 1,
                src : 'img/Pin1.png'
            }))
        });
        vectorSources = new ol.source.Vector({
            featuress : []
        })
        vectorLayers = new ol.layer.Vector({
            source : vectorSources,
            projection:proj,
            style : iconStyle
        });
        map.addLayer(vectorLayers);
        
        
        // ********* navigator styles *********
        var navigatorfeature = [];
        navigatorstyle = new ol.style.Style({
            image : new ol.style.Icon(({
                anchor : [ 0.5, 46 ],
                anchorXUnits : 'fraction',
                anchorYUnits : 'pixels',
                opacity : 1,
                src : 'img/navigator.png'
            }))
        });
        vectorSourcess = new ol.source.Vector({
            navigatorfeature : []
        })
        navigatorLayers = new ol.layer.Vector({
            source : vectorSourcess,
            projection:proj,
            style : navigatorstyle
        });
        map.addLayer(navigatorLayers);


        map.on('singleclick', function(evt)
        {
            featurearr=[];
            map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) { if(layer==benflayer){featurearr.push([feature.get("respondentcode"), feature.get("index")]); }});
            if(featurearr.length==1)
            {
                selectcard(featurearr[0][1], featurearr[0][0]);
                document.getElementById(featurearr[0][1]).style.backgroundColor="#F0F0F0";
            }
            else if(featurearr.length>1)
            {
                var temparra=[]
                htmlcontent="";
                for(featurearrlen=0; featurearrlen<featurearr.length; featurearrlen++)
                {
                    if(temparra.indexOf(featurearr[featurearrlen][1])<0)
                    {temparra.push(featurearr[featurearrlen][1]);
                        htmlcontent+='<div class="col-sm-12 card"  id="'+featurearr[featurearrlen][1]+'a"> <div class="card-body"><h6 class="card-title" onclick=selectcardmodal("'+featurearr[featurearrlen][1]+'","'+blitems[featurearr[featurearrlen][1]].resondantcode+'")>'+blitems[featurearr[featurearrlen][1]].respondantname +'</h6><p class="card-text" onclick=selectcardmodal("'+featurearr[featurearrlen][1]+'","'+blitems[featurearr[featurearrlen][1]].resondantcode+'")>'+blitems[featurearr[featurearrlen][1]].hohname+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="detailsModal('+featurearr[featurearrlen][1]+')">VIEW</button></a></div></div>'
                    }
                }
                
                $("#mapviewclickedbenfd").html(htmlcontent);

                for(featurearrlen=0; featurearrlen<featurearr.length; featurearrlen++)
                {
                   if(selectedbeneficiaryarray.indexOf(blitems[featurearr[featurearrlen][1]].resondantcode)>=0)
                    {document.getElementById(featurearr[featurearrlen][1]+"a").style.backgroundColor="#F0F0F0";}
                }

                $("#mapviewclickedbenfdmodal").modal("show");

            }
        })

        map.on('pointermove', function(evt)
        {
                       featurearr=[];
            map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) { if(layer==benflayer){featurearr.push([feature.get("respondentcode"), feature.get("index")]); }});
            if(featurearr.length==1)
            {
                selectcard(featurearr[0][1], featurearr[0][0]);
                document.getElementById(featurearr[0][1]).style.backgroundColor="#F0F0F0";
            }
            else if(featurearr.length>1)
            {
                var temparra=[]
                htmlcontent="";
                for(featurearrlen=0; featurearrlen<featurearr.length; featurearrlen++)
                {
                    if(temparra.indexOf(featurearr[featurearrlen][1])<0)
                    {temparra.push(featurearr[featurearrlen][1]);
                        htmlcontent+='<div class="col-sm-12 card"  id="'+featurearr[featurearrlen][1]+'a"> <div class="card-body"><h6 class="card-title" onclick=selectcardmodal("'+featurearr[featurearrlen][1]+'","'+blitems[featurearr[featurearrlen][1]].resondantcode+'")>'+blitems[featurearr[featurearrlen][1]].respondantname +' - '+ blitems[featurearr[featurearrlen][1]].resondantcode+'</h6><p class="card-text" onclick=selectcardmodal("'+featurearr[featurearrlen][1]+'","'+blitems[featurearr[featurearrlen][1]].resondantcode+'")>'+blitems[featurearr[featurearrlen][1]].block+', '+blitems[featurearr[featurearrlen][1]].grampanchayat+', '+blitems[featurearr[featurearrlen][1]].village+'</p><a href="#" style="float: right;  text-decoration: none; margin-top:-29px;"><button class="btn btn-info suboption" onclick="detailsModal('+featurearr[featurearrlen][1]+')">VIEW</button></a></div></div>'
                    }
                }
                
                $("#mapviewclickedbenfd").html(htmlcontent);

                for(featurearrlen=0; featurearrlen<featurearr.length; featurearrlen++)
                {
                   if(selectedbeneficiaryarray.indexOf(blitems[featurearr[featurearrlen][1]].resondantcode)>=0)
                    {document.getElementById(featurearr[featurearrlen][1]+"a").style.backgroundColor="#F0F0F0";}
                }

                $("#mapviewclickedbenfdmodal").modal("show");

            }
        })
}



