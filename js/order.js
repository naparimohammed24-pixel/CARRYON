const form = document.getElementById("orderForm");
const status = document.getElementById("status");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const data = new FormData(form);
  const order = Object.fromEntries(data.entries());

  const message = `
New Order - CARRYON
Name: ${order.name}
Phone: ${order.phone}
Item: ${order.item}
Pickup: ${order.pickup}
Delivery: ${order.delivery}
Note: ${order.note || "None"}
`;

  const encodedMessage = encodeURIComponent(message);

  const phoneNumber = "233257698275"; // NO +

  const whatsappURL = `https://wa.me/233257698275?text=${encodedMessage}`;

  location.href = whatsappURL;

  status.textContent = "✅ Order submitted! We will contact you shortly.";
  form.reset();
});
