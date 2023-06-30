import Contact from "../../components/Contact/Contact";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h1>Contatos</h1>
      <div>
        <Contact link="https://www.facebook.com/mateusrodriguessantos" icon="" bgColor="blue" color="white">
          Teste
        </Contact>
      </div>
    </div>
  );
};

export default Contacts;
