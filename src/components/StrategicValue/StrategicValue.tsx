import StrategicValueDesktop from './StrategicValueDesktop';
import StrategicValueMobile from './StrategicValueMobile';

export default function StrategicValue() {
  return (
    <section className="w-full">
      <div className="hidden md:block">
        <StrategicValueDesktop />
      </div>
      <div className="block md:hidden">
        <StrategicValueMobile />
      </div>
    </section>
  );
} 