let id = localStorage.getItem("id")
let details = document.getElementById("details")
let info = document.getElementById("info")
let heading = document.getElementById("heading")
let main_heading = document.getElementById("main-heading")
let description = document.getElementById("description")
let course_details = document.getElementById("coursedetails")
let syllabus = document.getElementById("syllabus")
let startdate = document.getElementById("startdate")
let enddate = document.getElementById("enddate")
let duration = document.getElementById("duration")
let data_info1 = document.getElementById("data-info1")
let data_info2 = document.getElementById("data-info2")
let data_info3 = document.getElementById("data-info3")
let data_info4 = document.getElementById("data-info4")
let question1 = document.getElementById("question1")
let answer1 = document.getElementById("answer1")
let question2 = document.getElementById("question2")
let answer2 = document.getElementById("answer2")
let question3 = document.getElementById("question3")
let answer3 = document.getElementById("answer3")
let question4 = document.getElementById("question4")
let answer4 = document.getElementById("answer4")
let question5 = document.getElementById("question5")
let answer5 = document.getElementById("answer5")

let img = document.getElementById("img")
let price = document.getElementById("price")
let mrp = document.getElementById("mrp")
let discount = document.getElementById("discount")

id = JSON.parse(id)

let api = "http://localhost:3000/courses"

datafetch()
async function datafetch() {
    try {
        let res = await fetch(`${api}/${id}`)
        let data = await res.json()
        display(data)
    }
    catch (err) {
        console.log(err)
    }
}

function display(data) {
    main_heading.innerText = data.courseName
    description.innerText = data.description

    let i = 1
    data["syllabus"].forEach(function (e) {
        let p = document.createElement("p")
        p.innerText = `${i}. ${e}`
        syllabus.append(p)
        i++
    })

    startdate.innerText = `⭐Course Start Date: ${data.batchStartDate}`
    enddate.innerText = `⭐Course End Date: ${data.batchEndDate}`
    duration.innerText = `⭐Course Duration: ${data.courseDuration}`

    data_info1.h4 = data.liveLectures
    data_info2.h4 = data.weeklyTests
    data_info3.h4 = data.practiceHours
    data_info4.h4 = data.mockTests

    question1.innerText = `Q. ${data.faq1}`
    answer1.innerText = data.faq1ans

    question2.innerText = `Q. ${data.faq2}`
    answer2.innerText = data.faq2ans

    question3.innerText = `Q. ${data.faq3}`
    answer3.innerText = data.faq3ans

    question4.innerText = `Q. ${data.faq4}`
    answer4.innerText = data.faq4ans

    question5.innerText = `Q. ${data.faq5}`
    answer5.innerText = data.faq5ans


    img.src = data.image
    price.innerText = data.discountedPrice
    mrp.innerText = data.originalPrice
    discount.innerText = data.discountPercentage

}


let buynow=document.getElementById("buynow")

buynow.addEventListener("click",function(){
    window.location.href ="../Amol/payment.html" 
})