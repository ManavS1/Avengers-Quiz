const correctAns = ["B", "B", "C", "B", "A"];
const form = document.querySelector(".quiz-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let score = 0;

  const userAns = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
    form.q5.value,
  ];

  for (let i = 0; i <= correctAns.length - 1; i++) {
    if (userAns[i] === correctAns[i]) {
      score = score + 10;
    }
  }

  const result = document.querySelector(".result");
  result.classList.remove("d-none");

  //   score animation
  let output = 0;
  let animationTimer = setInterval(() => {
    result.querySelector("span").textContent = output;
    if (output === score) {
      clearInterval(animationTimer);
    } else {
      output++;
    }
  }, 70);

  // Taking user to the top of the page
  scrollTo(0, 0);
});
