import { MapMarker } from '@molulabs/ds';

const row = { display: 'flex', gap: 24, alignItems: 'flex-end', padding: 16 } as const;
export const Tones = () => (
  <div style={row}>
    <MapMarker label="Lote 12" />
    <MapMarker tone="ok" label="Lote 14" />
    <MapMarker tone="warn" label="Lote 7" />
    <MapMarker tone="alert" label="Lote 3" />
  </div>
);
export const SelectedAndCluster = () => (
  <div style={{ ...row, background: '#5b6b4f', borderRadius: 6 }}>
    <MapMarker selected label="Lote 12" />
    <MapMarker count={14} label="14 lotes" />
  </div>
);
