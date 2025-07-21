import WhoWeAreDesktop from './WhoWeAreDesktop';
import WhoWeAreMobile from './WhoWeAreMobile';

export default function WhoWeAre() {
  return (
    <section className="w-full">
      <div className="hidden md:block">
        <WhoWeAreDesktop />
      </div>
      <div className="block md:hidden">
        <WhoWeAreMobile />
      </div>
    </section>
  );
} 