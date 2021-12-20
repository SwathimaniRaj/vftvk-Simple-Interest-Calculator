function compute()
{
// creating reference to get value from input fields
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
 // calculating interest
    var interest = principal * years * rate / 100;
 // getting year value from current year and entered no of years
    var year = new Date().getFullYear()+parseInt(years);
    
//displaying result in span tag after calculating interest
   document.getElementById("result").innerHTML="If you deposit <span class='highlight'>"+principal+",</span>\<br\>at an interest rate of <span class='highlight'> "+rate+"%</span>.<br\>You will receive an amount of <span class='highlight'>"+interest+"</span>,\<br\>in the year <span class='highlight'>"+year+"</span>\<br\>"
 
}
function updateRate()
{
//read the value of the range slider and display in the spantag adjacent to the slider.

    var rateval = document.getElementById("rate");
    document.getElementById("rate_val").innerText=+rateval.value+"%";
// use value of range slider in % to change color on slider 
rateval.oninput=function(){
  var value = (rateval.value-rateval.min)/(rateval.max-rateval.min)*100
  this.style.background = 'linear-gradient(to right, blue 0%, blue ' + value + '%, grey ' + value + '%, grey 100%)'};   

}
function checkInput()
{
// create reference to validate input element
var input = document.getElementById("principal");
// check if principal value is 0 or nagative value
    if(input.value <= 0 || input.value == "")
    {
    // if true raise alert window to request new input
    alert("Please enter a positive number");
    // returning focus to same input field
    input.focus();
    }
    
}
        