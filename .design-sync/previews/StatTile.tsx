import { StatTile } from '@molulabs/ds';

export const Default = () => (
  <div style={{ width: 280 }}>
    <StatTile label="Facturado en septiembre" value="$ 18.402.100" detail="+12% vs. agosto" />
  </div>
);

export const NoDetail = () => (
  <div style={{ width: 280 }}>
    <StatTile label="Comprobantes emitidos" value="1.284" />
  </div>
);
