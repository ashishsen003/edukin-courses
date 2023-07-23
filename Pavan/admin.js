
let courseUrl = "http://localhost:3000/courses"

var main = document.querySelector("#content")

let admission = document.querySelector("#admission");
let addStudent = document.querySelector("#addStudent");
let viewStudent = document.querySelector("#viewStudent");
let Teacher = document.querySelector("#Teacher");
// let viewTeacher = document.querySelector("#viewTeacher");
let addCourse = document.querySelector("#addCourse");
let viewCourses = document.querySelector("#viewCourses");


admission.addEventListener("click", (event)=>{
  event.preventDefault()
  main.innerHTML = "admission"
  console.log("admission")
})


addStudent.addEventListener("click", (event)=>{
  event.preventDefault()
  main.innerHTML = "add student"
  console.log("add student")
})


viewStudent.addEventListener("click", (event)=>{
  event.preventDefault()
  main.innerHTML = "view student"
  console.log("view student")
})


Teacher.addEventListener("click", (event)=>{
  event.preventDefault()
  main.innerHTML = "add teacher"
  console.log("add teacher")
})


// viewTeacher.addEventListener("click", (event)=>{
//   event.preventDefault()
//   main.innerHTML = "view teacher"
//   console.log("view teachers")
// })


addCourse.addEventListener("click", (event)=>{
  event.preventDefault()
  main.innerHTML = "add course"
  console.log("add courses")
})


viewCourses.addEventListener("click", ()=>{
  event.preventDefault()
  main.innerHTML = "view courses"
  console.log("view courses")
})

