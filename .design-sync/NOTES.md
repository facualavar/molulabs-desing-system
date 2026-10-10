# design-sync notes — @molulabs/ds

- No `dist/` and no build: the package ships JSX source. Sync runs with `--entry ./src/index.js`; the component list comes from `src/index.d.ts` (the root `package.json` now has `"types": "./src/index.d.ts"` — the converter reads that field, not `exports`).
- `@types/react` must be reachable from the package dir or props resolve to `any` (`[DTS_REACT]`). Staged deps live in `.ds-sync/`; the converter looks for `node_modules/@types/react` walking up from the repo, so a **temporary** symlink `node_modules -> .ds-sync/node_modules` is created for the run (gitignored). Remove it afterwards: the backoffice container mounts this dir and a stray `node_modules` could duplicate React there.
- Styling: `styles.css` is an `@import` list of `tokens/*.css`, whose `url()`s point at `../assets/fonts/`. `.design-sync/flatten-css.mjs` inlines it into `.design-sync/ds.css` (gitignored, `cssEntry`); **run it before every build** (`node .design-sync/flatten-css.mjs`). The converter then extracts the fonts into `fonts/` and tokens end up in `_ds_bundle.css`; `ds-bundle/tokens/` is empty by design.
- Build/driver command: `node .ds-sync/resync.mjs --config .design-sync/config.json --node-modules ./.ds-sync/node_modules --entry ./src/index.js --out ./ds-bundle [--remote .design-sync/.cache/remote-sync.json]`.
- Components need no provider (inline styles + CSS vars). Only `ToastProvider` for `useToasts()`.
- Overlay previews (Modal, ModalHeader, Dialog) use `contained` inside a positioned frame + `cardMode: single`. RowActions opens its menu on mount via a click in `useEffect`, trigger right-aligned so the right-anchored menu isn't clipped; viewport 360x340 or the menu flips upward and clips.
- Group `general` is auto-derived for components not matching a file name (Checkbox, RadioGroup, Switch, DateRange, ModalHeader/Body/Footer, ToastStack, SatelliteIcon, AppBarAction, FormActions, ListGroup, SheetAction).

## Known render warns
- `[RENDER_THIN] SatelliteIcon`: inline SVG with no text, legitimately paints no text.

## Preview coverage
Authored + graded good (29): Button, Card, DataTable, Field, IconButton, StatTile, StatGrid, Tag, TextInput, Textarea, NumberInput, Select, Checkbox, Choice, FilterBar, Pagination, TableToolbar, KeyValueList, RowActions, Modal, ModalHeader, Dialog, Toast, AlertBanner, EmptyState, DonutChart, AppBarAction, SatelliteIcon, MapMarker.
Floor card (not yet authored, 17): AppBar, BrandButton, FormActions, FormRow, Hero, ListGroup, ListRow, ModalBody, ModalFooter, NavItem, PageHeader, Section, SectionHeader, Sheet, SheetAction, ToastProvider, ToastStack. Author on any re-sync; grades carry forward.

## Re-sync risks
- Previews carry hardcoded Argentine sample data (CUITs, comprobantes) — fine unless prop shapes change; sanity-check against `.d.ts` after API edits.
- `ds.css` is generated from `styles.css`'s import list: a new token file added to `styles.css` is picked up only if `flatten-css.mjs` runs first.
- `mobile/` and `marketing/` were untracked in git at first sync (uncommitted work in the repo); they synced from the working tree.
- Anchor: first upload had no `_ds_sync.json` until close-out; `--remote` anchor from the project is expected on later syncs.
