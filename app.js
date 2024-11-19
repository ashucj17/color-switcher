const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (event) {
  event.addEventListener("click", function (e) {
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }

    switch (e.target.id) {
      case "white":
        body.style.backgroundColor = "white";
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        break;
      default:
        console.log("Executing if statement");
    }
  });
});
