import { useState } from 'react';
import { Checkbox } from '@molulabs/ds';

export const States = () => {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  return (
    <div style={{ display: 'grid', gap: 12, width: 320 }}>
      <Checkbox checked={a} onChange={setA} label="Descontar stock al confirmar" hint="Se genera el movimiento de salida" />
      <Checkbox checked={b} onChange={setB} label="Enviar copia por mail al cliente" />
      <Checkbox checked={false} onChange={() => {}} label="Requiere autorización" disabled />
    </div>
  );
};
