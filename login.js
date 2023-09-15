

console.log(window.location.port);

 const signinhandler = async() =>{

    try{

        const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const role=document.getElementById("role").value;

const userlogindata={
    email,
    password,
    role
}
console.log(userlogindata);

const configuration={
    method:"POST",
    headers:{
        "Content-Type":"application/json",
    },
    body:JSON.stringify(userlogindata)
};

let data= await fetch("https://geek-store.onrender.com/user/login",configuration);

data=await data.json();
// console.log(data);
alert(data.message);
if(data.token){
    localStorage.setItem("token",data.token);
    const redirect=`http://${window.location.hostname}/adidas_userAuthentication/HomepageAfterLogin.html`;
    window.location.href=redirect;
}else{
    console.log(data.message);
}

}catch(error){
    error="Somthing Went Wrong try again later";
console.log("error occured "+ error);
}


 }




document.getElementById("submitbtn").addEventListener("click",signinhandler);