import { FaWhatsapp as WhatsappIcon } from "react-icons/fa";
import { IoCall as CallIcon } from "react-icons/io5";
import { MdEmail as MailIcon } from "react-icons/md";
import { dummyCompany } from "src/Utils/MediaFilesPath";

function Info() {
  const data = [
    {
      title: "Call Us",
      desription: "Call our team .",
      contacts: [
        { icon: <CallIcon />, label: "00971-50-6179048" },
        { icon: <CallIcon />, label: "00971-50-6179701" },
        { icon: <CallIcon />, label: "00971-2467062" },
      ],
    },
    {
      title: "Chat with us",
      desription: "Speak to our friendly team from social media accounts.",
      contacts: [
        { icon: <WhatsappIcon />, label: "Start a live chat" },
        { icon: <MailIcon />, label: "Shoot us an email" },
      ],
    },
    {
      title: "Visit us",
      desription: "Mussafah industrial area m-17 street ath thiqah 1st",
      contacts: [],
    },
  ];

  return (
    <div className="flex flex-col w-full gap-[4.375rem]">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col gap-[1.25rem]">
          <h2 className="text-2xl font-semibold text-main-color-7">
            {item.title}
          </h2>
          <h3 className="text-xl font-medium text-[gray]/80">
            {item.desription}
          </h3>
          {item.contacts.map((itemC, indexC) => (
            <div key={indexC} className="flex items-center gap-[0.75rem]">
              {itemC.icon}
              <p className="text-lg font-semibold">{itemC.label}</p>
            </div>
          ))}
        </div>
      ))}
      <div>
        <img  src={dummyCompany} className="w-full h-full" alt="Demo Company Image" />
      </div>
    </div>
  );
}

export default Info;
