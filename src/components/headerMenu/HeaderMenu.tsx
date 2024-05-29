import logo from "../../assets/png/logo.png";
import ifood from "../../assets/png/ifood-43 1.png";
import instagram from "../../assets/png/instagram-brands.png";
import whatsapp from "../../assets/png/whatsapp.png";

function HeaderMenu() {
  const menuItems = ["Home", "Promoção", "Cardápio", "Comentário", "Contato"];

  return (
    <header className="bg-[#3B200B0D] backdrop-blur-sm shadow-md p-3 flex justify-evenly items-center font-normal text-primary w-full fixed top-0 left-0">
      <a href="">
        <div className="flex items-center text-[29.38px]">
          <img src={logo} alt="" className="w-[29.49px] h-[30.81px]" />
          <h1 className=" text-secondary">
            <strong>EMPIRE</strong> BURGER
          </h1>
        </div>
      </a>

      <nav className="">
        <ul className="flex gap-5">
          {menuItems.map((item, index) => (
            <li key={index} className="">
              <a
                href=""
                className="text-primary text-18 transition-all duration-300 hover:font-bold"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex gap-3">
        <a href="">
          <img src={ifood} alt="" className="w-[27px] h-[14.27px] mt-2" />
        </a>
        <a href="">
          <img src={instagram} alt="" />
        </a>
        <a href="">
          <div className="bg-300 flex items-center rounded space-x-2 w-[123px] h-[34px] justify-center">
            <img src={whatsapp} alt="" className="w-[21.43px] h-[21px]" />
            <p className="text-secondary font-bold">Contato</p>
          </div>
        </a>
      </div>
    </header>
  );
}

export default HeaderMenu;