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
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let inputCaptchValue= document.querySelector("#captcha-form");

    document.querySelector("#login-btn").addEventListener("click",function(e){
        e.preventDefault();
        
        if(username.value && password.value && inputCaptchValue.value)
        {
            if(username.value &&  password.value && password.value.length>=8)
            {
                let loading = document.getElementById("circleDiv");
            
                if(inputCaptchValue.value === captchaValue)
                {
                    loading.style.display = "flex"
                    loading.style.flexDirection="column"
                    getData(username.value,password.value).then(function(res){
                        loading.style.display = "none"
                        printData(res)
                    }).catch((err)=>console.log(err));
                }
                else{
                  alert("Invalid Captcha");
                  Refresh_Captcha()
                  inputCaptchValue.value="";
                }
            }else{
               alert("Username or Password Incorrect")
            } 
        } 
    })

    let otp = document.getElementById("clickMe");

   function getData (username,password)
    {
        console.log("hello","userName::",username,"Password::",password)
        return fetch(`https://edukinapi.onrender.com/users?username=${username}&password=${password}`)
        .then(function(res){
            return res.json();
        })
    }

    function printData(res){
        if(res.length)
        {
            alert("Login successful!");
        }
        else{
            alert("Login failed!");
        }
    }
    