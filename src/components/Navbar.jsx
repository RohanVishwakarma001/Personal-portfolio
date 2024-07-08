import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 lg:mb-6">
      <div className="flex flex-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="Logo image" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://github.com/RohanVishwakarma001">
          <FaGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rohan-vishwakarma-18507a293/"
        >
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://x.com/RohanVi20270612">
          <FaSquareXTwitter />
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/_sanatani_rohan_108/"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
