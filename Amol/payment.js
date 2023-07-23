const paymentForm = document.getElementById('paymentForm');
const cardNumberInput = document.getElementById('cardNumber');
const expiryDateInput = document.getElementById('expiryDate');
const cvvInput = document.getElementById('cvv');
let paymentid=localStorage.getItem("paymentid")
paymentid=JSON.parse(paymentid)

paymentForm.addEventListener('submit', (event) => {
  event.preventDefault();

  simulatePayment()
    .then(() => {
      alert('Payment Successful! 🎉');
      paymentForm.reset();
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
