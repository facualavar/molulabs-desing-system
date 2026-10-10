import { useState } from 'react';
import { FilterBar, Button } from '@molulabs/ds';

export const Default = () => {
  const [i, setI] = useState(1);
  return <FilterBar filters={['Hoy', 'Semana', 'Mes', 'Pendientes']} value={i} onChange={setI} />;
};

export const WithActions = () => {
  const [i, setI] = useState(0);
  return (
    <FilterBar filters={['Todos', 'Emitidos', 'Borradores', 'Anulados']} value={i} onChange={setI}
      actions={<><Button tone="secondary" size="sm" icon="ti-download">Exportar</Button><Button size="sm" icon="ti-plus">Nuevo</Button></>} />
  );
};
