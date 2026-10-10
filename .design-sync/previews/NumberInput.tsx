import { NumberInput } from '@molulabs/ds';

const noop = () => {};
export const Units = () => (
  <div style={{ width: 240, display: 'grid', gap: 12 }}>
    <NumberInput value="12500" onChange={noop} unit="kg" />
    <NumberInput value="482300" onChange={noop} prefix="$" />
    <NumberInput value="21" onChange={noop} unit="%" />
  </div>
);
export const States = () => (
  <div style={{ width: 240, display: 'grid', gap: 12 }}>
    <NumberInput value="1284350" onChange={noop} prefix="$" readOnly />
    <NumberInput value="-3" onChange={noop} unit="u." invalid />
    <NumberInput value="80" onChange={noop} unit="bolsas" disabled />
  </div>
);
