import HeroSectionImage from "../assets/images/image-web-3-desktop.jpg";
import HeroSectionMobileImage from "../assets/images/image-web-3-mobile.jpg";

function HeroSection() {
  return <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-3 lg:gap-6">
    <img src={HeroSectionMobileImage} className="lg:hidden"/>
    <img src={HeroSectionImage} className="hidden lg:block col-start-1 col-end-3 row-start-1 row-end-3"/>
    <div className="flex flex-col gap-6 lg:flex-row lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-3">
    <h2 className="font-interExtraBold text-6xl md:max-w-sm">The Bright Future of Web 3.0?</h2>
    <div className="flex flex-col gap-4 md:gap-6 text-justify">
    <p className="text-DarkgrayishBlue text-[18px] leading-8 md:max-w-lg">We dive into the next evolution of the web that claims to put the power of the platforms back int the hands of the people. But is it really fulfilling its promise?</p>
    <button className="p-4 bg-SoftRed text-OffWhite font-interBold max-w-[200px] text-md hover:bg-VeryDarkBlue transition-all ">READ MORE</button>
    </div>
    </div>
    <div className="bg-VeryDarkBlue p-6 font-inter mt-12 md:mt-0 flex flex-col space-y-8 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4">
      <h3 className="text-SoftOrange font-interBold text-3xl">New</h3>
      <div className="flex flex-col">
       <a href="#" className="text-OffWhite font-interBold text-xl mt-3 hover:text-SoftOrange">Hydrogen VS Electic Cars</a>
       <p className="text-DarkgrayishBlue text-md mb-4 text-xl mt-2 border-b pb-8 border-b-GrayishBlue">Will hydrogen fueled cars ever catch up to EVs?</p>
       
      </div>
      <div className="flex flex-col">
       <a href="#" className="text-OffWhite font-interBold text-xl mt-3 hover:text-SoftOrange">The Downsides of AI Artistry</a>
       <p className="text-DarkgrayishBlue text-md mb-4 text-xl mt-2 border-b pb-8 border-b-DarkggrayishBlue">What are the possible adverse effects of the on-demand AI image generation?</p>
      </div>
      <div className="flex flex-col">
       <a href="#" className="text-OffWhite font-interBold text-xl mt-3 hover:text-SoftOrange">Is VC Funding Drying up?</a>
       <p className="text-DarkgrayishBlue text-md mb-4 text-xl mt-2">Private funding by VC firms is down 50% YOY. We take a look at what that means</p>
       
      </div>
    </div>
  </div>;
}

export default HeroSection;
