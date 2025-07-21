import Image from 'next/image';

const features = [
  {
    title: 'Early-stage focus',
    description: 'We invest at the earliest stages (Pre-Seed to Series A) to fuel innovation where it matters bringing your idea to product-fit and growth.',
    border: 'border-[#447703]',
  },
  {
    title: 'Digital & tech-driven',
    description: 'Our investments are centered on scalable technologies that enable smarter, faster, and more connected solutions.',
    border: 'border-gray-100',
  },
  {
    title: 'Focus on Fintech & Lifestyle',
    description: 'We target disruptive ventures in finance and lifestyle, where digital innovation transforms everyday experiences.',
    border: 'border-gray-100',
  },
  {
    title: 'Local and global impact',
    description: 'We support startups that make an impact - either locally in Saudi Arabia or internationally - while scaling to shape the digital future.',
    border: 'border-gray-100',
  },
];

export default function InvestmentFocusDesktop() {
  return (
    <div className="bg-white flex flex-col items-center py-16 w-full shadow-md">
      <div className="flex flex-col gap-12 items-center w-full">
        <div className="flex flex-col gap-4 items-center max-w-[768px] w-full text-center">
          <div className="text-[36px] text-gray-900 font-semibold leading-[44px] tracking-[-0.72px]">Investment Focus</div>
          <div className="text-[18px] text-gray-600 leading-[28px]">NEO Ventures is positioned in the intersection of FinTech and Lifestyle - the frontier of innovation.</div>
        </div>
        <div className="flex flex-col items-center w-full gap-8">
          <div className="rounded-2xl overflow-hidden w-[801px] h-[491px] mx-auto">
            <Image src="/Investment Focus section image.png" alt="Investment Focus" width={801} height={491} className="object-cover object-center w-full h-full" />
          </div>
        </div>
        <div className="flex flex-col items-center w-full gap-4 mt-12">
          <div className="text-[20px] text-gray-900 font-semibold leading-[30px]">Key characteristics of target investments</div>
          <div className="flex flex-row w-full max-w-[1280px] gap-0 px-8">
            {features.map((feature, idx) => (
              <div key={idx} className={`flex-1 flex flex-col px-4 pt-6 pb-0 border-t-2 ${feature.border}`}>
                <div className="text-[20px] text-gray-900 font-semibold leading-[30px] mb-2">{feature.title}</div>
                <div className="text-[16px] text-gray-600 leading-[24px]">{feature.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 