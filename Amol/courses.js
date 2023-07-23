let api = "http://localhost:3000/courses"
let mainsection = document.getElementById("mainsection")

async function datafetch() {
    try {
        let res = await fetch(api)
        let data = await res.json()
        display(data)
    }
    catch (err) {
        console.log(err)
    }
}
datafetch()


function display(data) {
    mainsection.innerHTML = ""

    data.forEach(e => {
        let card = document.createElement("div")
        card.setAttribute("id", "card")

        let course_image = document.createElement("div")
        course_image.setAttribute("id", "course-image")
        let img = document.createElement("img")
        img.setAttribute("src", `${e.image}`)
        course_image.append(img)

        let course_info = document.createElement("div")
        course_info.setAttribute("id", "course-info")
        let course_name = document.createElement("h2")
        course_name.setAttribute("id", "course-name")
        course_name.innerText = e.courseName

        let course_data = document.createElement("div")
        course_data.setAttribute("id", "course-data")

      
        let data_info = document.createElement("data-info")
        data_info.setAttribute("class", "data-info")
        let data_points = document.createElement("h4")
        data_points.setAttribute("class", "data-ponits")
        data_points.innerText = e.liveLectures
        let data_name = document.createElement("p")
        data_name.setAttribute("class", "data-name")
        data_name.innerText = "Live Lectures"
        data_info.append(data_points, data_name)
        course_data.append(data_info)

         data_info = document.createElement("data-info")
        data_info.setAttribute("class", "data-info")
         data_points = document.createElement("h4")
        data_points.setAttribute("class", "data-ponits")
        data_points.innerText = e.weeklyTests
         data_name = document.createElement("p")
        data_name.setAttribute("class", "data-name")
        data_name.innerText = "Weekly Tests"
        data_info.append(data_points, data_name)
        course_data.append(data_info)

         data_info = document.createElement("data-info")
        data_info.setAttribute("class", "data-info")
         data_points = document.createElement("h4")
        data_points.setAttribute("class", "data-ponits")
        data_points.innerText = e.practiceHours
         data_name = document.createElement("p")
        data_name.setAttribute("class", "data-name")
        data_name.innerText = "Practice"
        data_info.append(data_points, data_name)
        course_data.append(data_info)

         data_info = document.createElement("data-info")
        data_info.setAttribute("class", "data-info")
         data_points = document.createElement("h4")
        data_points.setAttribute("class", "data-ponits")
        data_points.innerText = e.mockTests
         data_name = document.createElement("p")
        data_name.setAttribute("class", "data-name")
        data_name.innerText = "Mock Tests"
        data_info.append(data_points, data_name)
        course_data.append(data_info)
        
        
        let price_bar=document.createElement("div")
        price_bar.setAttribute("id","price-bar")
        let price_div=document.createElement("div")
        price_div.setAttribute("id","price-div")
        let price_title=document.createElement("p")
        price_title.setAttribute("id","price-title")
        price_title.innerText="Special Discounted Price"
        let price_data=document.createElement("div")
        price_data.setAttribute("id","price-data")
         let price=document.createElement("h2")
         price.setAttribute("id","price")
         price.innerText=`${e.discountedPrice}`
         let mrp=document.createElement("h4")
         mrp.setAttribute("id","mrp")
         mrp.innerText=`${e.originalPrice}`
         let discount=document.createElement("h3")
         discount.setAttribute("id","discount")
         discount.innerText=`${e.discountPercentage}`

         price_data.append(price,mrp,discount)
         price_div.append(price_title,price_data)

         let explorebtn=document.createElement("button")
         explorebtn.setAttribute("id","explorebtn")
         explorebtn.innerText="Explore"
        
         explorebtn.addEventListener("click",function(){
            localStorage.setItem("id",JSON.stringify(e.id))
            console.log(e.id)
            window.location.href ="../Amol/course-details.html"
         })
         price_bar.append(price_div,explorebtn)
         course_info.append(course_name,course_data,price_bar)
         card.append(course_image,course_info)
         mainsection.append(card)
    });
}

