import init, { run_stress_test } from './wasm-test.js';

self.onmessage = async function (e) {
  const {iterations} = e.data;
  await init();
  self.postMessage('WASM initialized');
  run_stress_test(iterations);
  self.postMessage('WASM stress test done');
};
