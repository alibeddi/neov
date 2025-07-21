import FooterDesktop from './FooterDesktop';
import FooterMobile from './FooterMobile';

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="hidden md:block">
        <FooterDesktop />
      </div>
      <div className="block md:hidden">
        <FooterMobile />
      </div>
    </footer>
  );
} 