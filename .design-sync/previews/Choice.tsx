import { useState } from 'react';
import { Checkbox, RadioGroup, Switch } from '@molulabs/ds';

export const Checkboxes = () => {
  const [a, setA] = useState(true);
  const [b, setB] = useState(false);
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Checkbox checked={a} onChange={setA} label="Descontar stock al confirmar" hint="Se genera el movimiento de salida" />
      <Checkbox checked={b} onChange={setB} label="Enviar copia por mail" />
      <Checkbox checked={false} onChange={() => {}} label="Bloqueado" disabled />
    </div>
  );
};

export const Radios = () => {
  const [v, setV] = useState('fa');
  return (
    <RadioGroup value={v} onChange={setV} options={[
      { value: 'fa', label: 'Factura A', hint: 'Cliente Responsable Inscripto' },
      { value: 'fb', label: 'Factura B', hint: 'Consumidor final o Monotributo' },
    ]} />
  );
};

export const Switches = () => {
  const [on, setOn] = useState(true);
  return (
    <div style={{ display: 'grid', gap: 12 }}>
      <Switch checked={on} onChange={setOn} label="Notificar vencimientos" hint="Aviso 3 días antes" />
      <Switch checked={false} onChange={() => {}} label="Modo mantenimiento" />
    </div>
  );
};
