const logo = "/Neov Logo.png";
const ellipse1 = "http://localhost:3845/assets/01b7b08bba7922f8b78c8162f2f8b0111fd106da.svg";
const ellipse2 = "http://localhost:3845/assets/70d099da91a348c89fd441924837a24cd4b179ff.svg";
const social1 = "http://localhost:3845/assets/55dbea5648b439fa32254f751ccbaf545f408fc4.svg";
const social2 = "http://localhost:3845/assets/4e2f9f4e15be3bce1fcf264c332b5522d2515069.svg";
const social3 = "http://localhost:3845/assets/780c41b3c02bda1d3499f0d2feecf7166ae3cfa4.svg";

const columns = [
  {
    title: "Products",
    links: [
      { name: "Sitesprint" },
      { name: "Boardly", badge: true },
      { name: "Vistadash" },
      { name: "Lumina" },
      { name: "Spectra" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Contact" },
      { name: "Community" },
      { name: "Live chat" },
      { name: "Guides" },
      { name: "Feedback" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About" },
      { name: "Careers" },
      { name: "Partnerships" },
      { name: "Blog" },
      { name: "Press" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy" },
      { name: "Terms" },
      { name: "Disclaimer" },
      { name: "Accessibility" },
      { name: "Cookie" },
    ],
  },
];

function Badge() {
  return (
    <span className="bg-green-50 border border-green-200 text-green-700 text-xs font-medium rounded-full px-2 py-0.5 ml-2">Badge</span>
  );
}

export default function FooterDesktop() {
  return (
    <div className="relative bg-white flex flex-col items-center pt-16 w-full overflow-hidden">
      {/* Decorative Ellipses */}
      <img src={ellipse1} alt="ellipse" className="absolute left-[60%] -top-40 w-[600px] opacity-30 pointer-events-none select-none" />
      <img src={ellipse2} alt="ellipse" className="absolute -left-80 top-[200px] w-[700px] opacity-30 pointer-events-none select-none" />
      <div className="flex flex-row gap-8 items-start justify-center w-full max-w-[1216px] z-10">
        {/* Logo */}
        <div className="flex flex-col gap-8 items-start w-48">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        {/* Columns */}
        {columns.map((col, idx) => (
          <div key={col.title} className="flex flex-col gap-4 items-start w-48">
            <div className="text-gray-500 text-[16px] font-medium">{col.title}</div>
            {col.links.map((link, i) => (
              <div key={link.name} className="flex flex-row items-center text-gray-900 text-[16px] font-medium">
                {link.name}
                {link.badge && <Badge />}
              </div>
            ))}
          </div>
        ))}
      </div>
      {/* Bottom bar */}
      <div className="bg-gray-50 w-full mt-12 py-8 flex flex-row items-center justify-between px-8 max-w-[1440px] z-10">
        <div className="text-gray-600 text-[16px]">Copyright © 2025 neov All rights reserved.</div>
        <div className="flex flex-row gap-4 items-center">
          <img src={social1} alt="social" className="w-5 h-5 rounded-md" />
          <img src={social2} alt="social" className="w-5 h-5 rounded-full" />
          <img src={social3} alt="social" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
} 