var maindiv = document.querySelector("#catagories");
var msg = document.querySelector(".msg");
msg.classList.add("heading");
maindiv.addEventListener("click", (e) => {
  msg.innerHTML = "";
  msg.classList.add("loader");
  setTimeout(() => {
    msg.classList.remove("loader");
    msg.innerHTML = e.target.id + " is clicked";
    console.log(e.target.id, "is clicked");
  }, 1000);
});
