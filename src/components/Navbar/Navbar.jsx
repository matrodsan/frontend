import Anchor from "../Anchor/Anchor";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Anchor link="/">Início</Anchor>
      <Anchor link="/">Sobre</Anchor>
      <Anchor link="/">Contatos</Anchor>
    </div>
  );
};

export default Navbar;
