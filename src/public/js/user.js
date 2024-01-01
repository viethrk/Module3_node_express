document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  fetch("http://localhost:8080/user/api/number", {
    headers: {
      "Content-type": "text/html",
    },
  })
    .then((data) => {
      return data.text();
    })
    .then((data) => {
      document.getElementById("number-render").innerHTML = data;
    });
};
