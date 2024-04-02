function calculate()
{
let value1 = document.getElementById("value1").value
let value2 = document.getElementById("value2").value
let operator=document.getElementById("operator").value
let h1=document.getElementById("h1")  
if(value1==""||value2==""){
alert("Please enter the value.");
return;
}

    // h1.innerHTML=`${operator}`

    if(operator== "+")
    {
        // let result=value1+value2
        h1.innerHTML=`RESULT: ${parseInt(value1)+parseInt(value2)}`;
    }
    else if(operator== '-')
    {
        h1.innerHTML=`RESULT: ${value1-value2}`
    }
    else if(operator== '*')
    {
        h1.innerHTML=`RESULT: ${value1*value2}`
    }
    else if(operator== '/')
    {
        h1.innerHTML=`RESULT: ${value1/value2}`
    }
    else if(operator=='AC'){
        h1.innerHTML=`RESULT:0`
        
    }
    // document.querySelector("#value2").value;
    // document.querySelector("#value1").value;

    // let result=value1+value2
    // h1.innerHTML=` ${result}`

    document.getElementById("value1").value="";
    document.getElementById("value2").value="";

}
let body=document.querySelector("body")
let color=document.getElementById("color1")
color.addEventListener("mouseenter",()=>{
         body.style.backgroundColor=`${color1.value}`})