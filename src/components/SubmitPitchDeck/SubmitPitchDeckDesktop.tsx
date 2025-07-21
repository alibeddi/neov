import Image from 'next/image';

export default function SubmitPitchDeckDesktop() {
  return (
    <div className="bg-white flex flex-col items-center py-16 w-full">
      <div className="flex flex-col items-center w-full px-8">
        <div className="bg-gray-50 rounded-[32px] w-full max-w-[1280px] flex flex-row items-center gap-6 px-8 py-16 shadow-md relative">
          {/* Left: Text and Actions */}
          <div className="flex flex-col gap-8 max-w-[544px] min-w-[480px] w-full">
            <div className="flex flex-col gap-4 text-left">
              <div className="text-[36px] text-gray-900 font-semibold leading-[44px] tracking-[-0.72px]">Submit Your Pitch Deck</div>
              <div className="text-[18px] text-gray-600 leading-[28px]">Submit your innovative ideas and start your growth journey with NEO Ventures</div>
            </div>
            <div className="flex flex-row gap-6 items-center">
              <button className="bg-[#167d08] text-white text-[16px] font-medium leading-6 rounded-lg px-[18px] py-2.5">Submit</button>
              <button className="flex flex-row gap-2 items-center text-[16px] text-gray-700 font-medium leading-6">
                Learn more
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.5 15l5-5-5-5"/></svg>
              </button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="relative min-w-[480px] w-[656px] h-[304px] ml-8 rounded-xl overflow-hidden shadow-lg border border-gray-300">
            <Image src="/Submit Your Pitch Deck section image.png" alt="Submit Your Pitch Deck" width={656} height={304} className="object-cover object-center w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
} 