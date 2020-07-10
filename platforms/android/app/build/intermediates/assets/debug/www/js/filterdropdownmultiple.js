
//========= Filter Block  ===========

$(document).ready(function () {
  $('#block').multiselect({
    //Width: '160px',
    //includeSelectAllOption: true,
    //nonSelectedText: 'Select an Option'
  });

});

function getSelectedValues() {
  var selectedVal = $("#block").val();
  for (var i = 0; i < selectedVal.length; i++) {
    function innerFunc(i) {
      setTimeout(function () {
        location.href = selectedVal[i];
      }, i * 2000);
    }
    innerFunc(i);
  }
}




//========= Filter GP ===========

$(document).ready(function () {
  $('#filtergp').multiselect({
    //Width: '160px',
    //includeSelectAllOption: true,
    //nonSelectedText: 'Select an Option'
  });

});

function getSelectedValues() {
  var selectedVal = $("#filtergp").val();
  for (var i = 0; i < selectedVal.length; i++) {
    function innerFunc(i) {
      setTimeout(function () {
        location.href = selectedVal[i];
      }, i * 2000);
    }
    innerFunc(i);
  }
}



//========= Filter Village ===========

$(document).ready(function () {
  $('#filtervillage').multiselect({
    //Width: '160px',
    //includeSelectAllOption: true,
    //nonSelectedText: 'Select an Option'
  });

});

function getSelectedValues() {
  var selectedVal = $("#filtervillage").val();
  for (var i = 0; i < selectedVal.length; i++) {
    function innerFunc(i) {
      setTimeout(function () {
        location.href = selectedVal[i];
      }, i * 2000);
    }
    innerFunc(i);
  }
}


//========= Filter Building Type ===========

$(document).ready(function () {
  $('#buildingtype').multiselect({
    //Width: '160px',
    //includeSelectAllOption: true,
    //nonSelectedText: 'Select an Option'
  });

});

function getSelectedValues() {
  var selectedVal = $("#buildingtype").val();
  for (var i = 0; i < selectedVal.length; i++) {
    function innerFunc(i) {
      setTimeout(function () {
        location.href = selectedVal[i];
      }, i * 2000);
    }
    innerFunc(i);
  }
}