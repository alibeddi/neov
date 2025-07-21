import Image from 'next/image';

const features = [
  {
    title: 'Access to Banking Services',
    description: 'Offer SNB banking services, financial resources, and seamless technology integration.',
    img: '/wide image 1.jpg',
    className: 'col-span-1 row-span-1 max-w-[800px]',
  },
  {
    title: 'Operational Support',
    description: 'Tap into SNB’s operational capacity and expertise to help startups scale.',
    img: '/image1.jpg',
    className: 'col-span-1 row-span-1 max-w-[392px]',
  },
  {
    title: 'Reputational Gain',
    description: 'Leverage SNB’s strong brand to build credibility for startups.',
    img: '/image 2.jpg',
    className: 'col-span-1 row-span-1 max-w-[392px]',
  },
  {
    title: 'Market Access',
    description: 'Provide startups access to SNB’s clients and markets.',
    img: '/wide image 2.jpg',
    className: 'col-span-1 row-span-1 max-w-[800px]',
  },
];

export default function BenefitsDesktop() {
  return (
    <div className="bg-white flex flex-col items-center pt-0 pb-10 w-full">
      <div className="flex flex-col gap-12 items-center w-full">
        <div className="flex flex-col gap-4 items-center max-w-[768px] w-full text-center">
          <span className="text-[#167d08] text-[16px] font-semibold leading-6">Specific benefits for startups</span>
          <div className="text-[36px] text-gray-900 font-semibold leading-[44px] tracking-[-0.72px]">
            <p className="mb-0">Uniquely Positioned for Your</p>
            <p>Sustainable Growth</p>
          </div>
          <div className="text-[18px] text-gray-600 leading-[28px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s
          </div>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 max-w-[1280px] w-full px-8 auto-rows-min">
          {/* First row */}
          <div className="bg-gray-50 col-span-2 rounded-2xl border border-gray-200 flex flex-col justify-between h-[320px] p-6 shadow-sm transition hover:shadow-md max-w-[800px]">
            <div className="flex flex-col gap-2 text-left mb-4">
              <span className="text-[20px] font-semibold leading-[30px] text-gray-900">{features[0].title}</span>
              <span className="text-[16px] text-gray-600 leading-[24px]">{features[0].description}</span>
            </div>
            <div className="w-full mt-4">
              <Image src={features[0].img} alt={features[0].title} width={800} height={160} className="object-cover object-center w-full h-[160px] rounded-2xl" />
            </div>
          </div>
          <div className="bg-gray-50 rounded-2xl border border-gray-200 flex flex-col justify-between h-[320px] p-6 shadow-sm transition hover:shadow-md max-w-[392px]">
            <div className="flex flex-col gap-2 text-left mb-4">
              <span className="text-[20px] font-semibold leading-[30px] text-gray-900">{features[1].title}</span>
              <span className="text-[16px] text-gray-600 leading-[24px]">{features[1].description}</span>
            </div>
            <div className="w-full mt-4">
              <Image src={features[1].img} alt={features[1].title} width={392} height={160} className="object-cover object-center w-full h-[160px] rounded-2xl" />
            </div>
          </div>
          {/* Second row */}
          <div className="bg-gray-50 rounded-2xl border border-gray-200 flex flex-col justify-between h-[320px] p-6 shadow-sm transition hover:shadow-md max-w-[392px]">
            <div className="flex flex-col gap-2 text-left mb-4">
              <span className="text-[20px] font-semibold leading-[30px] text-gray-900">{features[2].title}</span>
              <span className="text-[16px] text-gray-600 leading-[24px]">{features[2].description}</span>
            </div>
            <div className="w-full mt-auto">
              <Image src={features[2].img} alt={features[2].title} width={392} height={160} className="object-cover object-center w-full h-[160px] rounded-2xl" />
            </div>
          </div>
          <div className="bg-gray-50 col-span-2 rounded-2xl border border-gray-200 flex flex-col justify-between h-[320px] p-6 shadow-sm transition hover:shadow-md max-w-[800px]">
            <div className="flex flex-col gap-2 text-left mb-4">
              <span className="text-[20px] font-semibold leading-[30px] text-gray-900">{features[3].title}</span>
              <span className="text-[16px] text-gray-600 leading-[24px]">{features[3].description}</span>
            </div>
            <div className="w-full mt-auto">
              <Image src={features[3].img} alt={features[3].title} width={800} height={160} className="object-cover object-center w-full h-[160px] rounded-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 