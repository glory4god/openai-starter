import React, { ReactNode } from 'react';

export default function Form({ children }: { children: ReactNode }) {
  return <div className="px-6">{children}</div>;
}
