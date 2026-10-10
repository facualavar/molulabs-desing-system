import { KeyValueList } from '@molulabs/ds';

export const Detail = () => (
  <div style={{ width: 360 }}>
    <KeyValueList items={[
      { k: 'Cliente', v: 'Agropecuaria Los Sauces' },
      { k: 'CUIT', v: '30-71234567-8', mono: true },
      { k: 'Emisión', v: '02/09/2026', mono: true },
      { k: 'Condición de pago', v: '30 días FF' },
    ]} />
  </div>
);

export const Totals = () => (
  <div style={{ width: 360 }}>
    <KeyValueList items={[
      { k: 'Subtotal', v: '$ 398.595,04', mono: true },
      { k: 'IVA 21%', v: '$ 83.704,96', mono: true },
      { k: 'Total', v: '$ 482.300,00', mono: true, emphasis: true },
    ]} />
  </div>
);
