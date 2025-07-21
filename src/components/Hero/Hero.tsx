import HeroDesktop from './HeroDesktop';
import HeroMobile from './HeroMobile';

export default function Hero() {
  return (
    <section className="w-full bg-[#ffffff]">
      {/* Desktop Hero */}
      <div className="hidden md:block">
        <HeroDesktop />
      </div>
      {/* Mobile Hero */}
      <div className="block md:hidden">
        <HeroMobile />
      </div>
    </section>
  );
} 