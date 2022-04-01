import emoji from 'node-emoji';

export default (tasks) => {
  const correctCount = tasks.reduce((correctCount, task) => {
    if (task.input === task.result) {
      correctCount++;
    }
    return correctCount;
  }, 0);
  const percent = (correctCount * 100) / tasks.length;
  if (percent === 100) {
    return emoji.emojify(
      `:trophy: Glückwunsch, du hast alle ${tasks.length} Aufgaben richtig gelöst.`,
    );
  } else if (percent >= 50) {
    return emoji.emojify(
      `:sunglasses: Sehr gut, du hast ${correctCount} von  ${tasks.length} Aufgaben richtig gelöst.`,
    );
  } else if (percent >= 1) {
    return emoji.emojify(
      `:cry: Du hast ${correctCount} von  ${tasks.length} Aufgaben richtig gelöst, das kannst du besser.`,
    );
  } else {
    return emoji.emojify(
      `:skull_and_crossbones: du hast alle ${tasks.length} Aufgaben falsch beantwortet.`,
    );
  }
};
