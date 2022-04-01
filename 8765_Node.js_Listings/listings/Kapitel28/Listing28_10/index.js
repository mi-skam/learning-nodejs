function getInputAndOutputFiles() {
  const input = Deno.args.find((arg) => arg.startsWith('--input=')).substr(8);
  const output = Deno.args.find((arg) => arg.startsWith('--output=')).substr(9);

  console.log(`Input was: ${input}, Output was: ${output}`);

  return [input, output];
}

const [input, output] = getInputAndOutputFiles();

async function fileExists(filename) {
  try {
    await Deno.stat(`./${filename}`);
    return true;
  } catch (error) {
    if (error instanceof Deno.errors.NotFound) {
      return false;
    }
    throw error;
  }
}

const decoder = new TextDecoder();

if (await fileExists(input)) {
  const fileContents = await Deno.readFile(`./${input}`);
  const text = decoder.decode(fileContents);
  console.log(text);
}
