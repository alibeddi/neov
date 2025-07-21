import Image from 'next/image';

const features = [
  {
    title: 'Access to Banking Services',
    description: 'Offer SNB banking services, financial resources, and seamless technology integration.',
    img: 'https://placehold.co/400x246.png',
  },
  {
    title: 'Operational Support',
    description: 'Tap into SNB’s operational capacity and expertise to help startups scale.',
    img: 'https://placehold.co/400x246.png',
  },
  {
    title: 'Reputational Gain',
    description: 'Leverage SNB’s strong brand to build credibility for startups.',
    img: 'https://placehold.co/400x246.png',
  },
  {
    title: 'Market Access',
    description: 'Provide startups access to SNB’s clients and markets.',
    img: 'https://placehold.co/400x246.png',
  },
];

export default function BenefitsMobile() {
  return (
    <div className="bg-white flex flex-col items-center py-16 w-full shadow-md">
      <div className="flex flex-col gap-10 w-full px-4">
        <div className="flex flex-col gap-4 items-center w-full text-center">
          <span className="text-[#167d08] text-[16px] font-semibold leading-6">Features</span>
          <div className="text-[30px] text-gray-900 font-semibold leading-[38px]">
            <p className="mb-0">Everything you need to deploy your app</p>
          </div>
          <div className="text-[18px] text-gray-600 leading-[28px]">
            Maximize success with our flexible product features. Customize, stay compatible across platforms, and receive reliable support for optimized performance.
          </div>
        </div>
        <div className="flex flex-col gap-8 w-full">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl border border-gray-200 flex flex-col justify-between h-[370px] p-6 shadow-sm transition hover:shadow-md">
              <div className="flex flex-col gap-2 text-left mb-4">
                <span className="text-[20px] font-semibold leading-[30px] text-gray-900">{feature.title}</span>
                <span className="text-[16px] text-gray-600 leading-[24px]">{feature.description}</span>
              </div>
              <div className="w-full mt-auto">
                <Image src={feature.img} alt={feature.title} width={400} height={160} className="object-cover object-center w-full h-[160px] rounded-b-2xl" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 