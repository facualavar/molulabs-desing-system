// Inlines styles.css's @import closure into .design-sync/ds.css (cssEntry).
// Run before every converter build. Relative url()s stay valid because
// ds.css lives one level below the repo root, like tokens/.
import { readFileSync, writeFileSync } from 'node:fs';
const root = new URL('../', import.meta.url);
const css = readFileSync(new URL('styles.css', root), 'utf8');
const out = css.replace(/@import url\("([^"]+)"\);?/g, (_, p) => `/* ${p} */\n` + readFileSync(new URL(p, root), 'utf8'));
writeFileSync(new URL('ds.css', new URL('.design-sync/', root)), out);
console.log('ds.css', out.length, 'bytes');
