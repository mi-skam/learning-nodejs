import program from 'commander';

export default (levelDefault = 2, amountDefault = 4) => {
  program
    .version('1.0.0')
    .option(
      '-l, --level <n>',
      'Schwierigkeitsgrad der Aufgaben (1-3)',
      parseInt,
      levelDefault,
    )
    .option('-a, --amount <n>', 'Anzahl der Aufgaben', parseInt, amountDefault)
    .parse(process.argv);

  const options = program.opts();

  return {
    level: options.level,
    amount: options.amount,
  };
};
