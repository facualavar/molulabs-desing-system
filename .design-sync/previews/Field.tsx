import { Field, TextInput, Select, Textarea } from '@molulabs/ds';

export const WithHint = () => (
  <div style={{ width: 360 }}>
    <Field label="Razón social" hint="Como figura en la constancia de AFIP" required>
      <TextInput value="Agropecuaria Los Sauces S.R.L." onChange={() => {}} />
    </Field>
  </div>
);

export const WithError = () => (
  <div style={{ width: 360 }}>
    <Field label="CUIT" error="El dígito verificador no coincide">
      <TextInput value="30-71234567-1" mono invalid onChange={() => {}} />
    </Field>
  </div>
);

export const FormGroup = () => (
  <div style={{ width: 360, display: 'grid', gap: 16 }}>
    <Field label="Condición de IVA">
      <Select value="ri" onChange={() => {}} options={[{ value: 'ri', label: 'Responsable Inscripto' }, { value: 'mono', label: 'Monotributo' }]} />
    </Field>
    <Field label="Observaciones" hint="Se imprime en el pie del comprobante">
      <Textarea value="Entrega coordinada con el transportista." onChange={() => {}} />
    </Field>
  </div>
);
