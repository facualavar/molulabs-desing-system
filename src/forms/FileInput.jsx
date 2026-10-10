import React from 'react';

const ICONS = { pdf: 'ti-file-type-pdf', jpg: 'ti-photo', jpeg: 'ti-photo', png: 'ti-photo', webp: 'ti-photo', heic: 'ti-photo', xls: 'ti-file-spreadsheet', xlsx: 'ti-file-spreadsheet', csv: 'ti-file-spreadsheet', doc: 'ti-file-text', docx: 'ti-file-text' };

export function formatBytes(n) {
  if (n == null) return '';
  if (n < 1024) return n + ' B';
  if (n < 1048576) return Math.round(n / 1024) + ' KB';
  return (n / 1048576).toFixed(1).replace('.', ',') + ' MB';
}

function ext(name) { const m = /\.([a-z0-9]+)$/i.exec(name || ''); return m ? m[1].toLowerCase() : ''; }

function accepts(file, accept) {
  if (!accept) return true;
  return accept.split(',').map(s => s.trim().toLowerCase()).some(a =>
    a.startsWith('.') ? (file.name || '').toLowerCase().endsWith(a)
      : a.endsWith('/*') ? (file.type || '').startsWith(a.slice(0, -1))
      : (file.type || '') === a);
}

export function FileInput({
  value = [], onChange, accept, multiple = false, maxSize, maxFiles,
  label = 'Arrastrá un archivo o hacé clic para elegir', hint,
  invalid, disabled, id, compact = false, style
}) {
  const inp = React.useRef(null);
  const [over, setOver] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const files = Array.isArray(value) ? value : value ? [value] : [];
  const full = !multiple ? files.length >= 1 : maxFiles ? files.length >= maxFiles : false;

  const add = list => {
    if (disabled) return;
    const incoming = Array.from(list || []);
    const bad = [];
    let ok = incoming.filter(f => {
      if (!accepts(f, accept)) { bad.push(f.name + ': formato no admitido'); return false; }
      if (maxSize && f.size > maxSize) { bad.push(f.name + ': supera ' + formatBytes(maxSize)); return false; }
      return true;
    });
    let next = multiple ? files.concat(ok) : ok.slice(0, 1);
    if (multiple && maxFiles && next.length > maxFiles) { bad.push('Máximo ' + maxFiles + ' archivos'); next = next.slice(0, maxFiles); }
    setErr(bad.length ? bad.join(' · ') : null);
    if (ok.length) onChange && onChange(next);
  };
  const remove = i => { setErr(null); onChange && onChange(files.filter((_, j) => j !== i)); };
  const open = () => { if (!disabled && inp.current) inp.current.click(); };

  const autoHint = hint ?? [accept ? accept.split(',').map(a => { a = a.trim(); return a === 'image/*' ? 'Imágenes' : a === 'video/*' ? 'Videos' : a.replace(/^\./, '').replace(/^.*\//, '').toUpperCase(); }).join(', ') : null, maxSize ? 'hasta ' + formatBytes(maxSize) : null].filter(Boolean).join(' · ');
  const red = invalid || !!err;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', minWidth: 0, opacity: disabled ? .45 : 1, ...style }}>
      <input ref={inp} id={id} type="file" accept={accept} multiple={multiple} disabled={disabled}
        onChange={e => { add(e.target.files); e.target.value = ''; }}
        style={{ position: 'absolute', width: 1, height: 1, opacity: 0, pointerEvents: 'none' }} tabIndex={-1} aria-hidden="true" />
      {!full ? (
        <div role="button" tabIndex={disabled ? -1 : 0} aria-disabled={disabled || undefined} aria-controls={id}
          onClick={open}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } }}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          onDragOver={e => { e.preventDefault(); if (!disabled) setOver(true); }}
          onDragLeave={() => setOver(false)}
          onDrop={e => { e.preventDefault(); setOver(false); add(e.dataTransfer.files); }}
          style={{
            display: 'flex', flexDirection: compact ? 'row' : 'column', alignItems: 'center', justifyContent: 'center',
            gap: compact ? '10px' : '6px', padding: compact ? '10px 14px' : '22px 16px', textAlign: 'center',
            minHeight: 'var(--tap-min)', boxSizing: 'border-box', cursor: disabled ? 'not-allowed' : 'pointer',
            border: '1px dashed ' + (red ? 'var(--alert)' : over || focus ? 'var(--leather)' : 'var(--line)'),
            outline: focus ? '1px solid var(--leather)' : 'none',
            borderRadius: 'var(--r)', background: over ? 'color-mix(in oklch, var(--leather) 8%, var(--card))' : 'var(--card)',
            fontFamily: 'var(--sans)', transition: 'border-color var(--dur-fast), background var(--dur-fast)'
          }}>
          <i className="ti ti-upload" aria-hidden="true" style={{ fontSize: compact ? '18px' : '24px', color: over ? 'var(--leather)' : 'var(--ink-3)' }} />
          <span style={{ display: 'flex', flexDirection: 'column', gap: '2px', alignItems: compact ? 'flex-start' : 'center' }}>
            <span style={{ fontSize: 'var(--ui-text)', color: 'var(--ink)' }}>{over ? 'Soltá para subir' : label}</span>
            {autoHint ? <span style={{ fontSize: 'var(--ui-text-sm)', color: 'var(--ink-3)' }}>{autoHint}</span> : null}
          </span>
        </div>
      ) : null}
      {err ? (
        <div role="alert" style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'var(--ui-text-sm)', color: 'var(--alert)' }}>
          <i className="ti ti-alert-circle" style={{ fontSize: '14px' }} />{err}
        </div>
      ) : null}
      {files.length ? (
        <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {files.map((f, i) => {
            const pct = f.progress;
            const failed = !!f.error;
            return (
              <li key={(f.name || '') + i} style={{
                position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', gap: '10px',
                padding: '8px 8px 8px 12px', border: '1px solid ' + (failed ? 'var(--alert)' : 'var(--line)'),
                borderRadius: 'var(--r)', background: 'var(--card)', fontFamily: 'var(--sans)'
              }}>
                <i className={'ti ' + (failed ? 'ti-alert-circle' : ICONS[ext(f.name)] || 'ti-file')} aria-hidden="true"
                  style={{ fontSize: '20px', color: failed ? 'var(--alert)' : 'var(--ink-2)', flex: 'none' }} />
                <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  <span style={{ fontSize: 'var(--ui-text)', color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{f.name}</span>
                  <span style={{ fontSize: 'var(--ui-text-sm)', color: failed ? 'var(--alert)' : 'var(--ink-3)', fontFamily: failed ? 'var(--sans)' : 'var(--mono)' }}>
                    {failed ? f.error : pct != null && pct < 100 ? 'Subiendo… ' + Math.round(pct) + '%' : formatBytes(f.size)}
                  </span>
                </span>
                {!disabled ? (
                  <button type="button" aria-label={'Quitar ' + f.name} onClick={() => remove(i)}
                    style={{ width: 30, height: 30, flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 0, borderRadius: 'var(--r)', background: 'transparent', color: 'var(--ink-3)', cursor: 'pointer', fontSize: '16px' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--zebra)'; e.currentTarget.style.color = 'var(--ink)'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--ink-3)'; }}>
                    <i className="ti ti-x" />
                  </button>
                ) : null}
                {pct != null && pct < 100 && !failed ? (
                  <span aria-hidden="true" style={{ position: 'absolute', left: 0, bottom: 0, height: 2, width: pct + '%', background: 'var(--leather)', transition: 'width var(--dur-fast)' }} />
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
