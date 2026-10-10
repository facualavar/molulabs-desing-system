import { TableToolbar, TextInput, Select, Button } from '@molulabs/ds';

const noop = () => {};
export const Filters = () => (
  <TableToolbar
    filters={<><TextInput value="" onChange={noop} placeholder="Buscar cliente o CUIT" icon="ti-search" /><Select value="" onChange={noop} placeholder="Todas las sedes" options={['Rosario', 'Córdoba']} /></>}
    actions={<><Button tone="secondary" icon="ti-download">Exportar</Button><Button icon="ti-plus">Nuevo comprobante</Button></>}
  />
);

export const WithSelection = () => (
  <TableToolbar selection={3} onClearSelection={noop}
    selectionActions={<><Button tone="secondary" size="sm">Exportar</Button><Button tone="danger" size="sm" icon="ti-trash">Anular</Button></>} />
);
