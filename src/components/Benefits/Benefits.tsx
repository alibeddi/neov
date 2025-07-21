import BenefitsDesktop from './BenefitsDesktop';
import BenefitsMobile from './BenefitsMobile';

export default function Benefits() {
  return (
    <section className="w-full">
      <div className="hidden md:block">
        <BenefitsDesktop />
      </div>
      <div className="block md:hidden">
        <BenefitsMobile />
      </div>
    </section>
  );
} 