import Link from "next/link";
import { ModeToggle } from "@/components/common/mode-toggle";

export const Navbar = () => {
  return (
    <header>
      <nav className="container mx-auto py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-bold lg:text-2xl">
            PCZeroX<span className="text-primary">Blog</span>
          </Link>

          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};
