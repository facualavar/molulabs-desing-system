import { useEffect, useRef } from 'react';
import { RowActions } from '@molulabs/ds';

const noop = () => {};
const actions = [
  { label: 'Ver detalle', icon: 'ti-eye', onClick: noop },
  { label: 'Duplicar', icon: 'ti-copy', onClick: noop },
  { divider: true },
  { label: 'Anular', icon: 'ti-trash', tone: 'danger' as const, onClick: noop },
];

// Opens the menu on mount so the card shows the actual list, not just the trigger.
export const Open = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => { ref.current?.querySelector('button')?.click(); }, []);
  return (
    <div ref={ref} style={{ height: 190, width: 300, display: 'flex', justifyContent: 'flex-end' }}>
      <RowActions actions={actions} />
    </div>
  );
};

export const Closed = () => (
  <div style={{ width: 300, display: 'flex', justifyContent: 'flex-end' }}>
    <RowActions actions={actions} label="Acciones del comprobante" />
  </div>
);
