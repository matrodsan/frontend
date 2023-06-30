import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Container from "./components/Container/Container";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Itens from "./pages/Itens/Itens";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Content>
          <Routes>
            <Route path="/" element={<Itens />} />
            <Route path="/sobre" element="Teste da pagina sobre" />
            <Route path="/contatos" element="Teste da pagina contatos" />
            <Route path="/page/:id" element="Teste da pagina id" />
            <Route path="*" element="Página não encontrada" />
          </Routes>
        </Content>
        <Footer />
      </BrowserRouter>
    </Container>
  );
}

export default App;
