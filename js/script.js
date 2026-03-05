function toggleTheme() {
  const body = document.body;

  if (body.style.background === "black") {
    body.style.background = "#f4f6f9";
    body.style.color = "#333";
  } else {
    body.style.background = "black";
    body.style.color = "white";
  }
}
