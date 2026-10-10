import { DonutChart } from '@molulabs/ds';

export const States = () => (
  <DonutChart total="$ 18.402.100" totalLabel="Facturado" segments={[
    { label: 'Emitidas', value: 62, display: '62', tone: 'ok' },
    { label: 'Borradores', value: 21, display: '21', tone: 'warn' },
    { label: 'Anuladas', value: 6, display: '6', tone: 'alert' },
  ]} />
);
export const Large = () => (
  <DonutChart size={160} thickness={22} total="84" totalLabel="Pedidos" segments={[
    { label: 'Entregados', value: 51, tone: 'chrome' },
    { label: 'En curso', value: 23, tone: 'leather' },
    { label: 'Pendientes', value: 10, tone: 'mut' },
  ]} />
);
