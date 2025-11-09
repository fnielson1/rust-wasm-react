import init, { run_stress_test } from '../wasm_test';

self.onmessage = async function (e: MessageEvent<{ iterations: number }>) {
  const {iterations} = e.data;
  await init();
  self.postMessage('WASM initialized');
  run_stress_test(iterations);
  self.postMessage('WASM stress test done');
};
