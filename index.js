//circle logo is home link
function home() {
  window.location.href = "/index.html";
}

//Get in touch takes user to Contact page
const mainBtn = document.querySelector(".btn-main");
mainBtn.addEventListener('click', function (e) {
  window.location.href= "/contact.html"
});