import { Modal, ModalHeader, ModalBody, ModalFooter, Button, KeyValueList } from '@molulabs/ds';

const frame = { position: 'relative', height: 420, width: 760, overflow: 'hidden', background: 'var(--paper, #f4f3ee)' } as const;

export const Detail = () => (
  <div style={frame}>
    <Modal open contained size="md" onClose={() => {}}>
      <ModalHeader title="Factura A 0003-00012841" subtitle="Agropecuaria Los Sauces" />
      <ModalBody>
        <KeyValueList items={[
          { k: 'CUIT', v: '30-71234567-8', mono: true },
          { k: 'Emisión', v: '02/09/2026', mono: true },
          { k: 'Total', v: '$ 482.300,00', mono: true, emphasis: true },
        ]} />
      </ModalBody>
      <ModalFooter note="Autorizado por ARCA el 02/09">
        <Button tone="secondary">Descargar PDF</Button>
        <Button>Reenviar por mail</Button>
      </ModalFooter>
    </Modal>
  </div>
);

export const Small = () => (
  <div style={{ ...frame, height: 300 }}>
    <Modal open contained size="sm" onClose={() => {}}>
      <ModalHeader title="Nuevo depósito" />
      <ModalBody><p style={{ margin: 0 }}>Completá el nombre y la sede del depósito.</p></ModalBody>
      <ModalFooter><Button tone="ghost">Cancelar</Button><Button>Crear</Button></ModalFooter>
    </Modal>
  </div>
);
