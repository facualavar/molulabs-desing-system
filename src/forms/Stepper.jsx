import React from 'react';

const statusOf = (s, i, current) => s.status || (i < current ? 'done' : i === current ? 'current' : 'todo');

export function Stepper({ steps = [], current = 0, onStep, compact, style }) {
  if (compact) {
    const s = steps[current] || {};
    const st = statusOf(s, current, current);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, ...style }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 'var(--ui-text)', fontWeight: 600, color: st === 'error' ? 'var(--alert)' : 'var(--ink)' }}>{s.label}</span>
          <span style={{ fontFamily: 'var(--mono)', fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>Paso {current + 1} de {steps.length}</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {steps.map((x, i) => {
            const t = statusOf(x, i, current);
            return <span key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: t === 'error' ? 'var(--alert)' : t === 'todo' ? 'var(--line)' : 'var(--chrome)' }} />;
          })}
        </div>
      </div>
    );
  }
  return (
    <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap', ...style }}>
      {steps.map((s, i) => {
        const st = statusOf(s, i, current);
        const reach = onStep && (st === 'done' || st === 'error') && i !== current;
        const dot = {
          width: 24, height: 24, flex: 'none', borderRadius: 'var(--r-round)', boxSizing: 'border-box',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--mono)', fontSize: 12, fontWeight: 500,
          background: st === 'current' || st === 'done' ? 'var(--chrome)' : st === 'error' ? 'var(--alert)' : 'var(--card)',
          color: st === 'todo' ? 'var(--ink-3)' : '#fff',
          border: st === 'todo' ? '1px solid var(--line)' : '1px solid transparent'
        };
        return (
          <React.Fragment key={i}>
            {i ? <li aria-hidden="true" style={{ flex: '1 1 16px', minWidth: 16, maxWidth: 64, height: 1, background: st === 'todo' ? 'var(--line)' : 'var(--chrome)' }} /> : null}
            <li>
              <button type="button" disabled={!reach} onClick={reach ? () => onStep(i) : undefined}
                aria-current={st === 'current' ? 'step' : undefined}
                style={{ display: 'flex', alignItems: 'center', gap: 8, border: 0, background: 'transparent', padding: '4px 2px', font: 'inherit', cursor: reach ? 'pointer' : 'default', color: 'inherit' }}>
                <span style={dot}>{st === 'done' ? <i className="ti ti-check" /> : st === 'error' ? '!' : i + 1}</span>
                <span style={{
                  fontSize: 'var(--ui-text-sm)', whiteSpace: 'nowrap',
                  fontWeight: st === 'current' ? 600 : 400,
                  color: st === 'error' ? 'var(--alert)' : st === 'todo' ? 'var(--ink-3)' : 'var(--ink)',
                  textDecoration: reach ? 'underline' : 'none', textDecorationColor: 'var(--line)', textUnderlineOffset: 3
                }}>{s.label}</span>
              </button>
            </li>
          </React.Fragment>
        );
      })}
    </ol>
  );
}
