
let name = document.getElementById("studentName");
let parents = document.getElementById("parents");
let age = document.getElementById("age");
let gender = document.getElementById("gender");
let email= document.getElementById("studentEmail");
let password= document.getElementById("studentPassword");

let caste = document.getElementById("caste");
let state = document.getElementById("state")
let grade = document.getElementById("grade");
let medium = document.getElementById("medium");
let contact = document.getElementById("contact");
let address= document.getElementById("address");


let nextBTN = document.getElementById("nextBTN");

nextBTN.addEventListener("click",function(e){
    e.preventDefault();
    formTwo.style.display="flex"
    // console.log("hii")
})

let search= document.getElementById("searchBTN");
let searchData=document.getElementById("searchData")

let submitBTN =  document.getElementById("submitBTN");
let updateBTN =  document.getElementById("updateBTN");
submitBTN.addEventListener("click",function(e){
    e.preventDefault();

    let obj = {
        name:name.value,
        parents:parents.value,
        age:age.value,
        gender:gender.value,
        email:email.value,
        password:password.value,
        caste:caste.value,
        state:state.value,
        grade:grade.value,
        medium:medium.value,
        contact:contact.value,
        address:address.value
    }

    // console.log(obj);

    if(contact.value.length ==10)
    {
        if(password.value.length >=8)
        {
            // newStudentAdd(obj);
            checkEmail(obj);
        }else{
            alert(" Password should be greater than 8 digit");
        }
    }else{
        alert("Mobile Number should be 10 digit");
    }
    
})

search.addEventListener("click",function(e){
    e.preventDefault();
    submitBTN.style.display="none"
    updateBTN.style.display="block"
    let email1= document.getElementById("search")
    fetch(`https://mock-api-og1t.onrender.com/users?email=${email1.value}`).then(res=>{
        return res.json();
    }).then(data=>{
        // console.log(data)
        display(data);
    }).catch(err=>{
        console.log(err)
    })
})

function display(data)
{
    if(data.length==0)
    {
        alert("Invalid email Address");
        submitBTN.style.display="block"
        updateBTN.style.display="none"
    }
    else{
        name.value=data[0].name;
        parents.value=data[0].parents;
        age.value=data[0].age;
        gender.value=data[0].gender;
        email.value=data[0].email;
        password.value=data[0].password;
    
        caste.value=data[0].caste;
        state.value=data[0].state;
        grade.value=data[0].grade;
        medium.value=data[0].medium;
        contact.value=data[0].contact;
        address.value=data[0].address;
    
        updateBTN.addEventListener("click",function(e){
            e.preventDefault();
            let obj = {
                name:name.value,
                parents:parents.value,
                age:age.value,
                gender:gender.value,
                email:email.value,
                password:password.value,
                caste:caste.value,
                state:state.value,
                grade:grade.value,
                medium:medium.value,
                contact:contact.value,
                address:address.value
            }
    
            fetch(`https://mock-api-og1t.onrender.com/users/${data[0].id}`,{
                method:"PATCH",
                headers:{
                     "Content-type":"application/json",
                },
                body:JSON.stringify(obj)
            }).then(res=>{
                return res.json();
            }).then(data=>{
                callLogin();
                // console.log(data)
            }).catch(err=>{
                console.log(err)
            })
    
        })
    }
}
function newStudentAdd(obj)
{
    fetch(`https://mock-api-og1t.onrender.com/users`,{
        method:"POST",
        headers:{
             "Content-type":"application/json",
        },
        body:JSON.stringify(obj)
    }).then(res=>{
        return res.json();
    }).then(data=>{
        callLogin();
        console.log(data)
    }).catch(err=>{
        console.log(err);
    })
}

function callLogin(){
    // alert("Registration Successfully Done Redirecting towards the Login Page");
    window.location.href="./login.html";
}

function checkEmail(obj)
{
    fetch(`https://mock-api-og1t.onrender.com/users?email=${obj.email}`).then(res=>{
        return res.json();
    }).then(data=>{
        // console.log(data,"OBJ is")
        isEmailPresent(data,obj);
    }).catch(err=>{
        console.log(err)
    })
}

function isEmailPresent(data,obj)
{
    if(data.length >0)
    {
         alert("This Email is Already Used")
    }else{
    //    console.log(obj)
        newStudentAdd(obj);
    }
}


let register = document.querySelector("#register");
  let logout = document.getElementById("logout");
  var id;
  fetch(`https://mock-api-og1t.onrender.com/afterLogin`)
    .then(res=>{
    return res.json();
    }).then(data=>{
      displayName(data[0]);
      // console.log(data);
    }).catch(err=>{
    console.log(err);
  })
  function displayName(data)
  {
    if(data != null)
    {
      let name = data.name;
      name = name.split(" ");
      id = data.id;
      console.log(id)
      console.log(name[0])
      register.innerText = name[0];
      logout.style.display="block";
      searchData.style.display="flex"
    }else{
      register.innerText="Register";
      logout.style.display="none";
      searchData.style.display="none"
    }
  }

  logout.addEventListener("click",function(e){
    e.preventDefault();
    fetch(`https://mock-api-og1t.onrender.com/afterLogin/${id}`,{
      method:"DELETE"
    })
    .then(res=>{
    return res.json();
    }).then(data=>{
      // console.log(data);
      displayName(null)
    }).catch(err=>{
    console.log(err);
    })
    console.log(id)
  })