import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container/Container";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Itens from "./pages/Itens/Itens";
import ItemPage from "./pages/ItemPage/ItemPage";
import About from "./pages/About/About";
import Contacts from "./pages/Contacts/Contacts";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Itens />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contatos" element={<Contacts />} />
            <Route path="/page/:id" element={<ItemPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
