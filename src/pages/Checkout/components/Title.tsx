interface ITitle {
  title: string;
}

export default function Title({ title }: ITitle) {
  return (
    <h1 className="font-maven max-lg:text-1xl text-2xl font-bold text-slate-700 max-sm:mx-10">
      {title}
    </h1>
  );
}
