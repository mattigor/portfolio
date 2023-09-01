function changeBackgroundColor() {
  const headingHome = document.getElementById("heading-home");
  const occupationHome = document.getElementById("occupation-home");
  headingHome.style.backgroundColor = "#FFF";
  headingHome.style.color = "#222";
  occupationHome.style.backgroundColor = "#FFF";
  occupationHome.style.color = "#222";
}

setTimeout(changeBackgroundColor, 4000);
