//check off todos by clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//click X to delete todo
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//add new todo on enter
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		//grab new todo text from input
		var todoText = $(this).val();
		//clear text input box
		$(this).val("");
		//create new li, add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i> </span>" + todoText + "</li>");
	}
});

$(".fa-plus").click(function() {
	$("input[type='text']").fadeToggle();
});
