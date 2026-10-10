import * as React from 'react';

/** Opening band of a landing page. Only at `data-density="comfortable"`. */
export interface HeroProps {
  /** Mono, uppercase, leather — the category line above the headline. */
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  /** One or two sentences, never a paragraph. */
  lead?: React.ReactNode;
  /** Buttons — one primary, one secondary at most. Use size="lg". */
  actions?: React.ReactNode;
  /** Small reassurance line under the actions. */
  note?: React.ReactNode;
  /** Right-hand slot: product screenshot or a placeholder frame. */
  media?: React.ReactNode;
  /** 'chrome' = the green field (default), 'paper' = light hero. */
  tone?: 'chrome' | 'paper';
  style?: React.CSSProperties;
}
export declare function Hero(props: HeroProps): React.JSX.Element;
