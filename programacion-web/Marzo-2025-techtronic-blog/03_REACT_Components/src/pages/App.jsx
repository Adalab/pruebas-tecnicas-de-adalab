import Header from "../components/Header";
import LatestArticles from "../components/articles/LatestArticles";
import Footer from "../components/Footer";
import LateralPanel from "../components/LateralPanel";

import "../styles/App.css";

function App() {
  return (
    <>
      <Header />
      <main className="mx-8 py-8 md:py-12 xl:mx-40 2xl:mx-80 md:grid md:grid-cols-[1fr_368px]">
        <LatestArticles />
        
        <LateralPanel />
      </main>
      <Footer />
    </>
  );
}

export default App;
