$("document").ready(function() {

// spinner control
$("#spinner_ctrl").spinner({
    min: 0,
    max: 500,
    step: 10,
    page: 10
}); // End of spinner control


// slider control
$("#slider_ctrl").slider({
    value: 0,
    min: 0,
    max: 500,
    step: 10,
    slide: function(evt, elem) {
        $("#span_choose").text(elem.value);
    },
    start: function(evt, elem) {
        $("#span_choose").addClass("changetext");
    },
    stop: function(evt, elem) {
        $("#span_choose").removeClass("changetext");
    }
}) // end of slider control
 

//slider control for range
$("#slider_ctr2").slider({
    range: true,
    min: 0,
    max: 1000,
    values: [250,500],
    slide :function(evt, elem) {
        $("#range1").text(elem.values[0]);
        $("#range2").text(elem.values[1]);
    },
    start: function(evt, elem) {
        $("#range1").addClass("changetext");
        $("#range2").addClass("changetext");

    },
    stop: function(evt, elem) {
        $("#range1").removeClass("changetext");
        $("#range2").removeClass("changetext");
    }
}) //end of slider control for range


//Values in slider text
$("#range1").text($("#slider_ctr2").slider("values", 0));
$("#range2").text($("#slider_ctr2").slider("values", 1));
//End of values in slider text


//select-menu control
$("#select_europe").selectmenu({
    icons: {button: "ui-icon-lightbulb"}
}).selectmenu("menuWidget");
// End of select-menu control


// Accordion
$("#accordion_ctrl").accordion( {
    collapsible: true,
    event: "click",
    icons: {
          header: "ui-icon-circle-triangle-e",
          activeHeader: "ui-icon-circle-triangle-s"
         }
});
//End of accordion


//Tabs
$("#tabs_ctrl").tabs({
    heightStyle : "auto",
    collapsible : true
});
//End of tabs


//datepicker
$("#datepick1").datepicker({
    firstDay: 1,
    showButtonPanel: true,
    currentText: "Today",
    constrainInput: true,
    defaultDate: 3,
    minDate: 0,
    maxDate: "+3M",
    changeMonth: true,
    changeYear: true,
    numberOfMonths: 1,
});

//Autocomplete

//text to use for autocomplete
var hobbies =[
    "learning",
    "cooking",
    "knitting",
    "gardering",
    "photography",
    "writing",
    "fishing",
    "hiking",
    "birdwatching",
    "hunting",
    "sewing",
    "scrapbooking",
    "physical",
    "woodworking",
    "genealogy",
    "drawing",
    "running",
    "geocaching",
    "crochet",
    "shopping",
    "board game",
    "baking",
    "dance",
    "cycling",
    "archery",
    "stamp collecting",
    "pottery",
    "quilting",
    "calligraphy",
    "origami",
    "homebrewing",
    "brewing",
    "coin collecting",
    "poker",
    "rail transport modelling",
    "video game",
    "amateur radio",
    "chess",
    "camping",
    "snowbording",
    "crossword",
    "computer programming",
    "model building",
    "parachuting",
    "painting",
    "darts",
    "bonsai"
];
//end of text to use for autocomplete

//countries used for progress-bar
var countries = [
    "greece",
    "spain",
    "italy",
    "australia",
    "usa",
    "norway",
    "uk",
    "irland",
    "bulgaria",
    "romania",
    "cyprus",
    "argentina",
    "pakistan",
    "turkey",
    "israel",
    "jordan",
    "south africa",
    "canada",
    "serbia",
    "albania",
    "france",
    "holland",
    "india",
    "china",
    "japan",
    "korea",
    "viet nam",
    "phillipines",
    "indonesia",
    "algeria",
    "marocco",
    "russia",
    "poland",
    "ukraine"
]
// end of countries used for progress-bar


$("#auto1").autocomplete({
    autofocus: true,
    source: hobbies
});
//end of autocomplete


//Progress
$("#progress_bar").progressbar({
    value:40,
    complete: function(evt, elem) {
        var randomnum = Math.floor(Math.random()* countries.length);
        var lucky_text = countries[randomnum];
        alert(lucky_text);
    }
});

$("#btn_progress").click(function() {
    var elem =  $("#progress_bar");
    var val = elem.progressbar( "value" ) || 0;
    elem.progressbar( "value", val + 10 );
    return false;
});
//End of progress


//Dialog

$("#open_dialogr").click(function() {
    $("#dialog1").dialog("open");
});


$("#dialog1").dialog({
    autoOpen: false,
    closeOnEscape: false,
    draggable: false,
    modal: true,
    buttons: [
        {
            text: "OK",
            click: function () {
                $(this).dialog("close");
            }
        }
    ]
});
//End of dialoge


//Resize
$("#resize_me").resizable({
    minHeight: 150,
    minWidth: 150,
    maxHeight: 400,
    maxWidth: 400,

    start: function(evt, ui) {
        ui.element.css("background-color", "yellow");
    },
    stop: function(evt, ui) {
        ui.element.css("background-color", "");
        $("#resize_me h3").text("Resize Me");
    },
    resize: function(evt, ui) {
        $("#resize_me h3").text(
            Math.round(ui.element.width())
            + ", " + 
            Math.round(ui.element.height()));
    }

});
//End of resize

//Show-Hide Explode
$("#show1").click(function(evt) {
    $("#Div_text").show("explode", 2000);
});
$("#hide1").click(function(evt) {
    $("#Div_text").hide("explode", 2000);
});
//End Show-Hide Explode



}); //ready function