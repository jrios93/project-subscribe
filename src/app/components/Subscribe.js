import Image from "next/image";
import iconsuccess from "/public/assets/images/icon-success.svg";
const Subscribe = ({ onDismiss, inputValue }) => {
  const correo = inputValue;
  const handleDismissKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      onDismiss();
    }
  };
  return (
    <div className=" bg-container 2xl:w-1/4 2xl:h-[32em] md:w-2/4 md:h-[32em] xs:w-full xs:h-screen rounded-custom px-6 py-3 shadow-md  flex flex-col items-start justify-evenly ">
      <div>
        <Image src={iconsuccess} className="text-start ml-6" alt="check" />
      </div>
      <div className=" flex flex-col items-center 2xl:justify-center xs:justify-between xs:flex gap-8 px-6 ]">
        <h1 className="text-title text-start font-bold text-5xl">
          Thanks for subscribing!
        </h1>
        <p className="text-start text-title text-sm">
          A confirmation email has been sent to{" "}
          <span className="font-semibold">{correo}</span>. Please open it and
          click the button inside to confirm your subscrition.
        </p>
        <button
          onClick={onDismiss}
          onKeyDown={handleDismissKeyDown}
          className="bg-title p-4 w-full rounded-md text-white hover:bg-gradient-to-r from-red-400 via-red-400 to-orange-500 shadow-md hover:shadow-lg"
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
