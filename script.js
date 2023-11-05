const livesearch = () => {
  const input = document.querySelector("#search");
  const filter = input.value.toUpperCase();
  const list = document.querySelectorAll("card-title");
  list.forEach((el) => {
    const text = el.textContent.toUpperCase();
    el.style.display = text.includes(filter) ? "" : "none";
  });
};
