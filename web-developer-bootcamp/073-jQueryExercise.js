//How to check if jQuery is working and if your HTML file is connected to your js file:
if(jQuery) {
  alert("jQuery Connected!");
}
else {
  alert("Abort!");
}

//Give all divs a purple background
$("div").css("background", "purple");

//Select all divs with a class of "highlight" and make them 200px wide
$("div.highlight").css("width", "200px");

//Select all divs with the id of "third" and give them an orange border
$("#third").css("border", "2px solid orange");

//BONUS: Select the only the first div and change its font color to pink
$("div:first-of-type").css("color", "pink");

//Another way to select the first div and change its font to pink
//  $("div")
//    .first()
//    .css("color", "pink");

//And yet another way...
//  $("div:first").css("color", "pink");
//The :first is a built-in jQuery shortcut, but it's ever so slightly slower than :first-of-type,
//This is because :first-of-type is a native CSS structural pseudo-class whereas :first is a jQuery shortcut
//It's ever so slightly faster to use :first-of-type, or rather
//It's ever so slightly faster to use a native class than a jQuery shortcut in general