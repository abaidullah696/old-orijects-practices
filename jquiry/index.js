$("h1").addClass("big-hading margin-50");
// $("h1").click(function(){
//     $("h1").css("color","purple");
// })
$("button").click(function(){
    $("h1").css("color","purple");
})
$("input").keypress(function(event){
    $("h1").text(event.key);
})
// animate iss also a key to animate the things