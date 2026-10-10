import { Select } from '@molulabs/ds';

const noop = () => {};
export const Default = () => (
  <div style={{ width: 280, display: 'grid', gap: 12 }}>
    <Select value="" onChange={noop} placeholder="Elegir sede" options={['Rosario', 'Córdoba', 'Bahía Blanca']} />
    <Select value="ri" onChange={noop} options={[{ value: 'ri', label: 'Responsable Inscripto' }, { value: 'mono', label: 'Monotributo' }]} />
  </div>
);
export const States = () => (
  <div style={{ width: 280, display: 'grid', gap: 12 }}>
    <Select value="" onChange={noop} placeholder="Elegir depósito" options={['Central', 'Norte']} invalid />
    <Select value="Central" onChange={noop} options={['Central', 'Norte']} disabled />
  </div>
);
