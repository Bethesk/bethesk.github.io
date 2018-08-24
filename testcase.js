/* Use css object in hard codes method
   text turns  to red if li is clicked
$("li").click(function(){
    //$(this).css("color", "red");
    //$(this).css("text-decoration", "line-through");
    if ($(this).css("color") === "rgb(128, 128, 128"){
        $(this).css({
            color:"black",
            textDecoration: "none"
          });
    } else {
      $(this).css({
        color:"gray",
        textDecoration: "line-through"
      });
    }
});
*/

/**
 * Simple method using class; if li clicked call a class 'completed'.. This is for an existing element.
 *

$("li").click(function(){
    $(this).toggleClass("completed");
});

//Click on x to delete Todo
$("span").click(function(event){
    //li and its parent, ui to fadeout and then remove
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //Stop the click event from bubbling to parent elements
    event.stopPropagation();
});

*
**/

$("ul.toDoUl").on("click", "li.toDoLi", function(){
    $(this).toggleClass("completed");
});

$("ul.toDoUl").on("click", "span", function(event){
    //li and its parent, ui to fadeout and then remove
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //Stop the click event from bubbling to parent elements
    event.stopPropagation();
});


$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        var todoText =$(this).val();
        $(this).val("");
        $("ul.toDoUl").append("<li class=\"toDoLi\"><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    }

});

$(".fa-plus").click(function(){
    ("input[type='text']").fadeToggle()
});
