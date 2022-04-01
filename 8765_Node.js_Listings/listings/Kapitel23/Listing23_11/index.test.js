import { rejects } from 'assert';
import asyncFunction from './index.js';

rejects(() => asyncFunction(false, 'Fail!'));
