import Anchor from "../Anchor/Anchor";
import styles from "./Navbar.module.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation().pathname;
  console.log(useLocation().pathname);

  return (
    <div className={styles.navbar}>
      <Anchor link="/" ativo={location === "/"}>
        Início
      </Anchor>
      <Anchor link="/sobre" ativo={location === "/sobre"}>
        Sobre
      </Anchor>
      <Anchor link="/contatos" ativo={location === "/contatos"}>
        Contatos
      </Anchor>
    </div>
  );
};

export default Navbar;
