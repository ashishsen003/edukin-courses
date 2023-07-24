let arr = [ "https://healthpolicy.usc.edu/wp-content/uploads/2021/04/iStock-186560737-1024x683.jpg",
            "https://images.theconversation.com/files/140681/original/image-20161006-20132-1orr3zz.jpg?ixlib=rb-1.1.0&rect=0%2C836%2C5751%2C2793&q=45&auto=format&w=1356&h=668&fit=crop",
            "https://epe.brightspotcdn.com/dims4/default/d02fd42/2147483647/strip/true/crop/3406x2311+0+0/resize/840x570!/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.amazonaws.com%2F53%2F66%2Fb17323e84e668e02e25d5b4a7a93%2Fteacher-students-classroom.jpg",
            "https://www.discoverypoint.com/wp-content/uploads/2018/08/preschool-hero-image.jpg",
            "https://www.chickyolive.com/wp-content/uploads/2020/12/Helping-your-Child-Adjust-to-School-Life.jpg"
        ]


let main = document.querySelector("#slide-div")

let count = 0

setInterval(() =>{
    let img = document.createElement("img");
    img.setAttribute("src",arr[count]);
    img.className = "slide-image"
    main.innerHTML = null;
    main.append(img);
    count++;
    if(count == arr.length){
        count=0;
    }

},2000)



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