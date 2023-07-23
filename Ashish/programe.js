// {
//     "courseName": "French for Kids: Fun with Language",
//     "image": "https://img.freepik.com/free-photo/proud-little-boy-with-glasses-graduation-cap_1098-3424.jpg?w=900&t=st=1689840697~exp=1689841297~hmac=0017b098480295ee1f2a45b95dd14f030e84c0935c31e428644434017a01c11d",
//     "liveLectures": "250+",
//     "weeklyTests": "40+",
//     "practiceHours": "1200+ Hrs",
//     "mockTests": "80+",
//     "discountedPrice": "₹2800",
//     "originalPrice": "₹3200",
//     "discountPercentage": "12% OFF"
//   },

// {
//     courseName: "French for Kids: Fun with Language",
//     image: "https://img.freepik.com/free-photo/proud-little-boy-with-glasses-graduation-cap_1098-3424.jpg?w=900&t=st=1689840697~exp=1689841297~hmac=0017b098480295ee1f2a45b95dd14f030e84c0935c31e428644434017a01c11d",    
//     coursestart: "Course starts in 28 July 2023",
//     timing: "Timings Mon - Fri, 10AM - 2PM"
//     },
//     {
//     courseName: "French for Kids: Fun with Language",
//     image: "https://img.freepik.com/free-photo/proud-little-boy-with-glasses-graduation-cap_1098-3424.jpg?w=900&t=st=1689840697~exp=1689841297~hmac=0017b098480295ee1f2a45b95dd14f030e84c0935c31e428644434017a01c11d",    
//     coursestart: "Course starts in 28 July 2023",
//     timing: "Timings Mon - Fri, 10AM - 2PM"

//     },
//     {
//     courseName: "French for Kids: Fun with Language",
//     image: "https://img.freepik.com/free-photo/proud-little-boy-with-glasses-graduation-cap_1098-3424.jpg?w=900&t=st=1689840697~exp=1689841297~hmac=0017b098480295ee1f2a45b95dd14f030e84c0935c31e428644434017a01c11d",    
//     coursestart: "Course starts in 28 July 2023",
//     timing: "Timings Mon - Fri, 10AM - 2PM"
//     }
let main = document.getElementById("container")
let message = document.getElementById("message")

let arr = [
    {
        courseName: "French for Kids: Fun with Language",
        image: "https://img.freepik.com/free-photo/proud-little-boy-with-glasses-graduation-cap_1098-3424.jpg?w=900&t=st=1689840697~exp=1689841297~hmac=0017b098480295ee1f2a45b95dd14f030e84c0935c31e428644434017a01c11d",    
        coursestart: "Course starts in 28 July 2023",
        timing: "Timings Mon - Fri, 10AM - 2PM"
        },
        {
        courseName: "French for Kids: Fun with Language",
        image: "https://img.freepik.com/free-photo/proud-little-boy-with-glasses-graduation-cap_1098-3424.jpg?w=900&t=st=1689840697~exp=1689841297~hmac=0017b098480295ee1f2a45b95dd14f030e84c0935c31e428644434017a01c11d",    
        coursestart: "Course starts in 28 July 2023",
        timing: "Timings Mon - Fri, 10AM - 2PM"
    
        },
        {
        courseName: "French for Kids: Fun with Language",
        image: "https://img.freepik.com/free-photo/proud-little-boy-with-glasses-graduation-cap_1098-3424.jpg?w=900&t=st=1689840697~exp=1689841297~hmac=0017b098480295ee1f2a45b95dd14f030e84c0935c31e428644434017a01c11d",    
        coursestart: "Course starts in 28 July 2023",
        timing: "Timings Mon - Fri, 10AM - 2PM"
        }
]

// teacher name
// watch hours
// test given
// course progress
// 


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
        img_card.append(img)
        
        let card_details = document.createElement("div")
        card_details.className = "card-details"
        let coursename = document.createElement("h3")
        coursename.innerText = element.courseName

        let coursestart = document.createElement("h5")
        coursestart.innerText = element.coursestart

        let timing = document.createElement("h5")
        timing.innerText = element.timing

        let btn = document.createElement("button")
        btn.className = "btn"
        btn.innerText = "View Details"

        card_details.append(coursename,coursestart,timing,btn)
        card.append(img_card,card_details)
        main.append(card)
    });

}