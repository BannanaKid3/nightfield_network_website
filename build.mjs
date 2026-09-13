import { readFile, readdir, mkdir, writeFile } from 'node:fs/promises';
import { gunzipSync } from 'node:zlib';

const dir = new URL('./src/chunks/', import.meta.url);
const names = (await readdir(dir)).filter((name) => name.endsWith('.b64')).sort();
const encoded = (await Promise.all(names.map((name) => readFile(new URL(name, dir), 'utf8')))).join('');
const html = gunzipSync(Buffer.from(encoded, 'base64'));
await mkdir(new URL('./dist/', import.meta.url), { recursive: true });
await writeFile(new URL('./dist/index.html', import.meta.url), html);
