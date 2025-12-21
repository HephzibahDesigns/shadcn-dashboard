import Link from "next/link";
import DarkMode from "./DarkMode";
import UserMenu from "./UserMenu";
import { SidebarTrigger } from "./ui/sidebar";

const Navbar = () => {
  return (
    <nav className="p-4 flex items-center justify-between">
      {/* sidebar close button */}
      <SidebarTrigger />

      <div className="flex items-center gap-4">
        <Link href="/">Dashboard</Link>

        {/* dark mode settings */}
        <DarkMode />

        {/* User Menu settings */}
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navbar;
