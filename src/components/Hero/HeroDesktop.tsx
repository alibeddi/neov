import Image from "next/image";

export default function HeroDesktop() {
  return (
    <div className="relative w-full flex justify-center items-center min-h-[646px]">
      {/* Background Image */}
      <div className="absolute left-[1.6%] right-[1.2%] top-[56px] h-[600px] rounded-[30px] overflow-hidden z-0">
        <Image
          src="/Header Image.png"
          alt="Header background"
          fill
          className="object-cover object-center rounded-[30px]"
          priority
        />
      </div>
      {/* Content */}
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[891px] flex flex-col items-center gap-[17px] z-10">
        <div className="w-full text-center">
          <h1 className="font-semibold text-[#151e14] text-[87.54px] leading-[91.91px] tracking-[-2.34px] mb-0 font-inter">
            NEO Ventures
          </h1>
          <h2 className="font-semibold text-[87.54px] leading-[91.91px] tracking-[-2.34px] text-center font-inter">
            <span className="text-[#167d08]">Investing</span>
            <span className="text-[#151e14]"> in the Future</span>
          </h2>
        </div>
        {/* Description */}
        <div className="w-full text-center">
          <p className="text-[#3c3c3c] text-[20px] leading-[28px] tracking-[-0.2px] font-normal font-inter">
            Fueling innovation and growth in
            <br />
            Fintech and Lifestyle
          </p>
        </div>
        {/* Button */}
        <button className="bg-[#167d08] text-white text-[18.88px] leading-[26.97px] font-medium rounded-lg px-[18.88px] py-[10.79px] w-[210px] mt-2">
          Discover More
        </button>
      </div>
    </div>
  );
}
