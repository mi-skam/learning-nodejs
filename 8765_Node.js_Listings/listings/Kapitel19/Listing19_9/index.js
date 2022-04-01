import { readFile } from 'fs/promises';

const filename = 'config.json';

async function configParser(env) {
  const content = await readFile(filename, 'utf-8');
  const config = JSON.parse(content);
  if (config.hasOwnProperty(env)) {
    return config[env];
  } else {
    throw new Error(`Section ${env} does not exist`);
  }
}

configParser('production').then(
  (config) => {
    console.log('Production: ', config);
  },
  (err) => console.error(err),
);
configParser('development').then(
  (config) => {
    console.log('Development: ', config);
  },
  (err) => console.error(err),
);
configParser('test').catch((e) => {
  console.log(e);
});
