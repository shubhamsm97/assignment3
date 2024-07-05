 function color_input(){
 const x=document.getElementById("red_color").value
 const y=document.getElementById("green_color").value
 const z=document.getElementById("blue_color").value
 let s=parseInt(`${x}`);
 let d=parseInt(`${y}`);
 let f=parseInt(`${z}`);
 document.getElementsByTagName("input")[0].style=`background-color:rgb(${s},${d},${f})`;
 document.getElementsByTagName("input")[1].style=`background-color:rgb(${s},${d},${f})`;
 document.getElementsByTagName("input")[2].style=`background-color:rgb(${s},${d},${f})`;
 }
 
