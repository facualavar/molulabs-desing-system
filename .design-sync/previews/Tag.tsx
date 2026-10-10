import { Tag } from '@molulabs/ds';

export const Tones = () => (
  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
    <Tag tone="ok">Autorizado</Tag>
    <Tag tone="warn">En cola</Tag>
    <Tag tone="bad">Rechazado</Tag>
    <Tag tone="mut">Borrador</Tag>
  </div>
);
