import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import init from '../wasm-test.js';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

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
