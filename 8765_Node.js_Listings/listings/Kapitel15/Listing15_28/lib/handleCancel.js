export default (rl, tasks) => {
  rl.on('SIGINT', () => {
    const solvedCount = tasks.reduce((solvedCount, task) => {
      if (task.input !== '') {
        solvedCount++;
      }
      return solvedCount;
    }, 0);
    console.log(
      `\nSchade dass du schon gehen willst, du hast doch erst ${solvedCount} 
von ${tasks.length} Aufgaben gelöst.`,
    );
    rl.close();
  });
};
