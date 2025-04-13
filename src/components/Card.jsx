import React from 'react';

export default function Card({ children }) {
  return <div className="w-full flex flex-col gap-6 items-center bg-slate-200 p-6 rounded-2xl">{children}</div>;
}
