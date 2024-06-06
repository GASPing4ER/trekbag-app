import BackgroundHeader from "./BackgroundHeader";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
      <BackgroundHeader />

      <main>
        <Header />
        <ItemList />
        <Sidebar />
      </main>

      <Footer />
    </>
  );
}

export default App;
