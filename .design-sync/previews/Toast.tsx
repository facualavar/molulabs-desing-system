import { Toast } from '@molulabs/ds';

const col = { display: 'grid', gap: 12, width: 380 } as const;
export const Tones = () => (
  <div style={col}>
    <Toast tone="success" title="Factura emitida" onClose={() => {}}>FA-A 0003-00012841 por $ 482.300,00.</Toast>
    <Toast tone="info" title="Sincronizando" onClose={() => {}}>Descargando padrón de ARCA.</Toast>
    <Toast tone="warning" title="Stock bajo" onClose={() => {}}>Quedan 800 kg de fertilizante en Rosario.</Toast>
    <Toast tone="danger" title="No se pudo emitir" action="Reintentar" onAction={() => {}} onClose={() => {}}>ARCA no respondió.</Toast>
  </div>
);
