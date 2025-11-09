import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 8080;

const webDir = path.join(__dirname, '../../web');

app.use(express.static(webDir));
app.use((express.json()));

app.get('/alive', (req, res) => {
  res.json({ status: 'alive' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
