function fun(){
const datas=document.getElementById("email").value;
let regex=/[a-z]{2,}[0-9]{1,}@{1}[a-z]{4,}\.{1}[a-z]{3}/g;
const result=datas.match(regex);
if(datas==result){
    console.log("my name is true");
}
else{
    document.getElementById("email").innerHTML=alert("fill the email again !");

}
}
function ages(){
    const age_input=document.getElementById("age").value;
    if(age_input>150||age_input<=0){
        alert("age should be 1 to 149");
    }

    }
// console.log(fun());

// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };
