
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 md:py-20">
      <div className="container w-[80%] mx-auto grid md:grid-cols-6">

        <div className="w-full col-span-2">
          <h2 className="text-xl mb-4">CATEGORIES</h2>
          <div className="footer-links flex flex-col text-[#B6BDC4] gap-2">
            <a href="">Web Builder</a>
            <a href="">Hosting</a>
            <a href="">Data Center</a>
            <a href="">Robotic-Automation</a>
          </div>
        </div>

        <div className="w-full flex flex-col">
          <h2 className="text-xl mb-4">CONTACT</h2>
          <div className="footer-links flex flex-col text-[#B6BDC4] gap-2">
            <a href="">Contact</a>
            <a href="">Privacy Policy</a>
            <a href="">Terms of Service</a>
            <a href="">Categories</a>
            <a href="">About</a>
          </div>
        </div>

        <div className="w-full col-span-3 flex md:items-center md:justify-center my-5 md:mt-0">
            <div className="flex items-center gap-1 text-[#B6BDC4]">
                <p className="text-lg">United Staes</p>
                <img src="./assets/vector-down.png" alt="" />
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
