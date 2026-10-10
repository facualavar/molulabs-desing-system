import { Button } from '@molulabs/ds';

const row = { display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' } as const;

export const Tones = () => (
  <div style={row}>
    <Button icon="ti-plus">Nuevo comprobante</Button>
    <Button tone="secondary">Exportar</Button>
    <Button tone="ghost">Cancelar</Button>
    <Button tone="danger" icon="ti-trash">Anular</Button>
  </div>
);

export const Sizes = () => (
  <div style={row}>
    <Button size="lg" icon="ti-check">Confirmar pedido</Button>
    <Button size="md" icon="ti-check">Confirmar pedido</Button>
    <Button size="sm" tone="secondary" icon="ti-filter">Filtrar</Button>
  </div>
);

export const Disabled = () => (
  <div style={row}>
    <Button disabled>Guardar cambios</Button>
    <Button tone="secondary" disabled>Descargar PDF</Button>
  </div>
);

export const AsLink = () => (
  <Button tone="secondary" href="#remitos" icon="ti-arrow-right">Ver remitos</Button>
);
