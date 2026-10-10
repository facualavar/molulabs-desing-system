import { Modal, ModalHeader, ModalBody } from '@molulabs/ds';

const frame = { position: 'relative', height: 220, width: 560, overflow: 'hidden' } as const;
export const TitleAndSubtitle = () => (
  <div style={frame}>
    <Modal open contained size="sm" onClose={() => {}}>
      <ModalHeader title="Remito 0003-00004112" subtitle="Entrega pendiente · Rosario" />
      <ModalBody><p style={{ margin: 0 }}>Detalle de la entrega.</p></ModalBody>
    </Modal>
  </div>
);
