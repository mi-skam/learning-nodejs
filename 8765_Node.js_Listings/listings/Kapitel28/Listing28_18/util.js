export function getInputAndOutputFiles() {
  const input = Deno.args.find((arg) => arg.startsWith('--input=')).substr(8);
  const output = Deno.args.find((arg) => arg.startsWith('--output=')).substr(9);

  console.log(`Input was: ${input}, Output was: ${output}`);

  return [input, output];
}

export async function fileExists(filename) {
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
