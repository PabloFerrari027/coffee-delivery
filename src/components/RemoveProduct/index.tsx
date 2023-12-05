import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "../ui/button";

export default function RemoveProduct() {
  return (
    <Button
      type="button"
      className="py-[0px] text-xs bg-zinc-200 shadow-none flex gap-2 hover:bg-zinc-200 hover:opacity-80 text-slate-800 font-light uppercase"
    >
      <RiDeleteBin6Line className="text-purple-800" />

      <span>Remover</span>
    </Button>
  );
}
