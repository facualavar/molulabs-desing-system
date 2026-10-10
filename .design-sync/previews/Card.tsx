import { Card, KeyValueList, Tag, Button } from '@molulabs/ds';

export const WithTitle = () => (
  <Card title="Cuenta corriente" meta="Septiembre 2026" actions={<Button size="sm" tone="secondary" icon="ti-download">Exportar</Button>}>
    <p style={{ margin: 0 }}>Saldo al cierre del período: <strong>$ 1.284.350,00</strong></p>
    <p style={{ margin: '8px 0 0', color: 'var(--ink-2)' }}>14 comprobantes imputados, 2 pendientes de cobro.</p>
  </Card>
);

export const Bare = () => (
  <Card>
    <p style={{ margin: 0 }}>Sin encabezado: la superficie hairline sola.</p>
  </Card>
);

export const NoPadding = () => (
  <Card title="Condiciones" pad={false}>
    <div style={{ padding: 16, borderBottom: 'var(--border-hair-soft)' }}>Pago a 30 días fecha de factura</div>
    <div style={{ padding: 16 }}>Entrega en planta, flete a cargo del comprador</div>
  </Card>
);
