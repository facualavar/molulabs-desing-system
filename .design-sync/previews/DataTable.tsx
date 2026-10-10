import { useState } from 'react';
import { DataTable, Card, Tag, EmptyState } from '@molulabs/ds';

const columns = [
  { label: 'Comprobante', mono: true },
  { label: 'Cliente' },
  { label: 'Fecha', mono: true, muted: true },
  { label: 'Importe', align: 'right' as const, mono: true },
];
const rows = [
  { id: 1, cells: ['FA-A 0003-00012841', { value: 'Agropecuaria Los Sauces', sub: 'CUIT 30-71234567-8' }, '02/09/2026', '$ 482.300,00'] },
  { id: 2, cells: ['FA-A 0003-00012842', { value: 'Cooperativa Río Seco', sub: 'CUIT 30-68901234-5' }, '04/09/2026', '$ 129.870,50'] },
  { id: 3, cells: ['NC-A 0003-00000318', { value: 'Estancia La Margarita', sub: 'CUIT 33-70456123-9' }, '09/09/2026', '$ -45.000,00'] },
  { id: 4, cells: ['FA-A 0003-00012843', { value: 'Molino San Jorge', sub: 'CUIT 30-50123987-2' }, '11/09/2026', '$ 703.180,25'] },
];

export const Default = () => (
  <Card title="Comprobantes" meta="4 resultados" pad={false}>
    <DataTable columns={columns} rows={rows} footer="Mostrando 4 de 4" footerTotal="$ 1.270.350,75" />
  </Card>
);

export const Selectable = () => {
  const [selected, setSelected] = useState<(string | number)[]>([2, 4]);
  return (
    <Card title="Comprobantes" meta={`${selected.length} seleccionados`} pad={false}>
      <DataTable columns={columns} rows={rows} selectable selected={selected} onSelectedChange={setSelected} />
    </Card>
  );
};

export const WithIconsAndTags = () => (
  <Card title="Estado de cobranza" pad={false}>
    <DataTable
      columns={[
        { label: '', icon: (r) => (r.tone === 'alert' ? 'ti-alert-octagon' : 'ti-circle-check') },
        { label: 'Cliente' },
        { label: 'Vencimiento', mono: true, muted: true },
        { label: 'Estado', align: 'right' },
      ]}
      rows={[
        { id: 1, tone: 'ok', cells: [null, 'Agropecuaria Los Sauces', '15/10/2026', <Tag tone="ok">Al día</Tag>] },
        { id: 2, tone: 'alert', cells: [null, 'Cooperativa Río Seco', '28/08/2026', <Tag tone="bad">Vencida</Tag>] },
      ]}
    />
  </Card>
);

export const Empty = () => (
  <Card title="Comprobantes" pad={false}>
    <DataTable columns={columns} rows={[]} empty={<EmptyState title="Sin comprobantes">Ajustá los filtros o cargá uno nuevo.</EmptyState>} />
  </Card>
);
