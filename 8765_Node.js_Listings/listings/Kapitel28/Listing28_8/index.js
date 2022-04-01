function getInputAndOutputFiles() {
  const input = Deno.args.find((arg) => arg.startsWith('--input=')).substr(8);
  const output = Deno.args.find((arg) => arg.startsWith('--output=')).substr(9);

  console.log(`Input was: ${input}, Output was: ${output}`);

  return [input, output];
}

const [input, output] = getInputAndOutputFiles();
