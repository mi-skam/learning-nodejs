import { strictEqual } from 'assert';
import asyncFunction from './index.js';

asyncFunction(true, 'Hello World').then((data) => {
  strictEqual(data, 'Hello World');
});
