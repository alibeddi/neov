import Image from 'next/image';

export default function SubmitPitchDeckMobile() {
  return (
    <div className="bg-white flex flex-col items-center py-16 w-full">
      <div className="flex flex-col items-center w-full px-4">
        <div className="bg-gray-50 rounded-[32px] w-full flex flex-col items-start gap-6 px-6 py-8 shadow-md relative">
          <div className="flex flex-col gap-4 text-left w-full">
            <div className="text-[30px] text-gray-900 font-semibold leading-[38px]">Submit Your Pitch Deck</div>
            <div className="text-[18px] text-gray-600 leading-[28px]">Submit your innovative ideas and start your growth journey with NEO Ventures</div>
          </div>
          <div className="flex flex-col gap-3 w-full">
            <button className="bg-[#167d08] text-white text-[16px] font-medium leading-6 rounded-lg px-[18px] py-2.5 w-full">Submit</button>
            <button className="flex flex-row gap-2 items-center text-[16px] text-gray-700 font-medium leading-6 w-full justify-center">
              Learn more
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path stroke="#374151" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.5 15l5-5-5-5"/></svg>
            </button>
          </div>
          <div className="rounded-xl overflow-hidden w-full h-80 mt-4 border border-gray-300 shadow-lg">
            <Image src="/Submit Your Pitch Deck section image.png" alt="Submit Your Pitch Deck" width={358} height={228} className="object-cover object-center w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  );
} 