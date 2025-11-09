You need to run vite from the `web/` directory.
```bash
cd web
npm run dev
```

Then open your browser to `http://localhost:5173`.

If you want the webserver to run, you need to run.
```bash
cd web
npm run dev
```

Finally, to compile the wasm files, you need to run the following command from the root directory:
```bash
cargo make wasm-watch
```

For production builds, you can run:
```bash
cargo make wasm-release
```
