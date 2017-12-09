$(document).ready(function(){
  var long, lat;
  if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
   
   long = position.coords.longitude;
   lat = position.coords.latitude;
  

   var api = "https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long+"";
  $.getJSON(api, function(data) {


var city = data.name;
var weatherType = data.weather[0].main;
var icon = data.weather[0].icon;
var desc = data.weather[0].description;
var int = data.weather[0].id;
var temp = Math.floor(data.main.temp);
var fTemp = Math.floor(temp*1.8+32);
var tempSwap = true;

   if (desc == "Moderate Rain") {
$("#icon").attr("src=http://openweathermap.org/img/w/10d.png");
}
    $("#city").html(city);
    $("#temp").html(temp+" °C");
    $("#weather").html(weatherType);
    $("#icon").attr("src", icon);
    $("#desc").html(desc)
    $("#int").html(int);
    

    
    
    $("#temp").on("click", function() {
    if (tempSwap===false) {
      $("#temp").html(temp+" °C");
      tempSwap = true;
    } 
      else {
        $("#temp").html(fTemp+" °F");
        tempSwap = false;
      
      } 
  });
  if (int >= 801) {
 $("body").css("background-image", "url(https://images.pexels.com/photos/37728/pexels-photo-37728.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)")
 
 } 
else if (int >= 800){
   $("body").css("background-image", "url(https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)")
 } 
 else if (int >= 700) {
$("body").css("background-image", "url(https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb) " )        
         
         } 
    //snow background 
 else if (int >= 600) {
 $("body").css("background-image","url(https://images.pexels.com/photos/289649/pexels-photo-289649.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb) " )
    
    }
 else if (int >= 300) {
 $("body").css("background-image",  "url(https://images.pexels.com/photos/325676/pexels-photo-325676.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb) " )
 
 }
 
 else if (int>= 200) {
 $("body").css("background-image", "url(https://images.pexels.com/photos/325676/pexels-photo-325676.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)" )
 } 
 else {
 $("body").css("background-image","url(https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb)")
 } ;
  });
}) ;
    
    
} 

});