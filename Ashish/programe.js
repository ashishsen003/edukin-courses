let main = document.getElementById("container")
let message = document.getElementById("message")

let arr = [
    {
    id:1,
    courseName: "French for Kids: Fun with Language",
    image: "https://img.freepik.com/free-photo/proud-little-boy-with-glasses-graduation-cap_1098-3424.jpg?w=900&t=st=1689840697~exp=1689841297~hmac=0017b098480295ee1f2a45b95dd14f030e84c0935c31e428644434017a01c11d",    
    coursestart: "Course starts in 28 July 2023",
    timing: "Timings Mon - Fri, 10AM - 2PM",
    teacher: "Teacher: Kanika Madaan",
    hours: 'Hours: 30 Hours',
    tests: 'Tests: 5',
    progress: 'Progress: 0%'

    }
]

fetchdata(`http://localhost:3000/courses_purchased`)
async function fetchdata(url){
    try{
        let res = await fetch(url)
        let data = await res.json()
        displaydata(data)
        console.log(data);

    } catch(error) {
        console.log(error);
    }
}

if(arr.length == 0){
    let msg = document.createElement("h1")
    msg.innerText = "You haven't applied for any course"
    message.append(msg)
} else {
    displaydata(arr)
}
function displaydata(data){

    let msg = document.createElement("h1")
    msg.innerText = "Courses you have applied for"
    message.append(msg)
    data.forEach(element => {

        let card = document.createElement("div")
        card.className = "card"

        let img_card = document.createElement("div")
        img_card.className = "img-card"
        let img = document.createElement("img")
        img.setAttribute("src",element.image)
        
        let card_details = document.createElement("div")
        card_details.className = "card-details"
        let coursename = document.createElement("h3")
        coursename.innerText = element.courseName

        let btn = document.createElement("button")
        btn.className = "view-btn"
        btn.setAttribute("id",'view-btn')
        btn.innerText = "View More"
        btn.addEventListener("click",(e)=>{displaydetails(e,element.id)})

        let less_btn = document.createElement("button")
        less_btn.className = "view-btn"
        less_btn.setAttribute("id",'less-btn')
        less_btn.innerText = "View Less"
        less_btn.addEventListener("click",(e)=>{viewlessfunc(e,element.id)})

        let viewmore = document.createElement("div")
        viewmore.className = "more"
        viewmore.setAttribute("id",element.id)

        let teacher = document.createElement("h4")
        teacher.innerText = element.teacher

        let hours = document.createElement("h4")
        hours.innerText = element.hours

        let tests = document.createElement("h4")
        tests.innerText = element.tests

        let progress = document.createElement("h4")
        progress.innerText = element.progress

        let coursestart = document.createElement("h4")
        coursestart.innerText = element.coursestart
        
        let timing = document.createElement("h4")
        timing.innerText = element.timing

        img_card.append(img)
        viewmore.append(coursestart,timing,teacher,hours,tests,progress)
        card_details.append(coursename,viewmore,btn,less_btn)
        card.append(img_card,card_details)

        main.append(card)
    });

}
let more_btn = document.getElementById("view-btn")
let less_btn = document.getElementById("less-btn")

function displaydetails(e,id){
    
    let item = document.getElementById(id)
    item.style.display = "block"
    console.log(item);
    more_btn.style.display = "none"
    less_btn.style.display = "block"
}

function viewlessfunc(e,id){
    let item = document.getElementById(id)
    item.style.display = "none"
    less_btn.style.display = "none"
    more_btn.style.display = "block"
}