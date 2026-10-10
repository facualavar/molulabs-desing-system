# Molulabs Design System ("Campo") — conventions

Spanish-language operations UI (comprobantes, remitos, CUIT, sedes). Components are React and **styled with inline styles that read CSS custom properties** — there are no CSS classes to learn. Everything depends on the tokens in `styles.css`.

## Setup
- Load `styles.css` (it imports `fonts/fonts.css`, which ships IBM Plex Sans/Mono and the Tabler icon font, then `_ds_bundle.css`). Without it components render unstyled, in the wrong font, with no icons.
- Components are on `window.MolulabsDS.*`. No theme provider is needed. The one exception is toasts: wrap the app once in `<ToastProvider>` and call `useToasts().push(tone, title, msg)`; bare `<Toast>` / `<ToastStack>` are only for static layouts.
- Icons are Tabler webfont classes passed as strings: `icon="ti-plus"`, `ti-search`, `ti-download`, `ti-trash`. Use `<i className="ti ti-check" />` for your own glue.
- Theme and density are attributes on any ancestor: `data-theme="carbon" | "senal"` (default = green "campo"), `data-density="compact" | "comfortable" | "touch"`.

## Styling idiom: `var(--token)`
Never hardcode colours, sizes or fonts in your own layout glue; use tokens (all defined in `_ds_bundle.css`, imported by `styles.css` — read it before styling):
- Ink/surfaces: `--ink`, `--ink-2`, `--ink-3` (text, strong to muted), `--page`, `--card`, `--zebra`, `--line`, `--line-soft`, `--chrome` (the green field, primary action), `--leather` (accent).
- State colours: `--ok`, `--warn`, `--alert`, `--mut`. Only these four carry state; there is no categorical palette.
- Type: `--sans`, `--mono` (codes, CUITs, amounts, dates), `--text-sm|base|body|lg|xl|2xl|stat`, `--weight-medium|semibold`.
- Space/shape: `--space-1..12`, `--pad-card`, `--r`, `--r-sm`, `--border-hair`, `--border-hair-soft`, `--shadow-menu`, `--scrim`.
- Pattern (`--*` = any token above): `style={{ padding: 'var(--pad-card)', border: 'var(--border-hair)', borderRadius: 'var(--r)', color: 'var(--ink-2)' }}`.

## Composition rules
- One primary `Button` (tone default) per view; others `tone="secondary"`/`"ghost"`; destructive `tone="danger"` confirmed with `Dialog`.
- Every form control sits in a `Field` (label/hint/error). Money, quantities and codes use `NumberInput` / `TextInput mono`.
- Lists: `TableToolbar` above a `Card pad={false}` holding `DataTable` + `Pagination`; empty state via `DataTable empty={<EmptyState/>}`.
- Row status is a `Tag` (`ok|warn|bad|mut`); KPI figures are `StatGrid` of `StatTile`.
- Overlays: `Modal` (+ `ModalHeader/ModalBody/ModalFooter`) for tasks, `Dialog` for irreversible confirmation. Inside a preview frame or phone mock pass `contained`.

## Where the truth lives
`styles.css` → `_ds_bundle.css` (every token name, theme and density override), then per component `components/<group>/<Name>/<Name>.d.ts` (props) and `<Name>.prompt.md` (usage). Groups: core, forms, data, feedback, navigation, charts, mobile, marketing, integrations.

## Example
```jsx
const { Card, DataTable, TableToolbar, TextInput, Button, Tag } = window.MolulabsDS;
<div style={{ display: 'grid', gap: 'var(--gap-stack)' }}>
  <TableToolbar
    filters={<TextInput value="" onChange={() => {}} placeholder="Buscar cliente o CUIT" icon="ti-search" />}
    actions={<Button icon="ti-plus">Nuevo comprobante</Button>} />
  <Card title="Comprobantes" meta="2 resultados" pad={false}>
    <DataTable columns={[{ label: 'Comprobante', mono: true }, { label: 'Cliente' }, { label: 'Estado', align: 'right' }]}
      rows={[{ id: 1, cells: ['FA-A 0003-00012841', 'Agropecuaria Los Sauces', <Tag tone="ok">Autorizado</Tag>] }]} />
  </Card>
</div>
```
