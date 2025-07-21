import Image from 'next/image';

export default function WhoWeAreDesktop() {
  return (
    <div className="bg-white flex flex-col items-center py-10 w-full">
      <div className="flex flex-row items-center max-w-[1280px] w-full gap-8 px-8">
        {/* Left: Content */}
        <div className="flex flex-col gap-7 w-[680px]">
          {/* Headline and Title */}
          <div className="flex flex-col gap-4 text-left">
            <div className="flex flex-col gap-2">
              <span className="text-[#167d08] text-[16px] font-semibold leading-6">Who we are</span>
              <div className="text-[36px] text-gray-900 font-semibold leading-[44px] tracking-[-0.72px]">
                <p className="mb-0">Investing in Possibility.</p>
                <p>Building What’s Next.</p>
              </div>
            </div>
            <div className="text-[18px] text-gray-600 leading-[28px] w-[608px]">
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
        </div>
        {/* Right: Image */}
        <div className="flex-shrink-0">
          <div className="bg-center bg-cover bg-no-repeat h-[466px] w-[470px] rounded-2xl overflow-hidden">
            <Image src="/Who we are Section Image.png" alt="Who we are" width={470} height={466} className="object-cover object-center rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
} 