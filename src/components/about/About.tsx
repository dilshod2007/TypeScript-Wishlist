import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";

const About = () => {
  return (
    <>
      <div className="py-12 bg-gradient-to-b from-white mt-[100px]">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">What Clients Say About Us</h1>

        <div className="flex flex-wrap justify-center gap-12 max-w-[1550px] mx-auto">
          <div className="w-[700px] bg-white rounded-lg shadow-lg p-6 relative">
            <p className="text-gray-600 italic mb-6 border-l-4 border-blue-300 pl-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus."
            </p>
            <div className="flex items-center gap-4">
              <img src={avatar1} alt="John Smith" className="w-12 h-12 object-cover rounded-full border-2 border-gray-300" />
              <div>
                <span className="block text-lg font-semibold text-gray-800">John Smith</span>
                <span className="block text-sm text-gray-500">Fashion Designer</span>
              </div>
            </div>
          </div>

          <div className="w-[700px] bg-white rounded-lg shadow-lg p-6 relative">
            <p className="text-gray-600 italic mb-6 border-l-4 border-blue-300 pl-4">
              "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit."
            </p>
            <div className="flex items-center gap-4">
              <img src={avatar2} alt="Howard" className="w-12 h-12 object-cover rounded-full border-2 border-gray-300" />
              <div>
                <span className="block text-lg font-semibold text-gray-800">Howard</span>
                <span className="block text-sm text-gray-500">Fashion Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
