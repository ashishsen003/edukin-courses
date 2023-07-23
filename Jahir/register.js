
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
    console.log("hii")
})

let search= document.getElementById("searchBTN");


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

    console.log(obj);
    newStudentAdd(obj);
})

search.addEventListener("click",function(e){
    e.preventDefault();
    submitBTN.style.display="none"
    updateBTN.style.display="block"
    let email1= document.getElementById("search")
    fetch(`http://localhost:3000/users?email=${email1.value}`).then(res=>{
        return res.json();
    }).then(data=>{
        console.log(data)
        display(data);
    }).catch(err=>{
        console.log(err)
    })
    
})

function display(data)
{
    if(data.length==0)
    {
        alert("Invalid email Address")
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
    
            fetch(`http://localhost:3000/users/${data[0].id}`,{
                method:"PATCH",
                headers:{
                     "Content-type":"application/json",
                },
                body:JSON.stringify(obj)
            }).then(res=>{
                return res.json();
            }).then(data=>{
                console.log(data)
            }).catch(err=>{
                console.log(err)
            })
    
        })
    }
}
function newStudentAdd(obj)
{
    fetch(`http://localhost:3000/users`,{
        method:"POST",
        headers:{
             "Content-type":"application/json",
        },
        body:JSON.stringify(obj)
    }).then(res=>{
        return res.json();
    }).then(data=>{
        console.log(data)
    }).catch(err=>{
        console.log(err)
    })
}