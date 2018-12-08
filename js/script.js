var body = document.getElementsByTagName('body')[0];
var tbl = document.createElement('table');
tbl.style.width = '100%';
tbl.setAttribute('border', '2');
var tbdy = document.createElement('tbody');
var aY = 1;
var bY = 3;
var errorMSG;

// multi line editting alt command up/down
//save = command s 
//comment out = command /
//move line up and down = option up/down
//copy a line multiple times = option/shift up/down
function enterNew() {
  location.reload();
}
//let slider = $("#sliderXBegin");
//let input = $('#xBegin');




//update input value 
//refresh table 

/*input event 
update slider 
refresh table  
 

*/
$(function () {
  //var xStart = parseInt(xBegin);
  $("#sliderXBegin").slider({
    //range:true,
    min: 1,
    max: 75,


    value: 1,
    
    //$( '#sliderXBegin' ).slider( "value", parseInt( $( '#xBegin' ).val() ) ) ;
  });
  $("#sliderXEnd").slider({
    //range:true,
    min: 1,
    max: 75,


    value: 1,
    
    //$( '#sliderXBegin' ).slider( "value", parseInt( $( '#xBegin' ).val() ) ) ;
  });
  $("#sliderYBegin").slider({
    //range:true,
    min: 1,
    max: 75,


    value: 1,
    
    //$( '#sliderXBegin' ).slider( "value", parseInt( $( '#xBegin' ).val() ) ) ;
  });
  $("#sliderYEnd").slider({
    //range:true,
    min: 1,
    max: 75,
    value: 1,
    
  });
});


/*var strSliderID = "#slider" + strVarToInitialize[0].toUpperCase()+strVarToInitialize.substr(1) ;
$( strSliderID ).slider( "value", parseInt( str ) ) ;

// bind changes in text fields to sliders
$( '#' + strVarToInitialize ).blur( function() {
  // console.log( '#' + strVarToInitialize + " lost focus, slider is " + strSliderID ) ;
  $( strSliderID ).slider( "value", parseInt( $( '#' + strVarToInitialize ).val() ) ) ;
} ) ;
*/
function display() {


  //additional exit conditions 

  var aX = parseInt(document.getElementById("xBegin").value);
  if (isNaN(aX)) {
    //  alert("xBegin must be an integer!");
    return null;
  }
  var bX = parseInt(document.getElementById("xEnd").value);
  if (isNaN(bX)) {
    //alert("xEnd must be an integer!");
    return null;
  }
  var aY = parseInt(document.getElementById("yBegin").value);
  if (isNaN(aY)) {
    //alert("xBegin must be an integer!");
    return null;
  }
  var bY = parseInt(document.getElementById("yEnd").value);
  if (isNaN(bY)) {
    //alert("xEnd must be an integer!");
    return null;
  }
  if (aX > 75 | bX > 75 | aY > 75 | bY > 75) {
    return null;
  }
  if (aX <= 0 | bX <= 0 | aY <= 0 | bY <= 0) {
    return null;
  }

  if (aX > bX) {
    alert("xBegin must be less then xEnd!");
    return null;
  }

  if (aY > bY) {
    alert("yBegin must be less then yEnd!");
    return null;
  }

  // calculate table values 
  function generateValues(index) {
    let rowData = [];
    var result = 0;

    // create first row 
    if (index == 0) {
      rowData.push('*');
      for (let count = aX; count <= bX; count++) {
        rowData.push(count);
      }
      return rowData;
    }
    // other rows 
    rowData.push(aY + (index - 1));
    for (var x = aX; x <= bX; x++) {
      result = x * (aY + (index - 1));
      rowData.push(result);
    }
    return rowData;
  }

  let makeRow = function (rowData) {
    let tr = document.createElement('tr');
    rowData.forEach(function (val) {
      let td = document.createElement('td');
      td.appendChild(document.createTextNode(val));

      tr.append(td);

    })
    return tr;
  }
  // inserts rows
  let row;
  let arrRow = [];
  let createTable = function (arrRow) {
    var tbdy = document.createElement('tbody');
    arrRow.forEach(function (row) {
      tbdy.append(row);
    });
    var tbl = document.createElement('table');
    tbl.append(tbdy);

    return tbl;
  }
  //Print to  

  let rows = [];
  for (var index = 0; index <= (bY - aY) + 1; index++) {
    // console.log(index);
    rows.push(makeRow(generateValues(index)));
  }
  var newTable = createTable(rows);

  $("#target").children().remove();
  document.querySelector("#target").append(newTable);

  // Create JQuery UI Tabs
}

// $("#tabs").tabs();
$("#tabs").tabs({
  activate: function (event, ui) {
    ui.newTab.addClass("selected");
    ui.oldTab.removeClass("selected");
  }
});
let bindSlider = function(slider, input) {
  input.on("input", function () {
    let value = parseInt(input.val());
    slider.slider("value", value);
    if($("#form_input").valid())
    {
      display();
    }
  })

  slider.on("slidechange", function () {
    let value = slider.slider("value");
    console.log(value);
    input.val(value);
    if($("#form_input").valid())
    {
      display();
    }
  })
}
bindSlider($("#sliderXBegin"),$("#xBegin"));
bindSlider($("#sliderXEnd"),$("#xEnd"));
bindSlider($("#sliderYBegin"),$("#yBegin"));
bindSlider($("#sliderYEnd"),$("#yEnd"));

let numSavedTabs = 0;

$("button[name=save]").on("click", function () {
  let panelID = "panel" + numSavedTabs;
  console.log(panelID);
  // New Tab
  let newTab = $("<li><a href=#" + panelID + ">Tab " + numSavedTabs + "</a></li>");
  // New panel
  let newPanel = $("<div id=" + panelID + " class=panel></div>");
  let newTable = $("#target").clone().attr("id", "");
  newPanel.append(newTable);

  // Put 'em in the DOM
  $("#tabs ul").append(newTab);
  $("#tabs").append(newPanel);
  //$("#").append(newTable);

  // Refresh
  $("#tabs").tabs("refresh");

  numSavedTabs++;

})





