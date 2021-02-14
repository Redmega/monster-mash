import clsx from "clsx";

interface IAttribute {
  className?: string;
  title: string;
  value: string | number;
  modifier?: string | number;
}

export default function Attribute({ className, title, value, modifier }: IAttribute) {
  return (
    <div
      className={clsx(
        "m-1 inline-flex flex-col items-center rounded-md shadow-sm border-2 border-black",
        className
      )}
    >
      <span className="capitalize text-yellow-900 rounded-t p-1 text-sm w-full text-center font-bold shadow border-b border-yellow-400">
        {title}
      </span>
      <span className="px-2 text-xl">{value}</span>
      {modifier && <span className="text-sm">{modifier}</span>}
    </div>
  );
}
