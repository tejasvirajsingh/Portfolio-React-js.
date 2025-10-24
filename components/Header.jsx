import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 p-10 text-white bg-slate-900">
      <div className="container mx-auto flex items-center justify-between xl:justify-evenly">
        {/* Logo (left) */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            
            Tejasvi<span className="text-red-500 blink">_</span>
          </h1>
        </Link>

        {/* Desktop Nav (right) */}
        <div className="hidden xl:flex items-center gap-6">
          <Nav />
          <Link href="/contact">
            <Button>Reach Me</Button>
          </Link>
        </div>

        {/* Mobile Nav Trigger (right on small screens) */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
