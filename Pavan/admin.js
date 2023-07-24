
let courseUrl = "http://localhost:3000/courses"
let userUrl = "http://localhost:3000/users";
let adminUrl = "http://localhost:3000/admin"

var main = document.querySelector("#content")
var main = document.querySelector("#content")
var courseData;
var userData;
var adminData;
var admin;

let admission = document.querySelector("#admission");
let addStudent = document.querySelector("#addStudent");
let viewStudent = document.querySelector("#viewStudent");
let Teacher = document.querySelector("#Teacher");
let addCourse = document.querySelector("#addCourse");
let viewCourses = document.querySelector("#viewCourses");

let adminName = document.querySelector(".admin-name");
let adminEmail = document.querySelector(".admin-email");

let admin1Name = document.querySelector(".admin1-name");
let admin1Email = document.querySelector(".admin1-email");
let admin1Pass = document.querySelector(".admin1-pass");



async function fetching(url){
  try{
    let res = await fetch(url)
    let data = await res.json();
    console.log(data)
    courseData = data;
    userData = data;
   
    
  }
  catch(err){
    console.log(err)
  }
}

async function fetchadmin(url){
  try{
    let res = await fetch(url)
    let data = await res.json();
    console.log(data);
    adminData = data;
    displayAdmin(adminData);
    
    
  }
  catch(err){
    console.log(err)
  }
}

fetching(userUrl);
fetchadmin(adminUrl);

function displayAdmin(data){
  adminName.innerText = data[0].name;
  adminEmail.innerText = data[0].email;

  admin1Name.innerText ="Admin Name :"+ " "+ data[0].name;
  admin1Email.innerText = "Admin Email :"+ " "+ data[0].email;
  admin1Pass.innerText = "Admin Password :"+ " "+ data[0].password;

  console.log(data[0].email)
}



//-------admission------


function displayUsers(data){
  main.innerHTML = "";

  let admissionList = document.createElement("div");
  admissionList.className = "studentList";
  
  data.map(item =>{
    let student = createAdmission(item);
    admissionList.append(student)
  })

  main.append(admissionList);
}



function createAdmission(item){
  console.log(item)

  let student = document.createElement("div");

  let stud_basic = document.createElement("div");
  let stud_basic_title = document.createElement("h2")
 
  let stud_image = document.createElement("div");
  let image = document.createElement("img");
  let stud_name = document.createElement("h3");
  let stud_email = document.createElement("p");
  let stud_pass = document.createElement("p");
  let stud_gen = document.createElement("p");
  let stud_age = document.createElement("p");

  let stud_add = document.createElement("div");
  let stud_add_title = document.createElement("h2")
  let stud_parent= document.createElement("p");
  let stud_contact= document.createElement("p");
  let stud_state = document.createElement("p");
  let stud_caste = document.createElement("p");

  student.className = "student";
  stud_image.className = "stud-image"
  
  
  stud_basic_title.innerText = "> Student Basic Details"
  image.src = "https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-512.png"
  stud_name.innerText = "Student Name :"+" "+item.name;
  stud_email.innerText = "Student Email :"+" "+item.email;
  stud_pass.innerText = "Student Password :"+" "+item.password;
  stud_age.innerText = "Student Password :"+" "+item.age;
  stud_gen.innerText = "Student Gender :"+" "+item.gender;
  

  stud_add_title.innerText = "> Student Additional Details";
  stud_parent.innerText = "Aadhar Number :"+" "+item.parents;
  stud_contact.innerText = "Contact Number :"+" "+item.contact;
  stud_state.innerText = "State :"+" "+item.state;
  stud_caste.innerText = "Category :"+" "+item.caste;
  
  
  stud_image.append(image)
  stud_basic.append(stud_basic_title,stud_image,stud_name,stud_email,stud_pass,stud_gen);
  stud_add.append(stud_add_title,stud_parent,stud_contact,stud_state,stud_caste,);

  student.append(stud_basic,stud_add);

  return student;

}

admission.addEventListener("click", (event)=>{
  fetching(userUrl);
  displayUsers(userData);
})
// -----courses------

function displayCourses(data){
  main.innerHTML = "";

  let courseList = document.createElement("div");
  courseList.className = "courseList";
  
  data.forEach(item =>{
    let course = createCourse(item);
    courseList.append(course)
  })

  main.append(courseList);
}




function createCourse(item){

  let course = document.createElement("div");

  let course_img = document.createElement("div");
  let image = document.createElement("img");

  let course_body = document.createElement("div");
  let course_title = document.createElement("h2");
  let course_lectures = document.createElement("p");
  let course_tests = document.createElement("p");
  let course_practice = document.createElement("p");
  let course_mock = document.createElement("p");
  let course_price = document.createElement("p");
  let course_disprice = document.createElement("p");
  let course_dispercent = document.createElement("p");
  let course_link = document.createElement("a");
  let delete_link = document.createElement("button");


  course.className = "course";

  course_img.className = "course-img";
  image.alt = "product";
  
  course_body.className = "course-body";
  course_title.className = "course-title";
  course_lectures.className = "course-lectures";
  course_tests.className = "course-tests";
  course_price.className = "course-price";
  course_link.className = "course-link";

  delete_link.className = "course-button";



  image.src = item.image;
  course_title.innerText = item.courseName;
  course_lectures.innerText = "Live Lectures : "+" "+item.liveLectures;
  course_tests.innerText = "Weekly Tests : "+" "+item.weeklyTests;
  course_practice.innerText = "Practice Hours : "+" "+item.practiceHours;
  course_mock.innerText = "Mock Tests : "+" "+item.mockTests;
  course_price.innerText = "Original Price : "+" "+item.originalPrice;
  course_disprice.innerText = "Discounted Price : "+" "+item.discountedPrice;
  course_dispercent.innerText = "Discounted Price : "+" "+item.discountPercentage;
  course_link.innerText = "Edit";
  delete_link.innerText = "Delete";

  // delete_link.addEventListener("click", function(){

  //   fetch(`${baseServerURL}/products/${item.id}`,{
  //     method: "DELETE"
  //   })
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data);
  //     fetching(productURL);
  //   })
  //   .catch(err =>{
  //     console.log(err);
  //   })
  // });
  

  course_img.append(image);
  course_body.append(course_title,course_lectures,course_tests,course_price,course_disprice,course_dispercent,course_link,delete_link);

  course.append(course_img,course_body);

  return course;

  
}



admission.addEventListener("click", (event)=>{
  fetching(userUrl);
  displayUsers(userData);
})


addStudent.addEventListener("click", (event)=>{
  event.preventDefault()
  window.location.href="../Jahir/register.html"
  console.log("add student")
})


viewStudent.addEventListener("click", (event)=>{
  event.preventDefault()
  window.location.href="../Jahir/register.html"
  console.log("view student")
})


Teacher.addEventListener("click", (event)=>{
  event.preventDefault()
  main.innerHTML = "add teacher"
  console.log("add teacher")
})


addCourse.addEventListener("click", (event)=>{
  event.preventDefault()
  main.innerHTML = "add course"
  console.log("add courses")
})


viewCourses.addEventListener("click", (event)=>{
  console.log("heyy");
  fetching(courseUrl);
  displayCourses(courseData)
})


