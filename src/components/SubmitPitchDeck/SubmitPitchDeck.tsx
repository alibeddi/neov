import SubmitPitchDeckDesktop from './SubmitPitchDeckDesktop';
import SubmitPitchDeckMobile from './SubmitPitchDeckMobile';

export default function SubmitPitchDeck() {
  return (
    <section className="w-full">
      <div className="hidden md:block">
        <SubmitPitchDeckDesktop />
      </div>
      <div className="block md:hidden">
        <SubmitPitchDeckMobile />
      </div>
    </section>
  );
} 