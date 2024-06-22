import Input from "src/Components/Input/Input";
import TextareaComponent from "src/Components/TextAreaComponent/TextAreaComponent";
export const Form = () => {
  return (
    <div className="w-full p-[4%] lg:ml-[2rem]">
    <form>
      <div className="flex flex-col gap-[1.125rem]">
        <div className="flex flex-col items-start justify-between gap-[1rem] sm:flex-row">
          <Input
            label="First Name"
            placeholder="Enter your First Name"
          />
          <Input
            label="Last Name"
            placeholder="Enter your Last Name"
          />
        </div>
        <div className="">
          <Input
            label="Phone Number"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div className="">
          <Input
            label="Subject"
            placeholder="Enter your Company Website"
          />
        </div>
  
        <div className="">
        <TextareaComponent
              label="Message"
              className="w-full p-5 text-lg font-medium bg-transparent border rounded-lg outline-none resize-none border-main-color-4 text-main-color-4"
              rows={8}
              placeholder="Write your message here"
            />
        </div>
        <div className="mt-[0.1875rem]">
          {/* <label className="flex items-center gap-[0.5469rem] text-main-color-4">
            <input id="accept-checkbox" type="checkbox" className="w-[1.3125rem] h-[0.3125rem]" />
            <span className="text-lg font-medium">
              By filling out the form, I accept all
              <span> Privacy Policy</span> and
              <span>Terms</span> of the company.
            </span>
          </label> */}
        </div>
        <div className="mt-0.25rem">
          <button className="rounded-full bg-[red] p-[1rem] h-[3.1875rem]">
            <p className="text-[white] font-bold">SEND MESSAGE</p>
          </button>
        </div>
      </div>
    </form>
  </div>
  
  );
};
