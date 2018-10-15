var galToLtr = function(gal) {
  return 3.785 * gal; };
var ltrToGal = function(ltr) {
  return ltr / 3.785 };
var tbspToTsp = function(tbsp) {
  return 3 * tbsp; };
var tspToTbsp = function(tsp) {
  return tsp / 3; };
var ozToCups = function(oz) {
  return oz / 8; };
var cupsToOz = function(cups) {
  return cups * 8; };

var tbsp = parseFloat(prompt("Enter amount in tablespoons:"));
alert("That is " + tbspToTsp(tbsp) + " teaspoons");
