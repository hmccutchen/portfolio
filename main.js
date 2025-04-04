let input = document.getElementById("color-switch");

window.onload = function () {
  input.checked ? location.reload(true) : null;
};

toggleCheckBox = () => {
  let input = document.getElementById("color-switch");
  let pTags = document.querySelectorAll("p");
  let headerOne = document.querySelectorAll("h1");
  let headerTwo = document.querySelectorAll("h2");
  let navigation = document.querySelector(".navigation");
  let navigationLinks = document.querySelectorAll("a");
  let myName = document.getElementById("myName");
  let footer = document.querySelector(".footer");
  let cpyRight = document.querySelector(".footer-copyright");

  if (input.checked) {
    document.body.style.backgroundColor = "#1f1b21";
    navigation.style.backgroundColor = "#1f1b21";
    myName.style.color = "white";
    footer.style.backgroundColor = "#231c1c";
    cpyRight.style.color = "white";

    navigationLinks.forEach((a) => {
      a.style.color = "white";
    });

    pTags.forEach((p) => {
      p.style.color = "white";
    });
    headerOne.forEach((h) => {
      h.style.color = "white";
    });

    headerTwo.forEach((h) => {
      h.style.color = "white";
      h.style.borderBottom = "2px solid white";
    });
  } else if (input.checked === false) {
    document.body.style.backgroundColor = "white";
    navigation.style.backgroundColor = "#f7f5f5";
    myName.style.color = "black";
    footer.style.backgroundColor = "#f7f5f5";
    cpyRight.style.color = "black";

    navigationLinks.forEach((a) => {
      a.style.color = "black";
    });
    pTags.forEach((p) => {
      p.style.color = "black";
    });
    headerOne.forEach((h) => {
      h.style.color = "black";
    });

    headerTwo.forEach((h) => {
      h.style.color = "black";
      h.style.borderBottom = "2px solid black";
    });
  }
};
