import NavbarDesktop from './NavbarDesktop';
import NavbarMobile from './NavbarMobile';

export default function Navbar() {
  return (
    <nav className="w-full">
      {/* Desktop Navbar */}
      <div className="hidden md:block">
        <NavbarDesktop />
      </div>
      {/* Mobile Navbar */}
      <div className="block md:hidden">
        <NavbarMobile />
      </div>
    </nav>
  );
} 