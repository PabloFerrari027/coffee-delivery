import { FaCircleNotch } from "react-icons/fa";

export default function Loading() {
  return (
    <main className="flex-1 flex min-h-[calc(100vh-4.5em)] justify-center items-center max-md:px-10 px-20">
      <FaCircleNotch className="animate-spin text-3xl text-purple-900" />
    </main>
  );
}
