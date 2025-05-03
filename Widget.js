document.addEventListener("DOMContentLoaded", function () {
  const widget = document.createElement("div");
  widget.id = "fixmyhive-widget";
  widget.innerHTML = `
    <a href="tel:+97477839040" class="call-now">Call Now</a>
    <a href="https://wa.me/97477839040" class="whatsapp" target="_blank">WhatsApp</a>
  `;
  document.body.appendChild(widget);

  const style = document.createElement("style");
  style.innerHTML = `
    #fixmyhive-widget {
      position: fixed;
      bottom: 20px;
      right: 20px;
      z-index: 9999;
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-family: sans-serif;
    }
    #fixmyhive-widget a {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 16px;
      border-radius: 30px;
      font-weight: bold;
      text-decoration: none;
      color: white;
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
      transition: background-color 0.3s;
    }
    .call-now {
      background-color: orange;
    }
    .whatsapp {
      background-color: darkorange;
    }
    .call-now:hover,
    .whatsapp:hover {
      opacity: 0.85;
    }
  `;
  document.head.appendChild(style);
});
