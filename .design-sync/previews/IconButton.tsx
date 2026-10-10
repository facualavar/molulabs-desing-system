import { IconButton } from '@molulabs/ds';

export const OnLight = () => (
  <div style={{ display: 'flex', gap: 8 }}>
    <IconButton icon="ti-dots" label="Más acciones" />
    <IconButton icon="ti-edit" label="Editar" />
    <IconButton icon="ti-trash" label="Eliminar" />
    <IconButton icon="ti-x" label="Cerrar" size={24} />
  </div>
);

export const OnChrome = () => (
  <div style={{ display: 'flex', gap: 8, padding: 12, background: 'var(--chrome)', borderRadius: 6, width: 'fit-content' }}>
    <IconButton icon="ti-bell" label="Notificaciones" on="chrome" />
    <IconButton icon="ti-user-circle" label="Mi cuenta" on="chrome" />
  </div>
);
