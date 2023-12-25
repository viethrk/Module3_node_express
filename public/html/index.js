const getData = async () => {
  const response = await fetch("http://localhost:8080/api/v1/question");
  const questions = await response.json();
  const index = Math.round(Math.random() * (questions.length - 1 - 0) + 0);

  document.getElementById("question-name").innerHTML = questions[index].content;
};

getData();
