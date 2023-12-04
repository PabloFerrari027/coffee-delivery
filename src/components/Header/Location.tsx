import { Button } from "../ui/button";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Location() {
  return (
    <Button className="flex gap-1 bg-violet-100 hover:bg-violet-100 hover:hover:opacity-80 text-violet-800 shadow-none text-base font-normal">
      <FaMapMarkerAlt /> <span className="max-[350px]:hidden">Vitória, ES</span>
    </Button>
  );
}
