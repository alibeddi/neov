import Image from 'next/image';

export default function WhoWeAreMobile() {
  return (
    <div className="bg-white flex flex-col items-center py-16 w-full shadow-md">
      <div className="flex flex-col gap-8 w-full px-4">
        {/* Headline and Title */}
        <div className="flex flex-col gap-4 text-left w-full">
          <div className="flex flex-col gap-2">
            <span className="text-[#167d08] text-[16px] font-semibold leading-6">Who we are</span>
            <div className="text-[32px] text-gray-900 font-semibold leading-[44px] tracking-[-0.64px]">
              <p className="mb-0">Investing in Possibility.</p>
              <p>Building What’s Next.</p>
            </div>
          </div>
          <div className="text-[18px] text-gray-600 leading-[28px] w-full">
            NEO Ventures (NEOV) is a venture capital fund, as part of SNB capital, purpose-built to drive innovation at the intersection of technology, finance, and lifestyle. We invest in bold ideas, back visionary founders, and build partnerships that expand the digital frontier
          </div>
        </div>
        {/* Features */}
        <div className="flex flex-col gap-6 w-full">
          {/* Our Vision */}
          <div className="relative w-full border-l-2 border-[#167d08] pl-6 py-4">
            <div className="flex flex-row gap-2 items-center mb-2">
              <Image src="/Our Vision Icon.svg" alt="Our Vision" width={32} height={32} />
              <span className="text-[#167d08] text-[20px] font-semibold leading-[30px]">Our Vision</span>
            </div>
            <div className="text-[16px] text-gray-600 leading-[24px]">
              <p className="mb-0">To be a leading strategic investor vehicle that drives innovation, builds a robust digital ecosystem, and explores new</p>
              <p>frontiers in products and markets, ultimately enhancing SNB&apos;s offerings and market position.</p>
            </div>
          </div>
          {/* Our Mission */}
          <div className="relative w-full border-l-2 border-gray-100 pl-6 py-4">
            <div className="flex flex-row gap-2 items-center mb-2">
              <Image src="/Our Mission Icon.svg" alt="Our Mission" width={32} height={32} />
              <span className="text-gray-900 text-[20px] font-semibold leading-[30px]">Our Mission</span>
            </div>
            <div className="text-[16px] text-gray-600 leading-[24px]">
              To invest in early-stage digital startups within Fintech and Lifestyle sectors, fueled by advanced technologies, to accelerate innovation, complement core offerings, and grow our local and global presence in line with SNB&apos;s strategic choices
            </div>
          </div>
        </div>
        {/* Image */}
        <div className="flex-shrink-0 flex justify-center w-full mt-8">
          <div className="bg-center bg-cover bg-no-repeat h-[344px] w-[347px] rounded-2xl overflow-hidden">
            <Image src="/Who we are Section Image.png" alt="Who we are" width={347} height={344} className="object-cover object-center rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
} 