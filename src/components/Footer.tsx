import RetroPcs from "../assets/images/image-retro-pcs.jpg"
import TopLaptops from "../assets/images/image-top-laptops.jpg"
import GrowthGaming from "../assets/images/image-gaming-growth.jpg"
function Footer() {
  return (
    <footer className="grid grid-rows-3 gap-10 lg:grid-cols-3 lg:grid-rows-1">
        <div className="cards grid grid-cols-4 grid-rows-2 gap-4">
          <img src={RetroPcs} alt="retro pc image" className="col-start-1 col-end-2 row-start-1 row-end-4"/>
          <div className="col-start-2 col-end-8 row-start-1 row-end-4 flex flex-col space-y-1">
             <p className="text-GrayishBlue text-4xl font-interBold mb-2">01</p>
             <a href="#" className="font-interExtraBold text-xl hover:text-SoftRed">Reviving Retro PCs</a>
             <p className="text-DarkgrayishBlue">What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="cards grid grid-cols-4 grid-rows-2 gap-4">
          <img src={TopLaptops} alt="Top laptops pc image" className="col-start-1 col-end-2 row-start-1 row-end-4"/>
          <div className="col-start-2 col-end-8 row-start-1 row-end-4 flex flex-col space-y-1">
             <p className="text-GrayishBlue text-4xl font-interBold mb-2">02</p>
             <a href="#" className="font-interExtraBold text-xl hover:text-SoftRed">Top 10 Laptops of 2022</a>
             <p className="text-DarkgrayishBlue">Our best picks for various needs and budgets</p>
          </div>
        </div>
        <div className="cards grid grid-cols-4 grid-rows-2 gap-4 ">
          <img src={GrowthGaming} alt="growth gaming pc image" className="col-start-1 col-end-2 row-start-1 row-end-4"/>
          <div className="col-start-2 col-end-8 row-start-1 row-end-4 flex flex-col space-y-1">
             <p className="text-GrayishBlue text-4xl font-interBold mb-2">03</p>
             <a href="#" className="font-interExtraBold text-xl hover:text-SoftRed">The Growth of Gaming</a>
             <p className="text-DarkgrayishBlue">How the pandemic has sparked fresh opportunities</p>
          </div>
        </div>
    </footer>
  )
}

export default Footer