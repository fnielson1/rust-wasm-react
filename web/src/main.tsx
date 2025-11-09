import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import init from '../wasm_test';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const iterations = 9000000;
async function run() {
  await init();
  // Run WASM stress test in a Web Worker
  const worker = new Worker('./src/wasm-worker.ts', { type: 'module' });
  worker.postMessage({ iterations: iterations });
  worker.onmessage = (e) => {
    console.log('Worker:', e.data);
  };
  // JS stress test runs on main thread
  jsStressTest(iterations);
}

function jsStressTest(iterations: number) {
  let me = 0;
  const start = Date.now();
  for (let i = 1; i <= iterations; i++) {
    me = Math.log(Math.log(i) / 2);
  }
  console.log(`JS Stress test completed: ${me}`);
  const end = Date.now();
  const elapsed = end - start;
  console.log(`JS Stress test took ${elapsed} ms`);
}
run();
