import { Dialog } from '@molulabs/ds';

const frame = { position: 'relative', height: 300, width: 560, overflow: 'hidden' } as const;
export const Confirm = () => (
  <div style={frame}>
    <Dialog open contained title="¿Emitir factura A por $ 482.300,00?" confirmLabel="Emitir" cancelLabel="Volver"
      note="Solo se puede anular con nota de crédito.">
      Se emite a Agropecuaria Los Sauces (CUIT 30-71234567-8) con IVA 21%.
    </Dialog>
  </div>
);
export const Danger = () => (
  <div style={frame}>
    <Dialog open contained tone="danger" title="¿Anular el remito 0003-00004112?" confirmLabel="Anular" cancelLabel="Conservar"
      note="El stock vuelve al depósito de origen.">
      Se revierte la salida de 12.500 kg de soja.
    </Dialog>
  </div>
);
