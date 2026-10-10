import { StatGrid } from '@molulabs/ds';

export const FromItems = () => (
  <StatGrid items={[
    { label: 'Facturado', value: '$ 18.402.100', detail: '+12% vs. agosto' },
    { label: 'Por cobrar', value: '$ 4.870.350', detail: '23 comprobantes' },
    { label: 'Vencido', value: '$ 912.000', detail: '5 clientes' },
  ]} />
);

export const Narrow = () => (
  <StatGrid min={180} items={[
    { label: 'Stock total', value: '84.200 kg' },
    { label: 'Depósitos', value: '6' },
  ]} />
);
