const paymentForm = document.getElementById('paymentForm');
const cardNumberInput = document.getElementById('cardNumber');
const expiryDateInput = document.getElementById('expiryDate');
const cvvInput = document.getElementById('cvv');
let paymentid = localStorage.getItem("paymentid")
paymentid = JSON.parse(paymentid)
let api = "https://mock-api-og1t.onrender.com/courses"
let apipost = "https://mock-api-og1t.onrender.com/courses_purchased"


paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  simulatePayment()
    .then(() => {
      alert('Payment Successful! 🎉');
      paymentForm.reset();

      purchasecourse(api,paymentid)
      window.location.href = "../Ashish/programe.html"
    })
    .catch((error) => {
      alert('Payment Failed. Please try again.');
    });
});

function simulatePayment() {
  return new Promise((resolve, reject) => {
    // Simulate a 2-second delay to mimic payment processing.
    setTimeout(() => {
      const randomNum = Math.random();
      if (randomNum >= 0.5) {
        resolve(); // Payment succeeded.
      } else {
        reject(); // Payment failed.
      }
    }, 2000);
  });
}




let register = document.getElementById("register");
let logout = document.getElementById("logout");


fetch("https://mock-api-og1t.onrender.com/afterLogin/")
  .then(res => {
    return res.json();
  }).then(data => {
    displayName(data[0]);

  }).catch(err => {
    console.log(err);
  })

let id1;
function displayName(data) {
  if (data != null) {
    let name = data.name;
    name = name.split(" ");
    id1 = data.id;
    register.innerText = name[0];
    logout.style.display = "block"

  }
  else {
    register.innerText = "Login"
    logout.style.display = "none"
  }
}

logout.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(`https://mock-api-og1t.onrender.com/afterLogin/${id1}`, {
    method: "DELETE"
  })
    .then(res => {
      return res.json();
    }).then(data => {
      // console.log(data);
      displayName(null)
    }).catch(err => {
      console.log(err);
    })
})





async function purchasecourse(url, id) {
  try {
    let res = await fetch(`${url}/${id}`)
    let data=await res.json()
   newcourse(apipost,data)
  }
  catch (err) {
    console.log(err)
  }
}

async function newcourse(url,obj){
  try{
     let res=await fetch(url,{
      method:"POST",
      body:JSON.stringify({obj}),
      headers:{
        "Content-type":"application/json"
      }
     })
  }
  catch(err){
    console.log(err)
  }
}