import { copyFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const projectRoot = join(root, '..');

copyFileSync(
  join(projectRoot, 'index.source.html'),
  join(projectRoot, 'index.html')
);
