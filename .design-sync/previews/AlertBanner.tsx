import { AlertBanner } from '@molulabs/ds';

const col = { display: 'grid', gap: 12, width: 560 } as const;
export const Tones = () => (
  <div style={col}>
    <AlertBanner title="3 comprobantes rechazados por ARCA" action="Abrir bandeja" onAction={() => {}}>Corregí los datos del receptor y reenviá.</AlertBanner>
    <AlertBanner tone="warning" title="El certificado vence en 9 días">Renovalo antes del 14/10 para seguir emitiendo.</AlertBanner>
    <AlertBanner tone="success" title="Libro IVA presentado">Septiembre 2026 quedó cerrado.</AlertBanner>
    <AlertBanner tone="info" title="Mantenimiento programado">El sábado de 02:00 a 04:00 no se podrá emitir.</AlertBanner>
  </div>
);
