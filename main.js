 function calc(dataPouThaParw){
    
   

    // sthn calc na valw buttons kai na pairnei times kai na kanei calculate stin ida functio

     var input1 = document.querySelector("#value1").value;
     var a = parseInt(input1);
     var b= parseInt(document.querySelector("#value2").value);

    //  document.getElementById("add").addEventListener("click", calc);
  //    document.getElementById("result").this = a+b;

    //   document.getElementById("min").addEventListener("click", calc);
  //    document.getElementById("result").innerHTML = a-b;

    //   document.getElementById("div").addEventListener("click", calc);
 //     document.getElementById("result").innerHTML = a/b;

    //   document.getElementById("mul").addEventListener("click", calc);
  //    document.getElementById("result").innerHTML = a*b;

    
// document.getElementById("add").innerHTML=(a+b);
// document.getElementById("min").innerHTML=a-b;
// document.getElementById("div").innerHTML=a/b;
// document.getElementById("mul").innerHTML=a*b;

// inputPoupira.value = inputPoupira.value.replace(ch,"");

     
  //  var op = document.querySelector("#operator").value;
    var calculate;

    if(dataPouThaParw == "add") {
        calculate = a + b;
    } else if (dataPouThaParw == "min") {
        calculate = a - b;
    } else if (dataPouThaParw == "div") {
        calculate = a / b;
    } else if (dataPouThaParw == "mul") {
        calculate = a * b;
    }
    console.log(dataPouThaParw)

  document.querySelector("#result").innerHTML= `<p style="color:red">${calculate}</p>`;
}

function del(){

document.getElementById("value1").value="";
document.getElementById("value2").value ="";
document.getElementById("result").innerHTML="";
}


function inputnumber(inputPoupira){
    var ch = /[^1-9]/gi;
    inputPoupira.value = inputPoupira.value.replace(ch,"");
}
