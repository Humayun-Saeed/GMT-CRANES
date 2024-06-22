import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Modal({ setIsModalOpen }: { setIsModalOpen: any }) {
  const handlePhoneCall = () => {
    window.location.href = "tel:+971 50 617 9048";
  };

  const handleWhatsApp = () => {
    window.location.href = "https://wa.me/+971506179048";
  };

  return (
    <div className="fixed h-[20rem] rounded-md  w-[20rem] shadow bottom-[2rem] mobile:right-[6rem] mb-[2rem]  md:right-[8rem] bg-[white] text-white font-bold   z-[100]">
      <div className="relative p-[1rem] w-full max-w-md max-h-full">
        {/* Modal content */}
        <div className="relative bg-white rounded-lg ">
          {/* Modal header */}
          <div className="flex items-center justify-between p-[1rem] md:p-[1.25rem] border-b rounded-t">
            <h3 className="text-lg font-bold text-gray-900">Contact Options</h3>
            <button
              onClick={() => {
                setIsModalOpen(false);
              }}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-[2rem] w-[2rem] ms-auto inline-flex justify-center items-center "
              data-modal-toggle="select-modal"
            >
              <svg
                className="w-[0.75rem] h-[0.75rem]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          {/* Modal body */}
          <div className="p-[1rem] md:p-[1.25rem]">
            <p className="text-gray-500 mb-4">Select your desired option:</p>
            <ul className="space-y-[1rem] mt-[0.2rem]">
              <li>
                <input
                  type="radio"
                  id="phone-call"
                  name="contact-option"
                  value="phone-call"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="phone-call"
                  className="inline-flex items-center justify-between w-full p-[0.75rem] text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 "
                  onClick={handlePhoneCall}
                >
                  <div className="block">
                    <div className="flex items-center gap-[0.4rem]">
                      <FaPhoneSquareAlt color="green" size={30} />

                      <div className="w-full text-lg text-color font-semibold">
                        Make Phone Call
                      </div>
                    </div>
                  </div>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="whatsapp"
                  name="contact-option"
                  value="whatsapp"
                  className="hidden peer"
                  required
                />
                <label
                  htmlFor="whatsapp"
                  className="inline-flex p-[0.75rem] items-center justify-between w-full  text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-900 hover:bg-gray-100 "
                  onClick={handleWhatsApp}
                >
                  <div className="block">
                    <div className="flex items-center gap-[0.4rem]">
                      <IoLogoWhatsapp color="green" size={35} />

                      <div className="w-full text-color text-lg font-semibold">
                        WhatsApp
                      </div>
                    </div>
                  </div>
                </label>
              </li>
              {/* Add more list items here */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
