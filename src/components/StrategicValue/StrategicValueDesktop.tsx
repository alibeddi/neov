const icons = {
  clock: "http://localhost:3845/assets/ff821048334264d2c443e00503dfc96939a238aa.svg",
  pie: "http://localhost:3845/assets/2f66a00ad4ff51989e84d21b53ad831a11ee90d6.svg",
  bar: "http://localhost:3845/assets/ba4d3f9902b0715c694d59996390f13e2bc67d81.svg",
  arrow: "http://localhost:3845/assets/7352ca5a944d88bc26c3be39339063fb893bb677.svg",
  ellipse1: "http://localhost:3845/assets/01b7b08bba7922f8b78c8162f2f8b0111fd106da.svg",
  ellipse2: "http://localhost:3845/assets/70d099da91a348c89fd441924837a24cd4b179ff.svg",
};

const features = [
  {
    icon: icons.clock,
    title: 'Build Ecosystem',
    description: 'Foster partnerships and integrations that enhance product offerings and complement our ecosystem.',
  },
  {
    icon: icons.pie,
    title: 'Explore New Products and Markets',
    description: "Enhance NEO's product and service offerings to serve evolving customer needs and gain a foothold in emergent spaces.",
  },
  {
    icon: icons.bar,
    title: 'Minimize the Risk of Disruption',
    description: 'Invest in future-defining technologies to protect core business from disruptive models.',
  },
];

export default function StrategicValueDesktop() {
  return (
    <div className="relative bg-white flex flex-col items-center py-10 w-full overflow-hidden">
      {/* Decorative Ellipses */}
      <img src={icons.ellipse1} alt="ellipse" className="absolute left-[60%] -top-40 w-[600px] opacity-30 pointer-events-none select-none" />
      <img src={icons.ellipse2} alt="ellipse" className="absolute -left-80 top-[500px] w-[700px] opacity-30 pointer-events-none select-none" />
      <div className="flex flex-col gap-12 items-center w-full relative z-10">
        <div className="flex flex-col gap-4 items-center max-w-[768px] w-full text-center">
          <div className="text-[36px] text-gray-900 font-semibold leading-[44px] tracking-[-0.72px]">Driving Strategic Value</div>
          <div className="text-[18px] text-gray-600 leading-[28px]">NEOVentures is more than capital, it&apos;s a strategic investor fueling your growth story and success</div>
        </div>
        <div className="flex flex-row gap-8 w-full max-w-[1280px] px-8 justify-center">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl border border-gray-200 flex flex-col gap-6 p-8 w-full max-w-xs shadow-sm transition hover:shadow-md">
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