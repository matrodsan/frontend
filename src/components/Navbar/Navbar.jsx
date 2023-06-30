import Anchor from "../Anchor/Anchor";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Anchor link="/">Início</Anchor>
      <Anchor link="/sobre">Sobre</Anchor>
      <Anchor link="/contatos">Contatos</Anchor>
    </div>
  );
};

export default Navbar;
