import React from 'react';

export default function Card({ title, children }) {
  return (
    <div className="w-full  bg-slate-200 p-6 rounded-2xl">
      <h2 className="pb-8">{title}</h2>
      <div className=" flex flex-col gap-6 items-center">{children}</div>
    </div>
  );
}
