
$("#quoteBtn").on("click", function() {
    getData();
});

$("#quoteTwitter").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" +  $("#quoteText").text());
});

function getData() {
    $.ajax({
        url: "https://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function(data) {
            console.log(data);
            $("#quoteText").html(data.quoteText);
            $("#quoteAuthor").html(data.quoteAuthor);
        }
    });

}//function getData()