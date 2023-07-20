let userdata;

    const fonts =["cursive","sans-serif","serif","monospace"];

    let captchaValue ="";

    function generateCaptch(){
        let value= btoa(Math.random()*10)
        value =value.substr(0,5+Math.random()*5);
        captchaValue =value;
    }

    function setCaptcha (){
       let html =  captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font= Math.trunc(Math.random()*fonts.length);
            return `<span
            style ="
                transform:rotate(${rotate}deg);
                font-family:${fonts[font]}
                "
            >${char}</span>`;

        }).join("");


       document.querySelector(".preview").innerHTML=html;
    }
    function Refresh_Captcha(){
        document.querySelector(".captcha-refresh").addEventListener("click",function(){
            generateCaptch();
            setCaptcha();
        });
        generateCaptch();
        setCaptcha();
    }
    Refresh_Captcha();
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let inputCaptchValue= document.querySelector("#captcha-form");
    let loading = document.getElementById("circleDiv");

    document.querySelector("#login-btn").addEventListener("click",function(e){
        e.preventDefault();
        
        if(email.value && password.value && inputCaptchValue.value)
        {
            if(email.value &&  password.value && password.value.length>=8)
            {

                if(inputCaptchValue.value === captchaValue)
                {
                    loading.style.display = "flex"
                    loading.style.flexDirection="column";
                    getData(email.value,password.value)
                    // loading.style.display="none";
                }
                else{
                  alert("Invalid Captcha");
                  Refresh_Captcha()
                  inputCaptchValue.value="";
                  loading.style.display = "none";
                }
            }else{
               alert("Email or Password Incorrect")
               loading.style.display = "none"
            } 
        } 
    })

   function getData (email,password)
    {
        console.log("hello","userName::",email,"Password:",password)
        fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
        .then(function(res){
            return res.json();
        }).then(data=>{
            printData(data)
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })
    }

    function printData(res){
        if(res.length)
        {
            alert("Login successful!");
            loading.style.display = "none"
        }
        else{
            alert("Login failed!");
            loading.style.display = "none"
        }
    }
    