import { TextInput } from '@molulabs/ds';

const w = { width: 320, display: 'grid', gap: 12 } as const;
const noop = () => {};

export const Default = () => (
  <div style={w}>
    <TextInput value="" onChange={noop} placeholder="Buscar cliente o CUIT" icon="ti-search" />
    <TextInput value="Cooperativa Río Seco" onChange={noop} />
  </div>
);

export const MonoAndStates = () => (
  <div style={w}>
    <TextInput value="30-68901234-5" onChange={noop} mono />
    <TextInput value="30-68901234-9" onChange={noop} mono invalid />
    <TextInput value="Bloqueado por contabilidad" onChange={noop} disabled />
  </div>
);
