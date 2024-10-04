import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import comfort from "../../assets/comfort.png";
import fotr from "../../assets/fotr1.png";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-8 mt-12">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col mb-6">
          <img className="w-[200px] mb-4 " src={comfort} alt="Logo" />
          <p className="mb-4">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus.
          </p>
          <div className="flex space-x-4">
            <BsFacebook className="text-2xl hover:text-blue-500 transition" />
            <AiOutlineTwitter className="text-2xl hover:text-blue-400 transition" />
            <BsInstagram className="text-2xl hover:text-pink-500 transition" />
            <AiFillYoutube className="text-2xl hover:text-red-600 transition" />
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-bold mb-2">Categories</h1>
          <ul className="space-y-1">
            <li>Sofa</li>
            <li>Armchair</li>
            <li>Wing Chair</li>
            <li>Desk Chair</li>
            <li>Wooden Chair</li>
            <li>Park Bench</li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-bold mb-2">Support</h1>
          <ul className="space-y-1">
            <li>Help & Support</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Help</li>
          </ul>
        </div>

        <div className="mb-6">
          <h1 className="text-lg font-bold mb-2">Newsletter</h1>
         <div className="flex gap-2">
         <input
            type="text"
            placeholder="Enter your email"
            className="border rounded-lg p-2  focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 transition">
            Subscribe
          </button>
         </div>
          <p className="mt-4 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim.
          </p>
        </div>
      </div>

      <div className="bg-gray-800 py-4 mt-8 text-center flex justify-between items-center max-w-screen-xl mx-auto px-4 border-t border-gray-700 rounded-t-lg ">
        <p className="text-sm">
          © 2021 - Blogy - Designed & Developed by Zakirsoft
        </p>
        <img src={fotr} alt="Footer Decoration" className="w-[200px] h-auto" />
      </div>
    </footer>
  );
};

export default Footer;
