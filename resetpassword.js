

const resetpasswordhandler=async()=>{

const email=document.getElementById("email").value;
const otp=parseInt(document.getElementById("otp").value);
const password=document.getElementById("password").value;

const resetpasswordbody={
    email,
    otp,
    password
}
// console.log(resetpasswordbody);
const confuguration={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
        
    },
    body:JSON.stringify(resetpasswordbody)
}


try{
    let response=await fetch("https://geek-store.onrender.com/user/reset-password",confuguration);
  console.log(response);
if(response.ok){

    response= await response.json();
    const redirectURL=`http://${window.location.hostname}/adidas_userAuthentication/passwordChanged.html`;
    window.location.href=redirectURL;

}else{
    if(response.status===400){
        //bad request
        console.log("Bad Request",response.statusText);
    }else if(response.status===401){
        console.log("Unauthorized Access :",response.statusText);
    }else if(response.status===500){
        console.log("Internal Server Error:",response.statusText);
    }else{
    console.log("unhandel status code :",response.statusText);
    }
}


}catch(error){
console.log("Error occured",error);
}

}


document.getElementById("btn").addEventListener("click",resetpasswordhandler);