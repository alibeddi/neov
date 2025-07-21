const imgMenu = "http://localhost:3845/assets/0fc4966730cddc63637bc752e084166016aa481f.svg";

export default function MenuButton() {
  return (
    <button className="rounded-lg p-1.5 flex items-center justify-center" aria-label="Open menu">
      <img src={imgMenu} alt="menu" className="w-6 h-6" />
    </button>
  );
} 