const icons = {
  clock: "http://localhost:3845/assets/97fccd45fc2480762ddd51765b90615c4452743b.svg",
  pie: "http://localhost:3845/assets/2ee3937b063a46131c5d1231dfcca90df6ea34be.svg",
  bar: "http://localhost:3845/assets/ddc0e9515ddf197554b760020ad03dd94bd0d81b.svg",
  arrow: "http://localhost:3845/assets/ed2423f86933cade6fc3f763e6c1e1ccd00badf0.svg",
  ellipse1: "http://localhost:3845/assets/01b7b08bba7922f8b78c8162f2f8b0111fd106da.svg",
  ellipse2: "http://localhost:3845/assets/70d099da91a348c89fd441924837a24cd4b179ff.svg",
};

const features = [
  {
    icon: icons.clock,
    title: 'Build Ecosystem',
    description: "NEOVentures is more than capital, it's a strategic investor fueling your growth story and success",
  },
  {
    icon: icons.pie,
    title: 'Explore New Products and Markets',
    description: 'Foster partnerships and integrations that enhance product offerings and complement our ecosystem.',
  },
  {
    icon: icons.bar,
    title: 'Minimize the Risk of Disruption',
    description: "Enhance NEO's product and service offerings to serve evolving customer needs and gain a foothold in emergent spaces.",
  },
];

export default function StrategicValueMobile() {
  return (
    <div className="relative bg-white flex flex-col items-center py-16 w-full shadow-md overflow-hidden">
      {/* Decorative Ellipses */}
      <img src={icons.ellipse1} alt="ellipse" className="absolute left-12 -top-24 w-[400px] opacity-30 pointer-events-none select-none" />
      <img src={icons.ellipse2} alt="ellipse" className="absolute -left-80 top-[700px] w-[500px] opacity-30 pointer-events-none select-none" />
      <div className="flex flex-col gap-10 w-full px-4 relative z-10">
        <div className="flex flex-col gap-4 items-center w-full text-center">
          <div className="text-[30px] text-gray-900 font-semibold leading-[38px]">Everything you need for scalability</div>
          <div className="text-[18px] text-gray-600 leading-[28px]">Maximize success with our flexible product features. Customize, stay compatible across platforms, and receive reliable support for optimized performance.</div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl border border-gray-200 flex flex-col gap-6 p-6 shadow-sm transition hover:shadow-md">
              <div className="bg-[#167d08] rounded-xl p-2 w-12 h-12 flex items-center justify-center mb-2">
                <img src={feature.icon} alt="icon" className="w-6 h-6" />
              </div>
              <div className="text-[20px] font-semibold leading-[30px] text-gray-900 mb-1">{feature.title}</div>
              <div className="text-[16px] text-gray-600 leading-[24px] mb-4">{feature.description}</div>
              <div className="flex flex-row items-center gap-2 cursor-pointer group">
                <span className="text-[#167d08] text-[16px] font-medium leading-6 group-hover:underline">Learn more</span>
                <img src={icons.arrow} alt="arrow" className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 