

const forgotpasswordhandler=async ()=>{

    const email=document.getElementById("email").value;

    const emailbody={
        email
    }

    const configuration={
        method:"POST",
        headers:{
            "Content-Type":"application/json",
             },
             body:JSON.stringify(emailbody)
    }
  
    try {
        const response = await fetch("https://geek-store.onrender.com/user/forgot-password", configuration);
    
        if (response.ok) {
          // Status code is in the range 200-299, indicating success.
          const emailData = await response.json();
          //console.log("Success:", emailData);

          const directURL=`http://${window.location.hostname}/adidas_userAuthentication/ResetPassword.html`
       window.location.href=directURL;
        } else {
          // Handle different status codes here.
          if (response.status === 400) {
            // Bad request (client error). Handle validation errors, etc.
            console.error("Bad Request:", response.statusText);
          } else if (response.status === 401) {
            // Unauthorized. Handle authentication issues.
            console.error("Unauthorized:", response.statusText);
          } else if (response.status === 500) {
            // Internal Server Error. Handle server-side errors.
            console.error("Internal Server Error:", response.statusText);
          } else {
            // Handle other status codes as needed.
            console.error("Unhandled Status Code:", response.status);
        }
    }}catch(err){
        console.error("An error occurred:", error);
    }
            

  





}

document.getElementById("btn").addEventListener("click",forgotpasswordhandler)