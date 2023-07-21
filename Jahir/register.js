let email = document.getElementById("studentEmail");
let password = document.getElementById("studentPassword");
let name= document.getElementById("studentName")
let gender = document.getElementById("gender");
let date_of_birth = document.getElementById("dateOfBirth");
let Aadhar_number = document.getElementById("AadharNumber");
let city = document.getElementById("city");
let address = document.getElementById("address");
let state = document.getElementById("state");
let pin_code = document.getElementById("pinCode");
let religion = document.getElementById("religion");
let category = document.getElementById("category");
let nationality = document.getElementById("nationality");
let standard = document.getElementById("standard");
let medium = document.getElementById("medium");
let father_name = document.getElementById("fatherName");
let father_occupation = document.getElementById("fatherOccp");
let father_contact = document.getElementById("fatherContact");
let mother_name = document.getElementById("motherName");
let mother_occupation = document.getElementById("motherOccp");
let mother_contact = document.getElementById("motherContact");
let previous_class = document.getElementById("lastClass");
let prev_school_name = document.getElementById("schoolName");
let prev_percentage = document.getElementById("percentage");
let prev_result  = document.getElementById("resultPrevious");

let submitBtn= document.getElementById("btn");

submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    let obj={
        name:name.value,
        email:email.value,
        password:password.value,
        gender:gender.value,
        DOB:date_of_birth.value,
        Aadhar_number:Aadhar_number.value,
        city:city.value,
        address:address.value,
        state:state.value,
        pin_code:pin_code.value,
        religion:religion.value,
        category:category.value,
        nationality:nationality.value,
        standard:standard.value,
        medium:medium.value,
        father_name:father_name.value,
        father_occupation:father_occupation.value,
        father_contact:father_contact.value,
    
        mother_name:mother_name.value,
        mother_occupation:mother_occupation.value,
        mother_contact:mother_contact.value,
    
        previous_class:previous_class.value,
        prev_school_name:prev_school_name.value,
        prev_percentage:prev_percentage.value,
        prev_result:prev_result.value
    }

    console.log(Object.keys(obj).length)
    // fetch(`http://localhost:3000/users`,{
    //     method:"POST",
    //     headers:{
    //          "Content-type":"application/json",
    //     },
    //     body:JSON.stringify(obj)
    // }).then(res=>{
    //     return res.json();
    // })
    
})

    