const form = document.getElementById("orderForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const order = Object.fromEntries(data.entries());

  console.log("New Order:", order);

  status.textContent = "✅ Order submitted! We will contact you shortly.";
  form.reset();
  const msg = `New Order:
Name: ${order.name}
Phone: ${order.phone}
Item: ${order.item}
Pickup: ${order.pickup}
Delivery: ${order.delivery}`;

window.open(`https://wa.me/233XXXXXXXXX?text=${encodeURIComponent(msg)}`);
});
