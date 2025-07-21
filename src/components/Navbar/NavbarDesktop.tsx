const imgAsset11300X86Png = "http://localhost:3845/assets/4f9c01defcb98ee545faf47716d0f7689e7f12b5.png";
const imgChevronDown = "http://localhost:3845/assets/4530044f724938fbe1e83a366765cfb9862db734.svg";

export default function NavbarDesktop() {
  return (
    <div className="bg-white flex flex-col items-center py-4 w-full">
      <div className="flex flex-col gap-2 items-center w-[1216px] max-w-full">
        <div className="flex flex-row gap-10 items-center w-full">
          {/* Logo */}
          <div
            className="bg-no-repeat h-8 max-w-[114px] w-[59px]"
            style={{ backgroundImage: `url('${imgAsset11300X86Png}')`, backgroundSize: '193.22% 102.13%', backgroundPosition: '0% 49.98%' }}
          />
          {/* Navigation */}
          <div className="flex flex-row gap-8 items-center grow">
            {/* Services */}
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <span className="font-medium text-[16px] text-gray-700 leading-6">Services</span>
              <img src={imgChevronDown} alt="chevron" className="w-5 h-5" />
            </div>
            {/* About Us */}
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <span className="font-medium text-[16px] text-gray-700 leading-6">About Us</span>
              <img src={imgChevronDown} alt="chevron" className="w-5 h-5" />
            </div>
            {/* Contact Us */}
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <span className="font-medium text-[16px] text-gray-700 leading-6">Contact Us</span>
            </div>
          </div>
          {/* Actions */}
          <div className="flex flex-row gap-8 items-center">
            <div className="flex flex-row gap-2 items-center cursor-pointer">
              <span className="font-medium text-[16px] text-gray-700 leading-6">Log in</span>
            </div>
            <div className="bg-[#167d08] flex flex-row gap-2 items-center px-3.5 py-2 rounded-lg cursor-pointer">
              <span className="font-medium text-[14px] text-white leading-5">Sign up</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 