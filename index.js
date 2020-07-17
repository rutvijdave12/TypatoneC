

$("span.letter").click(function(){
	var clicked = $(this).text();
	$(".output").append("<span class='staged'>"+clicked+"</span");
});


$(document).keydown(function(event){
	$(".output").append("<span class='staged'>"+event.key+"</span");
	$("#" + event.key).addClass("pressed");

});

$(document).keyup(function(event){
	$("#" + event.key).removeClass("pressed");

})




