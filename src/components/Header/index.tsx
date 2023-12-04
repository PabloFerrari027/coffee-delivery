import Location from "./Location";
import Logo from "./Logo";
import Shop from "./Shop";

export default function Header() {
  return (
    <header className="flex-1 flex justify-between max-md:px-10 px-20 py-4">
      <Logo />

      <div className="flex gap-2">
        <Location />
        <Shop />
      </div>
    </header>
  );
}
