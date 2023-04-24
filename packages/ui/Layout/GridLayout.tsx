import { ReactNode } from 'react';

export default function GridLayout({ children }: { children: ReactNode }) {
  return (
    <div className=" max-w-full w-full h-auto">
      <div className="grid grid-cols-5 gap-1 m-0 h-auto">{children}</div>
    </div>
  );
}
