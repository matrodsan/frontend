import Contact from "../../components/Contact/Contact";
import styles from "./Contacts.module.css";
import social from "../../json/social.json";

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <h1>Contatos</h1>
      <div>
        {social.map((el, index) => (
          <Contact link={el.link} icon={el.icon} bgColor={el.bgColor} color={el.color} key={index}>
            {el.title}
          </Contact>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
