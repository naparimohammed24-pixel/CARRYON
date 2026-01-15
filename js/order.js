const form = document.getElementById("orderForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const order = Object.fromEntries(data.entries());

  console.log("New Order:", order);

  status.textContent = "✅ Order submitted! We will contact you shortly.";
  form.reset();
});
