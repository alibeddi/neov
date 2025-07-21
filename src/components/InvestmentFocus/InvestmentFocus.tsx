import InvestmentFocusDesktop from './InvestmentFocusDesktop';
import InvestmentFocusMobile from './InvestmentFocusMobile';

export default function InvestmentFocus() {
  return (
    <section className="w-full">
      <div className="hidden md:block">
        <InvestmentFocusDesktop />
      </div>
      <div className="block md:hidden">
        <InvestmentFocusMobile />
      </div>
    </section>
  );
} 