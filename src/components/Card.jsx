import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="w-full   p-6 rounded-2xl ">
      <h2 className="text-2xl font-semibold text-slate-700 pb-6  w-full">{title}</h2>
      <div className=" flex flex-col gap-6 items-center">{children}</div>
    </div>
  );
}
