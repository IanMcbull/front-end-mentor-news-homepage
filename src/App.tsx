import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div className="container mx-auto space-y-8 p-4 pb-12 md:p-0">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
