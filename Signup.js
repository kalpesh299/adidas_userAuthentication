

const signupHandler=async()=>{
try{
    const name=document.getElementById("name").value;
    const password=document.getElementById("password").value;
    const email=document.getElementById("email").value;

    const signupbody={
        name,
        password,
        email
    }

    const configuration={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(signupbody)
    }

    let status=await fetch("https://geek-store.onrender.com/user/register",configuration);
    status=await status.json();

   
    
    alert(status.message);
   
   if(status.message){
    
    localStorage.setItem("user_id",status._id);
    const redirect=`http://${window.location.hostname}/adidas_userAuthentication/HomepageAfterLogin.html`;
        window.location.href=redirect;

   }else{
    console.log("Already register with same Name");
   }


}catch(err){
err="something wnet wrong";
console.log(err);
}



}

document.getElementById("btn").addEventListener("click",signupHandler);
    