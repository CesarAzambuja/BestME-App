const questions = [
  "O que aprendi hoje?",
  "O que me deixou aborrecido, e como eu posso melhorar issso?",
  "O que me deixou feliz?",
  "Quantas pessoas eu ajudei hoje?",
];

const answers = [];

const ask = (index = 0) => {
  process.stdout.write("\n" + questions[index] + " > ");
};

ask();

process.stdin.on("data", (data) => {
  answers.push(data.toString().trim());
  if (answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

process.on("exit", () => {
  console.log(
    `
    Bacana César!
    
    Hoje vc aprendeu:
    ${answers[0]}.

    O que te aborreceu foi:
    ${answers[1]}.
    
    E isso te deixou feliz:
    ${answers[2]}.

    Vc hoje conseguiu  ajudar ${answers[3]} pessoa(s).

    Aproveite alguns minutos para refletir sobre o dia de hoje.

    e não esqueça amanhã tem mais`
  );
});
