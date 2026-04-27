// 1. The Lesson Data (Web Design Topic)
const quizData = {
  question:
    "Which language is responsible for the 'Style' and 'Layout' of a webpage?",
  options: [
    "HTML (HyperText Markup Language)",
    "CSS (Cascading Style Sheets)",
    "JavaScript",
    "Python",
  ],
  correct: 1, // CSS is index 1
  explanation:
    "Correct! CSS is the 'paint and wallpaper' of the web. It controls colors, fonts, and layouts.",
};

// 2. Select Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultContainer = document.getElementById("result-container");
const resultMessage = document.getElementById("result-message");

// 3. Initialize Quiz
function loadQuiz() {
  questionEl.innerText = quizData.question;
  optionsEl.innerHTML = "";

  quizData.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.classList.add("option-btn");
    btn.onclick = () => checkAnswer(index, btn);
    optionsEl.appendChild(btn);
  });
}

// 4. Check Answer & Save Progress
function checkAnswer(selectedIndex, clickedBtn) {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((btn) => {
    btn.style.borderColor = "#dadce0";
    btn.style.backgroundColor = "white";
  });

  if (selectedIndex === quizData.correct) {
    clickedBtn.style.borderColor = "#34a853"; // Success Green
    clickedBtn.style.backgroundColor = "#e8f5e9";

    // SAVE PROGRESS: Tell the browser Module 1 is done
    localStorage.setItem("module1_completed", "true");

    showResult(true);
  } else {
    clickedBtn.style.borderColor = "#ea4335"; // Error Red
    clickedBtn.style.backgroundColor = "#fce8e6";
    showResult(false);
  }
}

// 5. Display Result
function showResult(isCorrect) {
  resultContainer.classList.remove("hidden");

  if (isCorrect) {
    resultMessage.innerHTML = `
            <div style="text-align: center;">
                <p style="color: #34a853; font-weight: bold; margin-bottom: 15px;">
                    🎉 ${quizData.explanation}
                </p>
                <a href="../index.html" class="btn-primary" style="text-decoration: none; display: inline-block;">
                    Finish & Return to Dashboard
                </a>
            </div>
        `;
  } else {
    resultMessage.innerHTML = `
            <p style="color: #ea4335; font-weight: bold;">
                Not quite! Remember: HTML is structure, CSS is style. Try again!
            </p>
        `;
  }
}

loadQuiz();
// ... (your existing data at the top)

function checkAnswer(selectedIndex, clickedBtn) {
  const allBtns = document.querySelectorAll(".option-btn");
  allBtns.forEach((btn) => {
    btn.style.border = "2px solid #dadce0";
    btn.style.background = "white";
  });

  if (selectedIndex === quizData.correct) {
    clickedBtn.style.borderColor = "#34a853";
    clickedBtn.style.backgroundColor = "#e8f5e9";
    clickedBtn.style.color = "#1b5e20";
    clickedBtn.style.fontWeight = "bold";

    localStorage.setItem("module1_completed", "true");
    showResult(true);
  } else {
    clickedBtn.style.borderColor = "#ea4335";
    clickedBtn.style.backgroundColor = "#fce8e6";
    showResult(false);
  }
}
