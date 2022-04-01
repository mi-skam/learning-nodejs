import { getInputAndOutputFiles, fileExists } from './util.js';

const [input, output] = getInputAndOutputFiles();
const encoder = new TextEncoder();

if (await fileExists(input)) {
  const text = await Deno.readTextFile(`./${input}`);
  console.log(text);

  const encodedText = encoder.encode(text);
  Deno.writeFile(`./${output}`, encodedText);
}
