import { Textarea } from '@molulabs/ds';

const noop = () => {};
export const Default = () => (
  <div style={{ width: 360 }}>
    <Textarea value="Retira el transportista Gómez el viernes por la mañana." onChange={noop} />
  </div>
);
export const EmptyAndInvalid = () => (
  <div style={{ width: 360, display: 'grid', gap: 12 }}>
    <Textarea value="" onChange={noop} placeholder="Motivo de anulación" rows={2} />
    <Textarea value="" onChange={noop} placeholder="Motivo obligatorio" invalid rows={2} />
  </div>
);
