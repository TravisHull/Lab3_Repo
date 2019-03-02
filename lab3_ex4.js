var slider1 = document.getElementById("redRange");
var slider2 = document.getElementById("greenRange");
var slider3 = document.getElementById("blueRange");
var slider4 = document.getElementById("widthRange");
var slider5 = document.getElementById("backRed");
var slider6 = document.getElementById("backGreen");
var slider7 = document.getElementById("backBlue");

var output1 = document.getElementById("redOutput");
var output2 = document.getElementById("greenOutput");
var output3 = document.getElementById("blueOutput");
var output4 = document.getElementById("widthOutput");
var output5 = document.getElementById("outbackRed");
var output6 = document.getElementById("outbackGreen");
var output7 = document.getElementById("outbackBlue");


output1.innerHTML = slider1.value;
output2.innerHTML = slider2.value;
output3.innerHTML = slider3.value;
output4.innerHTML = slider4.value;
output5.innerHTML = slider5.value;
output6.innerHTML = slider6.value;
output7.innerHTML = slider7.value;



slider1.oninput = function()
{
  output1.innerHTML = this.value;
  document.getElementById("testingParagraph").style.borderColor = "rgb(" + slider1.value + ", " + slider2.value + ", " + slider3.value + ")";
}
slider2.oninput = function()
{
  output2.innerHTML = this.value;
  document.getElementById("testingParagraph").style.borderColor = "rgb(" + slider1.value + ", " + slider2.value + ", " + slider3.value + ")";
}
slider3.oninput = function()
{
  output3.innerHTML = this.value;
  document.getElementById("testingParagraph").style.borderColor = "rgb(" + slider1.value + ", " + slider2.value + ", " + slider3.value + ")";
}
slider4.oninput = function()
{
  output4.innerHTML = this.value;
  document.getElementById("testingParagraph").style.borderWidth = slider4.value + "px";
}
slider5.oninput = function()
{
  output5.innerHTML = this.value;
  document.getElementById("testingParagraph").style.backgroundColor = "rgb(" + slider5.value + ", " + slider6.value + ", " + slider7.value + ")";
}
slider6.oninput = function()
{
  output6.innerHTML = this.value;
  document.getElementById("testingParagraph").style.backgroundColor = "rgb(" + slider5.value + ", " + slider6.value + ", " + slider7.value + ")";
}
slider7.oninput = function()
{
  output7.innerHTML = this.value;
  document.getElementById("testingParagraph").style.backgroundColor = "rgb(" + slider5.value + ", " + slider6.value + ", " + slider7.value + ")";
}
