import { AppBar, AppBarAction } from '@molulabs/ds';

export const OnChrome = () => (
  <div style={{ width: 390 }}>
    <AppBar title="Remito 0003-00004112" sub="Pendiente de entrega" onBack={() => {}}
      actions={<><AppBarAction icon="ti-search" label="Buscar" /><AppBarAction icon="ti-bell" label="Avisos" badge={3} /></>} />
  </div>
);
export const OnPaper = () => (
  <div style={{ width: 390 }}>
    <AppBar tone="paper" title="Clientes" actions={<AppBarAction tone="paper" icon="ti-plus" label="Nuevo cliente" />} />
  </div>
);
