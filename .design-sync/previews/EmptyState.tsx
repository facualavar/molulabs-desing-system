import { EmptyState, Button } from '@molulabs/ds';

export const NoData = () => (
  <EmptyState title="Todavía no hay remitos" icon="ti-truck-delivery"
    actions={<Button icon="ti-plus">Nuevo remito</Button>}>
    Los remitos que emitas desde una venta aparecen acá.
  </EmptyState>
);
export const NoResults = () => (
  <EmptyState title="Sin resultados" icon="ti-search-off">
    Ningún comprobante coincide con los filtros. Probá ampliar el período.
  </EmptyState>
);
