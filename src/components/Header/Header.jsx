import styles from "./Header.module.css";
import { Icon } from "@iconify/react";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.side}>
        <img src="./logo512.png" alt="React Logo" />
        <h1>
          My <span>React</span> Blog
        </h1>
      </div>
      <div className={styles.side}>
        <Icon icon="mingcute:user-4-fill" />
      </div>
    </div>
  );
};

export default Header;
