import { copyFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
const output = new URL('dist/', root);
await mkdir(output, { recursive: true });
for (const file of ['index.html', 'style.css', 'favicon.svg']) {
  await copyFile(new URL(file, root), new URL(file, output));
}
console.log(`Statik dosyalar hazır: ${fileURLToPath(output)}`);
