window.onload = function () {
  const modules = [
    { id: 1, key: "module1_completed", page: "quiz.html" },
    { id: 2, key: "module2_completed", page: "module2.html" },
    { id: 3, key: "module3_completed", page: "module3.html" },
    { id: 4, key: "module4_completed", page: "module4.html" },
    { id: 5, key: "module5_completed", page: "module5.html" },
  ];

  let doneCount = 0;

  modules.forEach((mod, index) => {
    const isDone = localStorage.getItem(mod.key) === "true";
    const card = document.getElementById(`module-${mod.id}`);
    const btn = document.getElementById(`m${mod.id}-btn`);

    if (isDone) {
      doneCount++;
      btn.innerText = "Review";
      btn.className = "btn-primary";
      btn.disabled = false;
      btn.onclick = () => (window.location.href = `courses/${mod.page}`);

      // Unlock next
      if (modules[index + 1]) {
        const nextBtn = document.getElementById(
          `m${modules[index + 1].id}-btn`,
        );
        nextBtn.innerText = "Start";
        nextBtn.className = "btn-primary";
        nextBtn.disabled = false;
        nextBtn.onclick = () =>
          (window.location.href = `courses/${modules[index + 1].page}`);
      }
    }
  });

  document.getElementById("fill").style.width = (doneCount / 5) * 100 + "%";
  document.getElementById("progress-percent").innerText =
    Math.round((doneCount / 5) * 100) + "%";
};
