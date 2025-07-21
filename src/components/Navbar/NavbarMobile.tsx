import MenuButton from './MenuButton';

const imgAsset11300X86Png = "http://localhost:3845/assets/4f9c01defcb98ee545faf47716d0f7689e7f12b5.png";

export default function NavbarMobile() {
  return (
    <div className="bg-white relative w-full py-4">
      <div className="absolute border-0 border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center w-full">
        <div className="flex flex-row items-center justify-between w-full px-4">
          {/* Logo */}
          <div
            className="bg-no-repeat h-8 max-w-[114px] w-[59px]"
            style={{ backgroundImage: `url('${imgAsset11300X86Png}')`, backgroundSize: '193.22% 102.13%', backgroundPosition: '0% 49.98%' }}
          />
          {/* Menu Button */}
          <MenuButton />
        </div>
      </div>
    </div>
  );
} 