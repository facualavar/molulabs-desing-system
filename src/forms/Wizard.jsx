import React from 'react';
import { Stepper } from './Stepper.jsx';
import { Button } from '../core/Button.jsx';

export function Wizard({ steps = [], current = 0, onStep, onBack, onNext, onDraft, onFinish, finishLabel = 'Confirmar', nextLabel = 'Siguiente', note, draftNote, busy, compact, children, style }) {
  const last = current === steps.length - 1;
  return (
    <div style={{ background: 'var(--card)', border: 'var(--border-hair)', borderRadius: 'var(--r)', display: 'flex', flexDirection: 'column', ...style }}>
      <div style={{ padding: 'var(--pad-card, 16px)', borderBottom: 'var(--border-hair-soft)' }}>
        <Stepper steps={steps} current={current} onStep={onStep} compact={compact} />
      </div>
      <div style={{ padding: 'var(--pad-card, 16px)', display: 'flex', flexDirection: 'column', gap: 14 }}>{children}</div>
      <div style={{ padding: '12px var(--pad-card, 16px)', borderTop: 'var(--border-hair-soft)', display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
        {current > 0 ? <Button tone="ghost" icon="ti-arrow-left" onClick={onBack}>Anterior</Button> : null}
        <span style={{ marginRight: 'auto', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{note || draftNote}</span>
        {onDraft && !last ? <Button tone="secondary" onClick={onDraft}>Guardar borrador</Button> : null}
        {last
          ? <Button onClick={onFinish} disabled={busy}>{finishLabel}</Button>
          : <Button onClick={onNext} disabled={busy}>{nextLabel}</Button>}
      </div>
    </div>
  );
}
