import { Icon } from "@iconify/react";
import styles from "./Contact.module.css";

const Contact = (props) => {
  return (
    <div className={styles.contact}>
      <div className={styles.icon} style={{ color: props.color, backgroundColor: props.bgColor }}>
        <Icon icon={props.icon} />
      </div>
      <div className={styles.info}>
        <a href={props.link}>{props.children}</a>
      </div>
    </div>
  );
};

export default Contact;
