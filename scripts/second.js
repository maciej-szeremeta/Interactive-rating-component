const el = document.querySelector(".thanks__rating");
const rating = window.location.search.split("?rating=")[1];

el.innerText = " " + rating + " ";
