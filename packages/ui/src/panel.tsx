import type { ReactNode } from 'react';
export const Panel = ({ title, children }: { title: string; children: ReactNode }) => (
  <section className="rounded-xl border border-white/10 bg-white/5 p-4"><h3>{title}</h3>{children}</section>
);
