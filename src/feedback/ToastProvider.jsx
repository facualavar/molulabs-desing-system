import React from 'react';
import { Toast, ToastStack } from './Toast.jsx';

const ToastCtx = React.createContext(null);
const DURATION = { danger: 9000 };
const DEFAULT_MS = 5000;

function TimedToast({ t, onDismiss }) {
  const left = React.useRef(t.duration);
  const started = React.useRef(0);
  const timer = React.useRef(null);
  const [paused, setPaused] = React.useState(false);
  const start = () => {
    if (!isFinite(left.current)) return;
    started.current = Date.now();
    timer.current = setTimeout(() => onDismiss(t.id), left.current);
  };
  const pause = () => {
    if (!timer.current) return;
    clearTimeout(timer.current); timer.current = null;
    left.current = Math.max(0, left.current - (Date.now() - started.current));
    setPaused(true);
  };
  const resume = () => { setPaused(false); if (!timer.current) start(); };
  React.useEffect(() => { start(); return () => clearTimeout(timer.current); }, []);
  const a = t.action;
  return (
    <div onMouseEnter={pause} onMouseLeave={resume} onFocus={pause} onBlur={resume} data-paused={paused || undefined}>
      <Toast tone={t.tone} title={t.title}
        action={a ? a.label : undefined}
        onAction={a ? () => { a.onClick && a.onClick(); if (a.dismiss !== false) onDismiss(t.id); } : undefined}
        onClose={() => onDismiss(t.id)}>{t.msg}</Toast>
    </div>
  );
}

export function ToastProvider({ children, max = 4, duration = DEFAULT_MS, dangerDuration = DURATION.danger, stackStyle }) {
  const [list, setList] = React.useState([]);
  const seq = React.useRef(0);
  const dismiss = React.useCallback(id => setList(l => l.filter(t => t.id !== id)), []);
  const push = React.useCallback((tone, title, msg, action) => {
    const id = 't' + (++seq.current);
    const d = action && action.duration != null ? action.duration : tone === 'danger' ? dangerDuration : duration;
    setList(l => [...l, { id, tone: tone || 'info', title, msg, action, duration: d }].slice(-max));
    return id;
  }, [max, duration, dangerDuration]);
  const clear = React.useCallback(() => setList([]), []);
  const api = React.useMemo(() => ({ push, dismiss, clear }), [push, dismiss, clear]);
  return (
    <ToastCtx.Provider value={api}>
      {children}
      {list.length ? (
        <ToastStack style={stackStyle}>
          <div aria-live="polite" style={{ display: 'contents' }}>
            {list.map(t => <TimedToast key={t.id} t={t} onDismiss={dismiss} />)}
          </div>
        </ToastStack>
      ) : null}
    </ToastCtx.Provider>
  );
}

export function useToasts() {
  const api = React.useContext(ToastCtx);
  if (!api) throw new Error('useToasts() necesita un <ToastProvider> arriba en el árbol.');
  return api;
}

ToastProvider.useToasts = useToasts;
