export default function FooterNewsletter() {
  return (
    <div className="flex flex-col items-center px-gap-13 py-gap-11 border-y border-gray-800 sm:border-y-0 sm:border-x">
      <h1 className="font-md-regular text-white font-notoSerif mb-gap-5 text-center">
        Lets Get In Touch!
      </h1>
      <p className="font-text-md-medium text-gray-400 leading-[24px] text-center mb-gap-13">
        Whats inside? Exclusive sales, new arrivals & much more.
      </p>
      <div className="flex items-center">
        <input
          placeholder="Email Address"
          type="text"
          className="self-stretch focus:outline-none placeholder:font-text-md-medium text-white/50 border border-gray-600 pl-3"
        ></input>
        <button className="py-gap-7 px-gap-11 bg-white text-gray-950 font-text-sm-medium cursor-pointer">
          SIGN UP
        </button>
      </div>
    </div>
  );
}
